/**
 * Test node.js url api
 */

import * as URL from 'url';

const urlHash: URL.UrlWithParsedQuery = URL.parse('https://music.163.com/#/song?id=33599431&userid=35433341', true);

console.log(urlHash.href);
console.log(urlHash.hash);

const urlCorrected: URL.UrlWithParsedQuery = URL.parse((<string>urlHash.href).replace('/#/', '/m/'), true);

console.log(urlCorrected.href);
console.log(urlCorrected.query);
