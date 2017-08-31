const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');

const app = express();
const {generateMessage} = require('./utils/message');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connection');

  io.emit('newMessage', generateMessage('admin', 'Welcome to the chat app yeahhh wooohooo!'));

  socket.broadcast.emit('newMessage', generateMessage('admin', 'A new user has joined. Please make them feel welcome.'));

  socket.on('createMessage', (message, callback) => {
    console.log('createMessage', message);
    io.emit('newMessage', generateMessage(message.from, message.text));
    callback('This is from the server');
  });

  socket.on('disconnect', () => {
    console.log('Disconnected from server');
  });
});


server.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = { app };