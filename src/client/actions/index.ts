import {
  CLIENT_CONNECT,
  REGISTER_CLIENT,
  FETCH_ALL_USERS,
  FETCH_USER_CHATS,
  SEARCH_CHAT,
  CHANGE_USER_STATUS,
  CHANGE_CHAT,
  ADD_CHAT,
  NEW_CHAT,
  DELETE_CHAT,
  ADD_MESSAGE,
  NEW_MESSAGE,
  CHOOSE_USER,
  SELECT_MESSAGE,
  DELETE_MESSAGES,
  READ_MESSAGES,
  REFRESH_MESSAGES,
} from '../constants/actionTypes';

export const clientConnect = () => ({
  type: CLIENT_CONNECT,
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

export const fetchUserChats = (chats: IChat[]) => ({
  type: FETCH_USER_CHATS,
  payload: chats,
});

export const search = (text: string) => ({
  type: SEARCH_CHAT,
  payload: text,
});

export const addChat = (companion: IUser) => ({
  type: ADD_CHAT,
  payload: companion,
});

export const newChat = (currentUser: IUser, companion: IUser) => ({
  type: NEW_CHAT,
  payload: { currentUser, companion },
});

export const deleteChat = (chatId: number) => ({
  type: DELETE_CHAT,
  payload: chatId,
});

export const addMessage = (text: string) => ({
  type: ADD_MESSAGE,
  payload: text,
});

export const newMessage = (chatId: number, message: IMessage) => ({
  type: NEW_MESSAGE,
  payload: {
    chatId,
    message,
  },
});

export const registerClient = (name: string) => ({
  type: REGISTER_CLIENT,
  payload: name,
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

export const refreshMessages = (messages: number[], currentChatId: number) => ({
  type: REFRESH_MESSAGES,
  payload: { messages, currentChatId },
});

export const readMessages = (currentChatId: number, currentUserID: number) => ({
  type: READ_MESSAGES,
  payload: { currentUserID, currentChatId },
});
