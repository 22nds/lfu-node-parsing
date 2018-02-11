const axios = require('axios');
const async = require('async');
const cheerio = require('cheerio');
const download = require('download');

axios.get("http://www.sinisterwisdom.org/archive")
    .then((response) => {

        const $ = cheerio.load(response.data);

        var pdfs = [];

        $('.field-items a').each(function(i, elem) {
            var link = $(this).attr('href');

            //console.log(link.substr(-3))

            if (link.substr(-3) === "pdf") {
                pdfs.push(link);
            }
        });

        console.log(pdfs.length);

        // using async.everySeries because forEach loop would start
        // downloading all files at the same time
        async.everySeries(pdfs, (pdf, callback) => {

            console.log("Downloading: " + pdf);

            download(pdf, './pdfs').then(() => {

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