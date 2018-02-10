// to get html from the web page
const axios = require('axios');

// parse html
const cheerio = require('cheerio');

axios.get('http://www.24ur.com/arhiv/novice/1.html?&page_archive=1&p_all_items=86020')
  .then(function (response) {

    const $ = cheerio.load(response.data);

    const items = [];
    $('#newsarchive_page ul li').each( function(i, elem) {
            //items[i] = $(this).text()
            var date = $(this).find('h4').text();
            var title = $(this).find('a').text();
            title = title.replace(/(\r\n|\n|\r)/gm,""); // remove newlines
            title = title.trim(); // remove spaces at the end
            var link = $(this).find('a').attr('href');
            link = 'https://www.24ur.com' + link

            items[i] = {date, title, link}
            console.log(items[i])
            }
    );
    console.log(items.join(', '));
  })
  .catch(function (error) {
    console.log(error);
  });
