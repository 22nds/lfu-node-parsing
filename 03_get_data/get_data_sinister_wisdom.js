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
 * Write out links to all pdfs on http://www.sinisterwisdom.org/archive
 */

const axios = require('axios');
const cheerio = require('cheerio');

axios.get('http://www.sinisterwisdom.org/archive')
    .then((response) => {

        // Load all html into cherio
        const $ = cheerio.load(response.data);

        // Placeholder for all links
        var pdfs = [];

        $('.field-item p a').each(function(i, elem) {
            // Get the url of the link
            var link = $(this).attr('href');
            // Regual Expression for checking if tle link is a pdf file
            var re = /.*\.pdf$/i;
            // Check if link is a pdf
            if (link.match(re)) {
                // Add a link to the array of all links
                pdfs.push(link);
            }
        });

        // Display all links
        pdfs.forEach(pdf => {
            console.log(pdf);
        });

        // Display the count of all links
        console.log(pdfs.length);

    })
    .catch((err) => {
        console.log(err);
    });