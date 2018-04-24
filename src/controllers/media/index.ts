import * as express from 'express';
import * as URL from 'url';

import videoYouku from './videoYouku';
import music163 from './music163';

/**
 * 通用媒体信息
 */
export interface MediaInfo {
  platform: string;
  format: 'video' | 'audio';
  id: string;
  title: string;
  // 专辑或剧集
  collection: string;
  description: string;
  /**
   * 原页面链接
   */
  link: string;
  /**
   * 缩略图
   */
  thumbnail: string;
  /**
   * 用于 iframe 的 src 属性
   */
  src: string;
  /**
   * 时长，单位：秒
   */
  duration: string;
}

/**
 * Includes 2 methods to get media info or html embed code
 */
export interface MediaHandler {
  id(url: URL.UrlWithParsedQuery): string;

  info(url: URL.UrlWithParsedQuery): Promise<MediaInfo>;

  /**
   * Get the html embed code (iframe tag).
   * @param infoOrId Media info or media id
   */
  embed(infoOrId: MediaInfo | string, format?: string): string;
}

const handlersAll: {
  [platform: string]: MediaHandler;
} = {
  'youku.com': videoYouku,
  'tudou.com': videoYouku,
  'music.163.com': music163,
  'y.qq.com': videoYouku,
  'v.qq.com': videoYouku,
};

/**
 * Detect which platform the url for. If the platform is non-supported, will return empty string;
 * @param url url to the media web page
 */
export function getHandler(url: URL.UrlWithParsedQuery): MediaHandler | undefined {
  const hostname: string = url.hostname || '';

  for (const platform of Object.keys(handlersAll)) {
    if (hostname.endsWith(platform)) {
      return handlersAll[platform];
    }
  }
}

export function mediaInfo(
  request: express.Request,
  response: express.Response,
  next: express.NextFunction,
): void {
  const url: URL.UrlWithParsedQuery = URL.parse(request.query.url, true);
  const handler: MediaHandler | undefined = getHandler(url);
  if (handler) {
    handler
      .info(url)
      .then(info => response.json(info))
      .catch(next);
  } else {
    const error: Error = new Error(`Not supported platform: ${request.query.url}`);
    error.status = 400;
    next(error);
  }
}

export function mediaEmbed(
  request: express.Request,
  response: express.Response,
  next: express.NextFunction,
): void {
  const url: URL.UrlWithParsedQuery = URL.parse(request.query.url, true);
  const format: string = <string>request.query.format || 'html';
  const handler: MediaHandler | undefined = getHandler(url);
  if (handler) {
    try {
      response.send(handler.embed(handler.id(url), format));
    } catch (error) {
      next(error);
    }
  } else {
    const error: Error = new Error(`Not supported platform: ${request.query.url}`);
    error.status = 400;
    next(error);
  }
}

/**
 * Router for media
 */
const media: express.Router = express.Router();

// media info /media/info?url=http%3A%2F%2Fmusic.163.com%2F%23%2Fsong%3Fid%3D33599431%26userid%3D35433341
media.get('/info', mediaInfo);

// media info /media/embed?url=http%3A%2F%2Fmusic.163.com%2F%23%2Fsong%3Fid%3D33599431%26userid%3D35433341&format=json|html
media.get('/embed', mediaEmbed);

export default media;
