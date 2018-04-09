/**
 * Test encrypt for music.163.com
 */
import * as CryptoJS from 'crypto-js';
import axios from 'axios';
import * as querystring from 'querystring';

const MUSIC_API_URL_163: string = 'https://music.163.com/weapi/song/detail';
// const MUSIC_API_URL_163: string = 'http://music.163.com/weapi/song/enhance/player/url';

interface EncryptedData {
  encText: string;
  encSecKey: string;
}

function generateRandomText(length: number): string {
  // solidify the random text
  return 'CLdj6QVhWOf3xWZc';
  const sources: string =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result: string = '';
  for (let i: number = 0; i < length; i++) {
    // tslint:disable-next-line
    result += sources.charAt(Math.floor(Math.random() * sources.length));
  }

  return result;
}

function encryptAES(message: string, secretPassphrase: string): string {
  return CryptoJS.AES.encrypt(
    CryptoJS.enc.Utf8.parse(message),
    CryptoJS.enc.Utf8.parse(secretPassphrase),
    {
      iv: CryptoJS.enc.Utf8.parse('0102030405060708'),
      mode: CryptoJS.mode.CBC,
    }
  ).toString();
}

function encryptRSA(randomText: string, param1: string, param2: string): string {
  return 'c779360e9b98223b6b810fee6926f522a2f1c5b608ce90827a09385628ac1c60fa1b7b99da92c68bacd29373d698f36c8352427edb4f85c314acf29bf2d42071f5038326b274a4364111f2b5dffdf5fd0cc27c0a0bf02a8d866353029b35d04c5740ad78b9fb43c06084cb825763caf1b26531c0d37028dbc1f0ce2bf83d0cd3';
}

/**
 *
 * @param message 需要加密的json数据字符串
 * @param param1 RSA参数1 常量
 * @param param2 RSA参数2 常量
 * @param secretPassphrase 密钥 常量
 */
function aesrsa(
  message: string,
  param1: string,
  param2: string,
  secretPassphrase: string
): EncryptedData {
  const randomText: string = generateRandomText(16);

  return {
    encText: encryptAES(encryptAES(message, secretPassphrase), randomText),
    encSecKey: encryptRSA(randomText, param1, param2),
  };
}

(() => {
  // const randomText: string = 'CLdj6QVhWOf3xWZc';
  const param1: string = '010001';
  const param2: string =
    '00e0b509f6259df8642dbc35662901477df22677ec152b5ff68ace615bb7b725152b3ab17a876aea8a5aa76d2e417629ec4ee341f56135fccf695280104e0312ecbda92557c93870114af6c9d05c4f7f0c3685b7a46bee255932575cce10b424d813cfe4875d3e82047b97ddef52741d546b8e289dc6935b3ece0462db0a22b8e7';
  const secretPassphrase: string = '0CoJUm6Qyw8W8jud';

  function test(id: number | string): void {
    const encData: EncryptedData = aesrsa(
      JSON.stringify({
        br: 128000,
        csrf_token: '',
        ids: `[${id}]`,
      }),
      param1,
      param2,
      secretPassphrase
    );
    console.log(id);
    console.log(encData);

    axios
      .post(
        MUSIC_API_URL_163,
        querystring.stringify({
          params: encData.encText,
          encSecKey: encData.encSecKey,
        }),
        {
          headers: {
            Referer: 'http://music.163.com/',
          },
        }
      )
      .then(response => {
        console.log('success');
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  test(427416324);
})();
