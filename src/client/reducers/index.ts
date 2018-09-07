import { combineReducers } from 'redux';
import session from './session';
import chats from './chats';
import filters from './filters';
import currentChat from './currentChat';
import users from './users';

export default combineReducers({
  session,
  users,
  chats,
  currentChat,
  filters,
});
