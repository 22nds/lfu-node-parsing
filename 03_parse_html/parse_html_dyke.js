const axios = require('axios');
const cheerio = require('cheerio');

axios.get("https://www.dyke.tech")
    .then((response) => {
        // console.log(response.data) // all html of the page

        const $ = cheerio.load(response.data);

        // Title
        var title = $('h1').text();
        console.log(title);
    })
    .catch((err) => {
        console.log(err);
    })