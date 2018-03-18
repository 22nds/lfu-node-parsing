/**
 * Axios 
 * 
 * A promise based HTTP client for the browser and node.js
 * 
 * https://www.npmjs.com/package/axios
 * 
 * Output
 * ======
 * Display the response with data, url and response status. 
 */

const axios = require('axios');

axios.get('https://www.dyke.tech')
    .then((response) => {
        //console.log(response); // The whole response object with data
        //console.log(response.data); // Display all html of the site
        console.log(response.config.url); // Address of the page
        console.log(response.status); // Server status 200 is OK
    })
    .catch((err) => {
        console.log(err);
    });