const server = require('http').createServer();
const io = require('socket.io')(server);

const port = 3000;

const ClientManager = require('./ClientManager');
const ChatManager = require('./ChatManager');
const makeHandleEvent = require('./handlers');

const clientManager = ClientManager();
const chatManager = ChatManager();

io.on('connection', function(socket: any) {
  const {
    handleGetUsers,
    handleRegister,
    handleAddChat,
    handleGetUserChats,
    handleDisconnect,
    handleMessage,
  } = makeHandleEvent(socket, clientManager, chatManager);

  clientManager.addClient(socket);
  console.log('client connected...', socket.id);

  socket.on('getUsers', handleGetUsers);

  socket.on('getUserChats', handleGetUserChats);

  socket.on('register', handleRegister);

  socket.on('addChat', handleAddChat);

  socket.on('message', handleMessage);

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

// const ClientManager = require('./ClientManager');
// const ChatroomManager = require('./ChatroomManager');
// const makeHandlers = require('./handlers');
//
// const clientManager = ClientManager();
// const chatroomManager = ChatroomManager();
//
// io.on('connection', function (client) {
//   const {
//     handleRegister,
//     handleJoin,
//     handleLeave,
//     handleMessage,
//     handleGetChatrooms,
//     handleGetAvailableUsers,
//     handleDisconnect
//   } = makeHandlers(client, clientManager, chatroomManager);
//
//   console.log('client connected...', client.id);
//
//   clientManager.addClient(client);
//
//   client.on('register', handleRegister);
//
//   client.on('join', handleJoin);
//
//   client.on('leave', handleLeave);
//
//   client.on('message', handleMessage);
//
//   client.on('chatrooms', handleGetChatrooms);
//
//   client.on('availableUsers', handleGetAvailableUsers)
//
//   client.on('disconnect', function () {
//     console.log('client disconnect...', client.id);
//     handleDisconnect()
//   });
//
//   client.on('error', function (err) {
//     console.log('received error from client:', client.id);
//     console.log(err)
//   })
// });
//
// server.listen(port, err => {
//   if (err) throw err;
//
//   console.log(`listening on port ${port}`);
// });
