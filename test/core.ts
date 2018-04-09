/**
 * Core.js
 */

function getRandomText(length: number): string {
  const text: string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result: string = '';
  for (let i: number = 0; i < length; i++) {
    const index: number = Math.floor(Math.random() * text.length);
    result += text.charAt(index);
  }

  return result;
}

function encryptAES(message: string, key: string): string {
  return CryptoJS.AES.encrypt(
    CryptoJS.enc.Utf8.parse(message),
    CryptoJS.enc.Utf8.parse(key),
    {
      iv: CryptoJS.enc.Utf8.parse('0102030405060708'),
      mode: CryptoJS.mode.CBC,
    }
  ).toString();
}

function encryptRSA(a, b, c) {
  var d, e;
  return setMaxDigits(131), (d = new RSAKeyPair(b, '', c)), (e = encryptedString(d, a));
}

// tslint:disable-next-line:no-any
function aesrsa(message: string, param1: string, param2: string, key: string): any {
  // tslint:disable-next-line:no-any
  const result: any = {};

  const randomText: string = getRandomText(16);

  result.encText = encryptAES(encryptAES(message, key), randomText);
  result.encSecKey = encryptRSA(randomText, param1, param2);

  return result;
}

// tslint:disable
(<any>window).asrsea = aesrsa;
