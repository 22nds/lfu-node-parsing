const axios = require('axios');

axios.get("https://www.lezfemuniverza.org/")
    .then((response) => {
        console.log(response)
        console.log(response.config.url) // Address of the page
        console.log(response.status) // server status 200 is OK
        console.log(response.data) // all html of the site
    })
    .catch((err) => {
        console.log(err);
    })