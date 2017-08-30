const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');

const app = express();
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connection');

  socket.emit('newMessage', {
    from: 'dylan@example.com',
    text: 'New hello yo',
    createdAt: 234346535
  });

  socket.on('createMessage', (message) => {
    console.log('createMessage', message);
  });

  socket.on('disconnect', () => {
    console.log('Disconnected from server');
  });
});


server.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = { app };