const axios = require('axios');
const cheerio = require('cheerio');

axios.get("https://radiostudent.si/dru%C5%BEba/sektor-%C5%BE/podcast")
    .then((response) => {

        // console.log(response.data); // all html of the site

        const $ = cheerio.load(response.data);

        var mp3s = [];

        $('enclosure').each(function(i, elem) {
            var link = $(this).attr('url');
            mp3s.push(link);
        });

        // display all links - each in separate line
        mp3s.forEach(mp3 => {
            console.log(mp3);
        });

        console.log(mp3s.length);

    })
    .catch((err) => {
        console.log(err);
    })