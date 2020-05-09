const http = require('http');

const options = {
    hostname: 'api.randomuser.me',
    path: '/',
    port: '80',
    method: 'GET',
    headers: {
        'Accept': 'application/json', 
        'Location': 'headers',
    }
};

const req = http.request(options, res => {
    console.log('Status : %s', res.statusCode);
    console.log('Headers: cls', res.headers);

    res.setEncoding('utf8');
    res.on('data', userData => {
        console.log(userData);
        process.stdout.write(userData);
    });
});
// Handling potential error
req.on('error', err => {
    console.error(err);
});
// Making the request.
req.end();