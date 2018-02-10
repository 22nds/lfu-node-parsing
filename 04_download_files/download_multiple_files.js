const download = require('download');

// DOWNLOAD MULTIPLE FILES
var files = [
    'https://www.lezfemuniverza.org/wp-content/uploads/2018/02/lesbians-1974-SF-Gay-Parade-Rink-Foto-1-e1517516581958.jpg',
    'https://www.lezfemuniverza.org/wp-content/uploads/2017/12/grafit-zid-Rog-dec-2017.jpg',
    'https://www.lezfemuniverza.org/wp-content/uploads/2017/11/Lesbian-couple-at-Le-Monocle-Paris-1932.jpg',
    'https://www.lezfemuniverza.org/wp-content/uploads/2017/08/dyke-hard-2-e1502827128353.jpg'
]
files.forEach((file) => {
    download(file, './images').then(() => {
        console.log('Downloaded: ' + file);
    });
})