const net = require("net");
const colors = require("colors");

// Creating the server
const server = net.createServer();

// Registering events
server.on("connection", (socket) => {
  console.info('New client connection has been made'.green);

  const remoteAddress = `${socket.remoteAddress}:${socket.remotePort}`;
  console.info('Client Remote Address %s'.green, remoteAddress);

  //Adding socket events
  socket.on('data', (data) => {
      console.info('Data from %s -> %s'.cyan, remoteAddress, data);
      socket.write(`You mean ${data}?`);
  });

  socket.once('close', () => {
      console.info('Connection from %s closed'.yellow, remoteAddress);
  });

  socket.on('error', (err) => {
      console.info(`Connection %s error %s`.red, remoteAddress, err.message);
  });
});

server.on('error', (err) => {
  console.info(`An error has occured: ${err}`);
});

const port = 9090;
// Listening for connections
server.listen(port, () => {
  console.info(`Server is listening on port ${port}`);
  // The %j means to serialize the object returned by service.address() to json
  console.info('Server is listening at  %j', server.address()); // Server is listening to {"address":"::","family":"IPv6","port":9000}
});

