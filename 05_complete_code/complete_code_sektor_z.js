const axios = require('axios');
const async = require('async');
const cheerio = require('cheerio');
const download = require('download');

axios.get("https://radiostudent.si/dru%C5%BEba/sektor-%C5%BE/podcast")
    .then((response) => {

        const $ = cheerio.load(response.data);

        var mp3s = [];

        $('enclosure').each(function(i, elem) {
            var link = $(this).attr('url');
            mp3s.push(link);
        });

        console.log(mp3s.length);

        // using async.everySeries because forEach loop would start
        // downloading all files at the same time
        async.everySeries(mp3s, (mp3, callback) => {

            console.log("Downloading: " + mp3);

            download(mp3, './mp3s').then(() => {

                console.log('DONE.');

                callback(null, true);
            });
        }, function(err, result) {
            // if (err) console.log(err);
            console.log('All files are downloaded.');
        });
    })
    .catch((err) => {
        console.log(err);
    });