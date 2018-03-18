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
 * Get all links on the lezfemuniverza.org page
 */

const axios = require('axios');
const cheerio = require('cheerio');

axios.get('https://www.lezfemuniverza.org/')
    .then((response) => {

        // Load all html from the page into cherio
        var $ = cheerio.load(response.data);

        // Setup array which will hold all links
        var links = [];

        // Add the URL in href attribute of the a tag to the links
        $('a').each(function(i, elem) {
            var link = $(this).attr('href');
            links.push(link);
        });

        // Display all links - each in separate line
        links.forEach(link => {
            console.log(link);
        });

        // Display the number of links on the page
        console.log(links.length);

    })
    .catch((err) => {
        console.log(err);
    });