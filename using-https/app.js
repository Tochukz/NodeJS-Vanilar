const https = require('https');
const fs = require('fs');
const path = require('path');

const port = 3443;
const options = {
    key: fs.readFileSync(path.join(__dirname, './ssl/server.key')),
    cert: fs.readFileSync(path.join(__dirname, './ssl/server.crt'))
};

https.createServer(options, function(req, res) {
    res.writeHead(200);
    res.end("hello world\n");
}).listen(port, () => console.log(`Server running on port ${port}`));
   