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
  // const socket = io();
  console.log('New user connection');
  socket.on('disconnect', () => {
    // const socket = io();
    console.log('Disconnection');
  });
});


server.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = { app };