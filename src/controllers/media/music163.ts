import * as URL from 'url';
import axios, { AxiosError, AxiosResponse } from 'axios';
import * as CryptoJS from 'crypto-js';

import { MediaHandler, MediaInfo } from './index';
import * as querystring from 'querystring';

const MUSIC_API_URL_163: string = 'https://music.163.com/weapi/song/detail';

// region ======== ENCRYPT ========

export interface SongDetailRequestParams {
  br: 128000;
  csrf_token: '';
  ids: string; // `[${id}]`
}

/**
 * 加密后的API请求数据格式
 */
interface EncryptedData {
  params: string;
  encSecKey: string;
}

/**
 * AES 加密
 * @param message 需要加密的字符串
 * @param secretPassphrase 密钥
 */
function encryptAES(message: string, secretPassphrase: string): string {
  return CryptoJS.AES.encrypt(
    CryptoJS.enc.Utf8.parse(message),
    CryptoJS.enc.Utf8.parse(secretPassphrase),
    {
      iv: CryptoJS.enc.Utf8.parse('0102030405060708'),
      mode: CryptoJS.mode.CBC,
    },
  ).toString();
}

/**
 * 获取加密后的API请求数据。
 *
 * 网易云音乐 core.js 中的加密函数 asrsea(d, e, f, g)：
 * d: JSON.stringify 序列化后的请求参数；
 * e, f: RSA加密参数，被混淆的常量；
 * g: AES加密参数，被混淆的常量；
 *
 * 对请求参数进行AES加密后，再使用长度16的随机字符串作为密钥进行二次加密；
 * 再使用RSA对随机字符串进行加密得到 encSecKey；
 * 只要将随机字符串固定，就能得到固定的 encSecKey
 *
 * @param params API请求参数
 */
function encrypt(params: object): EncryptedData {
  return {
    params: encryptAES(
      encryptAES(JSON.stringify(params), '0CoJUm6Qyw8W8jud'),
      'CLdj6QVhWOf3xWZc',
    ),
    // tslint:disable:max-line-length
    encSecKey:
      'c779360e9b98223b6b810fee6926f522a2f1c5b608ce90827a09385628ac1c60fa1b7b99da92c68bacd29373d698f36c8352427edb4f85c314acf29bf2d42071f5038326b274a4364111f2b5dffdf5fd0cc27c0a0bf02a8d866353029b35d04c5740ad78b9fb43c06084cb825763caf1b26531c0d37028dbc1f0ce2bf83d0cd3',
  };
}

// endregion

// region ======== MODEL ========

/**
 * 艺术家信息
 */
export interface SongInfo163ArtistObject {
  name: string;
  id: number;
  picId: number;
  img1v1Id: number;
  briefDesc: string;
  picUrl: string;
  img1v1Url: string;
  albumSize: number;
  alias: string[];
  trans: '';
  musicSize: 0;
}

/**
 * 专辑信息
 */
export interface SongInfo163AlbumObject {
  name: string;
  id: number;
  // tslint:disable-next-line:no-reserved-keywords
  type: string;
  size: number;
  picId: number;
  blurPicUrl: string;
  companyId: number;
  pic: number;
  picUrl: string;
  publishTime: number;
  description: string;
  tags: string;
  company: string;
  briefDesc: string;
  artist: SongInfo163ArtistObject;
  songs: number[];
  alias: string[];
  status: number;
  copyrightId: number;
  commentThreadId: string;
  artists: SongInfo163ArtistObject[];
  subType: string;
}

export interface SongInfo163Music {
  name: string;
  id: number;
  size: number;
  extension: string;
  sr: number;
  dfsId: number;
  bitrate: number;
  playTime: number;
  volumeDelta: number;
  dfsId_str: string;
}

/**
 * 歌曲信息
 */
export interface SongInfo163 {
  name: string;
  id: number;
  position: number;
  alias: string[];
  status: number;
  /**
   * 价格
   */
  fee: number;
  copyrightId: 457010;
  disc: '1';
  no: 9;
  artists: SongInfo163ArtistObject[];
  album: SongInfo163AlbumObject;
  starred: boolean;
  popularity: number;
  score: number;
  starredNum: number;
  duration: number;
  playedNum: number;
  dayPlays: number;
  hearTime: number;
  ringtone: string;
  crbt: object;
  audition: object;
  copyFrom: string;
  commentThreadId: string;
  ftype: number;
  rtype: number;
  rurl: string;
  rtUrl: string;
  rtUrls: string[];
  copyright: number;
  mvid: number;
  mp3Url: string;
  transNames: string[];
  hMusic: SongInfo163Music;
  mMusic: SongInfo163Music;
  lMusic: SongInfo163Music;
  bMusic: SongInfo163Music;
}

// endregion

export function music163Id(url: URL.UrlWithParsedQuery): string {
  // http://music.163.com/m/song?id=33599431&userid=35433341
  // http://music.163.com/#/song?id=33599431&userid=35433341
  let href: string | undefined = url.href;
  if (!href) {
    const error: Error = new Error('Invalid arguments: empty url.');
    error.status = 400;
    throw error;
  }

  if (href.includes('/#/')) {
    href = href.replace('#', 'm');
  }

  const urlCorrected: URL.UrlWithParsedQuery = URL.parse(href, true);

  if (!urlCorrected.query.id) {
    const error: Error = new Error(`ID no found (DEBUG): '${href}'`);
    error.status = 400;
    throw error;
  }

  return <string>urlCorrected.query.id;
}

interface SongInfo163Response {
  songs: SongInfo163[];
}

export async function music163Info(url: URL.UrlWithParsedQuery): Promise<MediaInfo> {
  try {
    const id: string = music163Id(url);
    const encryptedData: EncryptedData = encrypt({
      br: 128000,
      csrf_token: '',
      ids: `[${id}]`,
    });
    const response: AxiosResponse<SongInfo163Response> = await axios.post<
      SongInfo163Response
    >(MUSIC_API_URL_163, querystring.stringify(encryptedData), {
      headers: {
        // tslint:disable-next-line:no-http-string
        Referer: 'http://music.163.com/',
      },
    });

    // return <any>response.data.songs[0];
    return {
      platform: 'music.163.com',
      format: 'audio',
      id,
      title: response.data.songs[0].name,
      collection: response.data.songs[0].album ? response.data.songs[0].album.name : '',
      description: '',
      link: `https://music.163.com/m/song?id=${id}`,
      thumbnail: response.data.songs[0].album ? response.data.songs[0].album.picUrl : '',
      src: `https://music.163.com/outchain/player?type=2&id=${id}&auto=0&height=66`,
      duration: response.data.songs[0].duration.toString(),
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

export function music163Embed(infoOrId: MediaInfo | string): string {
  const id: string = typeof infoOrId === 'string' ? infoOrId : infoOrId.id;

  return `<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width="330" height="86" src="https://music.163.com/outchain/player?type=2&id=${id}&auto=0&height=66"></iframe>`;
}

/**
 * Get music id, info or embed code for music.163.com
 */
const music163: MediaHandler = {
  id: music163Id,
  info: music163Info,
  embed: music163Embed,
};

export default music163;
