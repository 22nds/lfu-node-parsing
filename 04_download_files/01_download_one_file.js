/** 
 * Download
 * https://www.npmjs.com/package/download
 * 
 * Download one file:
 * - Define URL
 * - Define folder - downloads
 * - Define success message
 */

const download = require('download');

var file = 'https://radiostudent.si/sites/default/files/posnetki/Sektor%20%C5%BD/2012-12-15-sektor-%C5%BE-feministke-vstanite.mp3';

download(file, './downloads').then(() => {
    console.log('Downloaded: ' + file);
});