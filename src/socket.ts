import * as types from './constants/actionTypes';

const io = require('socket.io-client');

export default function(dispatch: any) {
  const socket = io.connect('http://localhost:3000');

  socket.on('message', function(chatId: number, message: any) {
    dispatchAction({
      type: types.NEW_MESSAGE,
      payload: { chatId, message },
    });
  });

  function addMessage(text: any, chatId: any, companion: any) {
    socket.send(text, chatId, companion);
  }

  function dispatchAction(action: any) {
    dispatch(action);
  }

  function getUsers(type: any, cb: any) {
    socket.emit('getUsers', type, cb);
  }

  function register(name: any, cb: any) {
    socket.emit('register', name, cb);
  }

  function getUserChats(cb: any) {
    socket.emit('getUserChats', cb);
  }

  function addChat(companion: any, cb: any) {
    socket.emit('addChat', companion, cb);
  }

  return {
    dispatchAction,
    getUsers,
    register,
    addChat,
    getUserChats,
    addMessage,
  };
}
