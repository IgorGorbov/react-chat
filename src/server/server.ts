import { Socket } from 'socket.io';

const server = require('http').createServer();
const io = require('socket.io')(server);

const port = 3000;

const ClientManager = require('./ClientManager');
const ChatManager = require('./ChatManager');
const makeHandleEvent = require('./handlers');

const clientManager = ClientManager();
const chatManager = ChatManager();

io.on('connection', function(socket: Socket) {
  const {
    handleGetUsers,
    handleRegister,
    handleAddChat,
    handleDeleteChat,
    handleGetUserChats,
    handleDisconnect,
    handleMessage,
    handleDeleteMessages,
    handleChangeUserStatus,
  } = makeHandleEvent(socket, clientManager, chatManager);

  clientManager.addClient(socket);
  console.log('client connected...', socket.id);

  socket.on('getUsers', handleGetUsers);

  socket.on('register', handleRegister);

  socket.on('changeUserStatus', handleChangeUserStatus);

  socket.on('addChat', handleAddChat);

  socket.on('deleteChat', handleDeleteChat);

  socket.on('message', handleMessage);

  socket.on('deleteMessages', handleDeleteMessages);

  socket.on('getUserChats', handleGetUserChats);

  socket.on('disconnect', function() {
    console.log('client disconnect...', socket.id);
    handleDisconnect();
  });
});

server.listen(port, (err: any) => {
  if (err) {
    throw err;
  }
  console.log(`listening on port ${port}`);
});
