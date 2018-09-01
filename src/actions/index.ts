import {
  USER_LOGIN,
  FETCH_ALL_USERS,
  SEARCH_CHAT,
  CHANGE_USER_STATUS,
  CHANGE_CHAT,
  NEW_CHAT,
  DELETE_CHAT,
  NEW_MESSAGE,
  CHOOSE_USER,
  SELECT_MESSAGE,
  DELETE_MESSAGES,
  READ_MESSAGES,
} from '../constants/actionTypes';

export const userLogin = () => ({
  type: USER_LOGIN,
});

export const changeUserStatus = (status: string) => ({
  type: CHANGE_USER_STATUS,
  payload: status,
});

export const changeChat = (chat: { id: number; companion: IUser }) => ({
  type: CHANGE_CHAT,
  payload: {
    id: chat.id,
    companion: chat.companion,
  },
});

export const fetchAllUsers = (users: IUser[]) => ({
  type: FETCH_ALL_USERS,
  payload: users,
});

export const search = (text: string) => ({
  type: SEARCH_CHAT,
  payload: text,
});

export const newChat = (currentUser: IUser, companion: IUser) => ({
  type: NEW_CHAT,
  payload: { currentUser, companion },
});

export const deleteChat = (chatId: number) => ({
  type: DELETE_CHAT,
  payload: chatId,
});

export const newMessage = (
  currentUser: IUser,
  currentChatId: number,
  companion: IUser,
  text: string,
) => ({
  type: NEW_MESSAGE,
  payload: {
    currentUser,
    currentChatId,
    companion,
    text,
  },
});

export const chooseUser = (user: IUser) => ({
  type: CHOOSE_USER,
  payload: user,
});

export const selectMessage = (messageId: number) => ({
  type: SELECT_MESSAGE,
  payload: messageId,
});

export const deleteMessages = (
  selectedMessages: number[],
  currentUserID: number,
  currentChatId: number,
) => ({
  type: DELETE_MESSAGES,
  payload: { selectedMessages, currentUserID, currentChatId },
});

export const readMessages = (currentChatId: number, currentUserID: number) => ({
  type: READ_MESSAGES,
  payload: { currentUserID, currentChatId },
});
