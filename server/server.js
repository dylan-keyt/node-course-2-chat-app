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

    io.emit('newMessage', {
      from: 'admin',
      text: 'Welcome to the chat app yeahhh wooohooo!',
      createdAt: new Date().getTime()
    });

    socket.broadcast.emit('newMessage', {
      from: 'admin',
      text: 'A new user has joined. Please make them feel welcome.',
      createdAt: new Date().getTime()
    });

  socket.on('createMessage', (message) => {
    console.log('createMessage', message);
    io.emit('newMessage', {
      from: message.from,
      text: message.text,
      createdAt: new Date().getTime()
    });
  });

  socket.on('disconnect', () => {
    console.log('Disconnected from server');
  });
});


server.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = { app };