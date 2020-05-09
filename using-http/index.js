const http = require('https');

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
    console.log('Headers: ', res.headers);

    // Handling a case of a single redirect
    if (res.statusCode > 200 && res.statusCode < 400 ) {
        http.request(res.headers.location, res2 => {
             console.log('Status2: %s', res2.statusCode);
             console.log('Headers2: ', res2.headers);

             res2.on('data', userData => {
                 console.info(userData);
             });
        });
    }

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