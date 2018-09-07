import * as types from '../constants/actionTypes';
import { Map } from 'immutable';

const initialState: IChatMap[] | {} = {};

export default (state = Map(initialState), { type, payload }: any) => {
  switch (type) {
    case types.NEW_CHAT: {
      return state.set(payload.id.toString(), payload);
    }

    case types.DELETE_CHAT: {
      return state.filter((chat: any) => chat.id !== payload);
    }

    case types.REFRESH_MESSAGES: {
      const { currentChatId, messages } = payload;
      return state.update(currentChatId.toString(), (chat: any) => ({
        ...chat,
        messages,
      }));
    }

    // tslint:disable: max-line-length
    case types.NEW_MESSAGE: {
      return state.update(payload.chatId.toString(), (chat: any) => ({
        ...chat,
        messages: chat.messages.concat(payload.message),
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

      return state.set(currentChatId.toString(), {
        ...currentChat,
        messages,
      });
    }

    case types.FETCH_USER_CHATS: {
      return Map(payload);
    }

    case types.UPDATE_USER: {
      const stateIds = Object.keys(state.toJS());
      const chatsIds = payload.chatsIds;
      const chatID: any = stateIds.find((id: any) => chatsIds.includes(id));

      return state.update(chatID.toString(), (chat: any) => {
        const companion = chat.users.filter(
          (u: any) => u.id !== payload.user.id,
        );
        return { ...chat, users: [payload.user, companion] };
      });
    }

    default:
      return state;
  }
};
