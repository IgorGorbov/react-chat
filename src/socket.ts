import * as types from './constants/actionTypes';

const io = require('socket.io-client');

export default function(dispatch: any): ISocket {
  const socket = io.connect('http://localhost:3000');

  socket.on('message', function(chatId: number, message: IMessage) {
    dispatchAction({
      type: types.NEW_MESSAGE,
      payload: { chatId, message },
    });
  });
  socket.on('newChat', function(chat: IChat) {
    dispatchAction({
      type: types.NEW_CHAT,
      payload: chat,
    });
  });
  socket.on('getAvailableUsers', function(users: IUser[]) {
    dispatchAction({
      type: types.FETCH_ALL_USERS,
      payload: users,
    });
  });
  socket.on('deleteChat', function(chatId: number) {
    dispatchAction({
      type: types.DELETE_CHAT,
      payload: chatId,
    });
  });
  socket.on('updateUser', function(user: IUser, chatsIds: number[]) {
    dispatchAction({
      type: types.UPDATE_USER,
      payload: {
        user,
        chatsIds,
      },
    });
  });

  function changeUserStatus(user: IUser) {
    socket.emit('changeUserStatus', user);
  }

  function addMessage(text: string, chatId: number, companion: IUser) {
    socket.send(text, chatId, companion);
  }

  function dispatchAction(action: object) {
    dispatch(action);
  }

  function getUsers(type: string, cb: any) {
    socket.emit('getUsers', type, cb);
  }

  function register(name: string, cb: any) {
    socket.emit('register', name, cb);
  }

  function getUserChats(cb: any) {
    socket.emit('getUserChats', cb);
  }

  function addChat(companion: IUser, cb: any) {
    socket.emit('addChat', companion, cb);
  }

  function deleteChat(idChat: number) {
    socket.emit('deleteChat', idChat);
  }

  function deleteMessages(payload: object, cb: any) {
    socket.emit('deleteMessages', payload, cb);
  }

  return {
    dispatchAction,
    changeUserStatus,
    getUsers,
    register,
    addChat,
    deleteChat,
    getUserChats,
    addMessage,
    deleteMessages,
  };
}
