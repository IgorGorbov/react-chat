import { createSelector } from 'reselect';

const getSearchText = (state: IState) =>
  state.filters.get('search').toLowerCase();

const getChats = (state: IState) => state.chats;

const getCurrentId = (state: IState) => state.session.get('id');

export const getCurrentUser = (state: IState) => state.session.toJS();

export const getChatCurrentId = (state: IState) => state.currentChat.get('id');

export const getCurrentChat = (state: IState) => state.currentChat.toJS();

export const getCompanion = (state: IState) =>
  state.currentChat.get('companion');

export const getSelectedMessages = (state: IState) =>
  state.filters.get('selectedMessages');

export const getSearchEntities: any = createSelector(
  getSearchText,
  getChats,
  getCurrentId,
  (searchText, chats: any, currentID) => {
    const searchByName = (chat: any) => {
      const user = chat.users.find((u: any) => u.id !== currentID);
      return user.name
        .trim()
        .toLowerCase()
        .includes(searchText);
    };
    return chats.filter(searchByName).toJS();
  },
);

export const getChatById: any = createSelector(
  getChats,
  getChatCurrentId,
  (chats, id) => {
    return chats.find((c: any) => c.id === id);
  },
);

const getUsers = (state: any) => state.users;

export const getAvailableUsers: any = createSelector(
  getChats,
  getUsers,
  getCurrentId,
  (chats: any, users, currentUserId) => {
    const filterUsers = Array.from(
      new Set(
        Object.values(chats.toJS()).reduce(
          (acc: any, chat: any) =>
            acc.concat(chat.users.map((user: any) => user.id)),
          [currentUserId],
        ),
      ),
    );

    return users.filter((user: any) => !filterUsers.includes(user.id));
  },
);
