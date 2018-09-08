import { SagaIterator } from 'redux-saga';
import { all, takeEvery, call, select } from 'redux-saga/effects';
import * as types from '../constants/actionTypes';
import {
  getCompanion,
  getChatCurrentId,
  getCurrentUser,
} from '../selectors/index';

const clientConnect = function*(socket: ISocket): SagaIterator {
  yield call(socket.getUsers, 'available', (err: any, users: IUser[]) => {
    if (err) {
      console.error('clientConnect saga => getUsers', err);
      return;
    }
    socket.dispatchAction({ type: types.FETCH_ALL_USERS, payload: users });
  });
};

const registerClient = function*(
  socket: ISocket,
  action: { payload: string },
): SagaIterator {
  yield call(socket.register, action.payload, (err: any, user: IUser) => {
    if (err) {
      console.error('registerClient saga => register', err);
      return;
    }
    socket.dispatchAction({ type: types.CHOOSE_USER, payload: user });
  });

  yield call(socket.getUserChats, (err: any, chats: IChat[]) => {
    if (err) {
      console.error('registerClient saga => getUserChats', err);
      return;
    }
    socket.dispatchAction({ type: types.FETCH_USER_CHATS, payload: chats });
  });

  yield call(socket.getUsers, 'all', (err: any, users: IUser[]) => {
    if (err) {
      console.error('registerClient saga => getUsers', err);
      return;
    }
    socket.dispatchAction({ type: types.FETCH_ALL_USERS, payload: users });
  });
};

const addChat = function*(
  socket: ISocket,
  action: { payload: IUser },
): SagaIterator {
  yield call(socket.addChat, action.payload, (err: any, chat: IChat) => {
    if (err) {
      console.error('addChat saga => addChat', err);
      return;
    }
    socket.dispatchAction({ type: types.NEW_CHAT, payload: chat });
  });
};

const deleteChat = function*(
  socket: ISocket,
  action: { payload: number },
): SagaIterator {
  yield call(socket.deleteChat, action.payload);
};

const addMessage = function*(
  socket: ISocket,
  action: { payload: string },
): SagaIterator {
  const text = action.payload;
  const companion = yield select(getCompanion);
  const chatId = yield select(getChatCurrentId);

  yield call(socket.addMessage, text, chatId, companion);
};

const deleteMessages = function*(
  socket: ISocket,
  action: { payload: number[] },
): SagaIterator {
  const currentChatId = yield select(getChatCurrentId);

  yield call(
    socket.deleteMessages,
    action.payload,
    (err: any, messages: IMessage[]) => {
      if (err) {
        console.error('deleteMessages saga => deleteMessages', err);
        return;
      }
      socket.dispatchAction({
        type: types.REFRESH_MESSAGES,
        payload: { currentChatId, messages },
      });
    },
  );
};

const changeUserStatus = function*(socket: ISocket): SagaIterator {
  const currentUser = yield select(getCurrentUser);
  yield call(socket.changeUserStatus, currentUser);
};

export default function* SocketSaga(socket: ISocket): SagaIterator {
  yield all([
    takeEvery(types.CLIENT_CONNECT, clientConnect, socket),
    takeEvery(types.REGISTER_CLIENT, registerClient, socket),
    takeEvery(types.CHANGE_USER_STATUS, changeUserStatus, socket),
    takeEvery(types.ADD_CHAT, addChat, socket),
    takeEvery(types.DELETE_CHAT, deleteChat, socket),
    takeEvery(types.ADD_MESSAGE, addMessage, socket),
    takeEvery(types.DELETE_MESSAGES, deleteMessages, socket),
  ]);
}
