const axios = require('axios');
const cheerio = require('cheerio');

axios.get("https://www.lezfemuniverza.org/")
    .then((response) => {
        //console.log(response.data) // all html of the site

        var $ = cheerio.load(response.data);

        var links = [];

        $('a').each(function(i, elem) {
            var link = $(this).attr('href');
            links.push(link);
        });

        // display all links - each in separate line
        links.forEach(link => {
            console.log(link);
        })

        // display the number of links on the page
        console.log(links.length);

    })
    .catch((err) => {
        console.log(err);
    })