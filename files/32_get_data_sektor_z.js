/**
 * Cheerio 
 * 
 * Fast, flexible & lean implementation of core jQuery 
 * designed specifically for the server.
 * https://github.com/cheeriojs/cheerio
 * https://www.npmjs.com/package/cheerio
 * 
 * Output
 * ======
 * Write out links to all mp3s on https://radiostudent.si/dru%C5%BEba/sektor-%C5%BE/podcast
 */

const axios = require('axios');
const cheerio = require('cheerio');

axios.get('https://radiostudent.si/dru%C5%BEba/sektor-%C5%BE/podcast')
    .then((response) => {

        // Load all html into cherio
        const $ = cheerio.load(response.data);

        var mp3s = [];

        $('enclosure').each(function(i, elem) {
            var link = $(this).attr('url');
            mp3s.push(link);
        });

        // Display all links
        mp3s.forEach(mp3 => {
            console.log(mp3);
        });

        console.log(mp3s.length);

    })
    .catch((err) => {
        console.log(err);
    });