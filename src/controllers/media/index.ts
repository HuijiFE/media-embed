import * as express from 'express';
import * as URL from 'url';

import videoYouku from './videoYouku';

/**
 * 通用媒体信息
 */
export interface MediaInfo {
  platform: string;
  format: 'video' | 'audio';
  id: string;
  title: string;
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
   * @param info Media info or media id
   */
  embed(info: MediaInfo | string): string;
}

const handlersAll: {
  [platform: string]: MediaHandler;
} = {
  'music.163.com': videoYouku,
  'y.qq.com': videoYouku,
  'v.qq.com': videoYouku,
  'youku.com': videoYouku,
  'tudou.com': videoYouku,
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
  next: express.NextFunction
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
  next: express.NextFunction
): void {
  const url: URL.UrlWithParsedQuery = URL.parse(request.query.url, true);
  const handler: MediaHandler | undefined = getHandler(url);
  if (handler) {
    try {
      response.send(handler.embed(handler.id(url)));
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

// media info /media/info/<url>
media.get('/info', mediaInfo);

// media info /media/embed/<url>
media.get('/embed', mediaEmbed);

export default media;
