const axios = require('axios');

axios.get("https://radiostudent.si/dru%C5%BEba/sektor-%C5%BE/podcast")
    .then((response) => {
        console.log(response)
        console.log(response.config.url) // Address of the page
        console.log(response.status) // server status 200 is OK
        console.log(response.data) // all html of the site
    })
    .catch((err) => {
        console.log(err);
    })