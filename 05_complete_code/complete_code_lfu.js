const axios = require('axios');
const cheerio = require('cheerio');
const download = require('download');

axios.get("https://www.lezfemuniverza.org/")
    .then((response) => {

        var $ = cheerio.load(response.data);

        // get URLs of all images on the page and download them
        $('img').each(function(i, elem) {

            var link = $(this).attr('src');

            download(link, './LFU_images').then(() => {
                console.log('Downloaded: ' + link);
            });
        });
    })
    .catch((err) => {
        console.log(err);
    });