/**
 * Axios is a promise based HTTP client for the browser and node.js
 * 
 * https://www.npmjs.com/package/axios
 * 
 * Output
 * ======
 * Display the html of the LFU page. 
 */

const axios = require('axios');

axios.get('http://www.sinisterwisdom.org/archive')
    .then((response) => {
        // Display all html of the site
        console.log(response.data);
    })
    .catch((err) => {
        console.log(err);
    });