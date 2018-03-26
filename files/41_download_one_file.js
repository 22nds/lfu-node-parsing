/** 
 * Download
 * https://www.npmjs.com/package/download
 * 
 * Download one file:
 * - Define URL
 * - Define folder - ./41_image
 * - Define success message
 */

const download = require('progress-download');

var file = 'https://www.lezfemuniverza.org/wp-content/uploads/2018/02/lesbians-1974-SF-Gay-Parade-Rink-Foto-1-e1517516581958.jpg';

download(file, './41_image').then(() => {
    console.log('Downloaded: ' + file);
});