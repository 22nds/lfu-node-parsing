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
 * Get H1 title of the dyke.tech page
 */

const axios = require('axios');
const cheerio = require('cheerio');

axios.get('https://www.dyke.tech')
    .then((response) => {
        // console.log(response.data) // all html of the page

        // Load all html into cherio
        const $ = cheerio.load(response.data);

        // Get the title text
        var title = $('h1').text();

        // Display the title
        console.log(title);
    })
    .catch((err) => {
        console.log(err);
    });