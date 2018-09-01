import * as types from '../constants/actionTypes';
import { Map } from 'immutable';

const initialState: IChatMap[] | {} = {};

export default (state = Map(initialState), { type, payload }: any) => {
  switch (type) {
    case types.NEW_CHAT: {
      const time: any = new Date();
      const newChat: any = {
        [time.getMilliseconds()]: {
          id: time.getMilliseconds(),
          users: [payload.currentUser, payload.companion],
          messages: [],
        },
      };
      return state.merge(Map(newChat));
    }

    case types.DELETE_CHAT: {
      return state.filter((chat: any) => chat.id !== payload);
    }

    case types.DELETE_MESSAGES: {
      const { selectedMessages, currentUserID, currentChatId } = payload;
      const currentChat: any = state.get(currentChatId.toString());
      const messages: any = currentChat.messages;
      const afterDelete = messages.map((message: any) => {
        if (selectedMessages.includes(message.id)) {
          return {
            ...message,
            deletedBy: [...message.deletedBy, currentUserID],
          };
        }
        return message;
      });
      return state.update(currentChatId.toString(), (chat: any) => ({
        ...chat,
        messages: afterDelete,
      }));
    }

    // tslint:disable: max-line-length
    case types.NEW_MESSAGE: {
      const { currentUser, currentChatId, companion, text } = payload;
      const time: any = new Date();
      const hours =
        time.getHours() > 9 ? time.getHours() : `0${time.getHours()}`;
      const minutes =
        time.getMinutes() > 9 ? time.getMinutes() : `0${time.getMinutes()}`;
      const day = time.getDate();
      const month = time.getMonth() + 1;
      const year = time
        .getFullYear()
        .toString()
        .slice(-2);
      const newMessage = {
        id: time.getMilliseconds(),
        text,
        from: currentUser,
        to: companion,
        date: `${day}/${month}/${year} - ${hours}:${minutes}`,
        deletedBy: [],
        isRead: false,
      };
      return state.update(currentChatId.toString(), (chat: any) => ({
        ...chat,
        messages: chat.messages.concat(newMessage),
      }));
    }

    case types.READ_MESSAGES: {
      const { currentUserID, currentChatId } = payload;
      const currentChat: any = state.get(currentChatId.toString());
      const messages = currentChat.messages.reduce((acc: any, message: any) => {
        if (message.to.id === currentUserID) {
          message.isRead = true;
          return [...acc, message];
        }
        return [...acc, message];
      }, []);

      return state.set(currentChatId.toString(), { ...currentChat, messages });
    }
    default:
      return state;
  }
};
