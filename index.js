let twit = require('twit');

    let Twitter = new twit({
        consumer_key:         'WZzaqwfcSxndtXlWfUWwqiSPD',
        consumer_secret:      'wTswKUzxh1ajb5gV4PlFTSzj3B9gJf7yJcUQMtO6hqnyEwRmrq',
        access_token:         '281088977-UQiLEMx4sRBQ05w3qjuLS3BKATgHPGnnlgdnJ0KW',
        access_token_secret:  'fNOY3iyGudgp7tBlk1BMOAOqMv17C5dv5qjZzBg5Eq7oX'
    });

let text = process.argv;

function listaPraTexto(list)
{
    let texto = '';
    for (let i = 2; i < list.length; i++) 
    {
        texto += list[i] + " ";
    }
    return texto;
}
Twitter.post('statuses/update', {status : listaPraTexto(text) }, (err, data, response) => {
    if(err)
     {
            console.log(err);
     }
});