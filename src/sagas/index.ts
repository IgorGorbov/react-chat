import { all, takeEvery, call, select } from 'redux-saga/effects';
import * as types from '../constants/actionTypes';
import { getCompanion, getChatCurrentId } from '../selectors';

const clientConnect = function*(socket: any, action: any): any {
  yield call(socket.getUsers, 'available', (err: any, users: any) => {
    if (err) {
      console.error('clientConnect saga => getUsers', err);
      return;
    }
    socket.dispatchAction({ type: types.FETCH_ALL_USERS, payload: users });
  });
};

const registerClient = function*(socket: any, action: any): any {
  yield call(socket.register, action.payload, (err: any, user: any) => {
    if (err) {
      console.error('registerClient saga => register', err);
      return;
    }
    socket.dispatchAction({ type: types.CHOOSE_USER, payload: user });
  });
  yield call(socket.getUserChats, (err: any, chats: any) => {
    if (err) {
      console.error('registerClient saga => getUserChats', err);
      return;
    }
    socket.dispatchAction({ type: types.FETCH_USER_CHATS, payload: chats });
  });
  yield call(socket.getUsers, 'all', (err: any, users: any) => {
    if (err) {
      console.error('registerClient saga => getUsers', err);
      return;
    }
    socket.dispatchAction({ type: types.FETCH_ALL_USERS, payload: users });
  });
};

const addChat = function*(socket: any, action: any): any {
  yield call(socket.addChat, action.payload, (err: any, chat: any) => {
    if (err) {
      console.error('addChat saga => addChat', err);
      return;
    }
    socket.dispatchAction({ type: types.NEW_CHAT, payload: chat });
  });
};

const addMessage = function*(socket: any, action: any): any {
  const text = action.payload;
  const companion = yield select(getCompanion);
  const chatId = yield select(getChatCurrentId);

  yield call(socket.addMessage, text, chatId, companion);
};

export default function* SocketSaga(socket: any): any {
  yield all([
    takeEvery(types.CLIENT_CONNECT, clientConnect, socket),
    takeEvery(types.REGISTER_CLIENT, registerClient, socket),
    takeEvery(types.ADD_CHAT, addChat, socket),
    takeEvery(types.ADD_MESSAGE, addMessage, socket),
  ]);
}
