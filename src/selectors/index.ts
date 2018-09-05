import { createSelector } from 'reselect';
import { Map } from 'immutable';

// interface IFilters {
//   search: string
// }

//   (state: IStore) => {
//   const currentID = state.session.get('id');
//   return state.chats.map((chat: any) =>
//     chat.users.find((user: any) => user.id !== currentID),
//   );
// };

interface IStore {
  session: Map<string, string | number>;
  chats: any;
  currentChat: Map<string, string>;
  filters: Map<string, string>;
}

const getSearchText = (state: IStore) =>
  state.filters.get('search').toLowerCase();

const getChats = (state: IStore) => state.chats;

const getCurrentId = (state: IStore) => state.session.get('id');

export const getChatCurrentId = (state: IStore) => state.currentChat.get('id');

export const getCompanion = (state: IStore) =>
  state.currentChat.get('companion');

export const getSearchEntities: any = createSelector(
  getSearchText,
  getChats,
  getCurrentId,
  (searchText, chats, currentID) => {
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
  (chats, users, currentUserId) => {
    const filterUsers: any = Array.from(
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
