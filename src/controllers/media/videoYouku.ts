import * as URL from 'url';
import axios, { AxiosError, AxiosResponse } from 'axios';

import { MediaHandler, MediaInfo } from './index';

/**
 * Youku 视频 API URL.
 */
export const VIDEO_API_URL_YOUKU: string = 'https://api.youku.com/videos/show.json';
const clientId: string | undefined = process.env.YOUKU_CLIENT_ID;

// region ======== MODEL ========

/**
 * User 上传用户
 */
export interface VideoInfoYoukuUserObject {
  /**
   * 用户ID （官方文档中有误，类型实际为数字）
   */
  id: number;
  /**
   * 用户名
   */
  name: string;
  /**
   * 用户个人空间地址
   */
  link: string;
}

/**
 * Show 节目信息
 */
export interface VideoInfoYoukuShowObject {
  /**
   * 节目ID
   */
  id: string;

  /**
   * 节目名称
   */
  name: string;

  /**
   * 节目页地址
   */
  link: string;

  /**
   * 节目付费字段, 0：免费 1：付费
   */
  paid: 0 | 1;

  /**
   * 节目是否独播, 0: 非独播 1: 独播
   */
  exclusive: 0 | 1;

  /**
   * 节目视频类型 正片 预告片 花絮
   */
  // tslint:disable-next-line:no-reserved-keywords
  type: '正片' | '预告片' | '花絮';

  /**
   * 节目视频中序号
   */
  seq: number;

  /**
   * 节目中视频的集数或期数 (日期型使用YYYYMMDD） 非节目正片此字段为null
   */
  stage: string;

  /**
   * 视频收录到节目的时间 (YYYY-MM-DD HH:NN:SS)
   */
  collecttime: string;
}

/**
 * 视频信息
 */
export interface VideoInfoYouku {
  /**
   * 视频唯一ID
   */
  id: string;

  /**
   * 视频标题
   */
  title: string;

  /**
   * 视频播放链接
   */
  link: string;

  /**
   * 视频缩略图（小）
   */
  thumbnail: string;

  /**
   * 视频缩略图（大）
   */
  bigThumbnail: string;

  /**
   * 视频时长，单位：秒
   */
  duration: string;

  /**
   * 视频分类
   */
  category: string;

  /**
   * 视频状态, normal: 正常 encoding: 转码中 fail: 转码失败 in_review: 审核中 blocked: 已屏蔽 limited:分级
   */
  state: 'normal' | 'encoding' | 'fail' | 'in_review' | 'blocked' | 'limited';

  /**
   * 创建时间
   */
  created: string;

  /**
   * 发布时间
   */
  published: string;

  /**
   * 视频描述
   */
  description: string;

  /**
   * 播放器
   */
  player: string;

  /**
   * 公开类型， all: 公开 friend: 仅好友观看 password: 输入密码观看 private: 私有
   */
  public_type: 'all' | 'friend' | 'password' | 'private';

  /**
   * 版权所有, original: 原创 reproduced: 转载
   */
  copyright_type: 'original' | 'reproduced';

  /**
   * 上传用户对象
   */
  user: VideoInfoYoukuUserObject;

  /**
   * 视频标签， 多个标签用逗号分隔
   */
  tags: string;

  /**
   * 总播放数
   */
  view_count: number;

  /**
   * 操作限制, COMMENT_DISABLED: 禁评论 DOWNLOAD_DISABLED: 禁下载
   */
  operation_limit: string[];

  /**
   * 视频格式 flvhd flv 3gphd 3gp hd hd2
   */
  streamtypes: string[];

  /**
   * 所属节目对象（默认不返回）
   */
  show: VideoInfoYoukuShowObject;
}

// endregion

export function videoYoukuId(url: URL.UrlWithParsedQuery): string {
  let videoId: string | undefined;
  if (url.pathname) {
    videoId = url.pathname
      .split('/')
      .find(
        node =>
          node.startsWith('id_') && (node.endsWith('==') || node.endsWith('==.html'))
      );
  }
  if (!videoId) {
    const error: Error = new Error(`ID no found: "${url.href}"`);
    error.status = 400;
    throw error;
  }
  videoId = videoId.replace('id_', '').replace('.html', '');

  return videoId;
}

export async function videoYoukuInfo(url: URL.UrlWithParsedQuery): Promise<MediaInfo> {
  try {
    const videoId: string = videoYoukuId(url);
    const response: AxiosResponse<VideoInfoYouku> = await axios.get<VideoInfoYouku>(
      VIDEO_API_URL_YOUKU,
      {
        params: {
          client_id: clientId,
          video_id: videoId,
          ext: 'show',
        },
        timeout: 2048,
      }
    );

    return {
      platform: 'youku',
      format: 'video',
      id: videoId,
      title:
        response.data.show && response.data.show.name
          ? `${response.data.title} - ${response.data.show.name}`
          : `${response.data.title}`,
      description: response.data.description,
      link: `https://v.youku.com/v_show/id_${videoId}.html`,
      thumbnail: response.data.bigThumbnail || response.data.thumbnail || '',
      src: `https://player.youku.com/embed/${videoId}`,
      duration: response.data.duration,
    };
  } catch (error) {
    const axiosError: AxiosError = <AxiosError>error;
    const nextError: Error = new Error(axiosError.message);
    nextError.status = axiosError.status;
    if (axiosError.response) {
      nextError.data = axiosError.response.data;
    }
    throw nextError;
  }
}

export function videoYoukuEmbed(info: MediaInfo | string): string {
  const id: string = typeof info === 'string' ? info : info.id;

  return `<iframe height="498" width="510" src="http://player.youku.com/embed/${id}" frameborder="0" allowfullscreen></iframe>`;
}

const videoYouku: MediaHandler = {
  id: videoYoukuId,
  info: videoYoukuInfo,
  embed: videoYoukuEmbed,
};

export default videoYouku;
