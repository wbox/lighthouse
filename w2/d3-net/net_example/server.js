const net = require('net');
const client = require('net');

const server = net.createServer();

server.listen(3000, () => {
  console.log('Server listening on port 3000!');
});

server.on('connection', (client) => {
  console.log('New client connected!');
  client.write('Hello there!');
});

server.on('data', (data) => {
  console.log('Message from client: ', data)
});
