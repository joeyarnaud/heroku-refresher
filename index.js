const request = require('request');

setInterval(() => {
  request('https://joseph-arnaud.herokuapp.com/', (error, response, body) => {
    console.log('Error: ', error);
    console.log('Response: ', response);
    console.log('Body: ', body);
  });

  request(
    'https://pure-taiga-01859.herokuapp.com/',
    (error, response, body) => {
      console.log('Error: ', error);
      console.log('Response: ', response);
      console.log('Body: ', body);
    }
  );

  request(
    'https://quiet-river-61063.herokuapp.com/',
    (error, response, body) => {
      console.log('Error: ', error);
      console.log('Response: ', response);
      console.log('Body: ', body);
    }
  );
}, 1000 * 60 * 30);
