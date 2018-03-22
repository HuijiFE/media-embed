import * as URL from 'url';
import axios, { AxiosError, AxiosResponse } from 'axios';

import { MediaHandler, MediaInfo } from './index';

export async function music163Info(url: URL.UrlWithParsedQuery): Promise<MediaInfo> {}

export function music163Embed(info: MediaInfo | string): string {}

/**
 *
 */
const music163: MediaHandler = {
  info: music163Info,
  embed: music163Embed,
};

export default music163;
