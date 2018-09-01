import * as types from '../constants/actionTypes';
import { Map } from 'immutable';

const initialState: IFilters = {
  search: '',
  selectedMessages: [],
};

export default (state = Map(initialState), { type, payload }: any) => {
  switch (type) {
    case types.SEARCH_CHAT: {
      return state.set('search', payload);
    }
    case types.DELETE_MESSAGES: {
      return state.set('selectedMessages', []);
    }
    case types.SELECT_MESSAGE: {
      const selectedMessages: any = state.get('selectedMessages');
      const newState: any = selectedMessages.includes(payload)
        ? selectedMessages.filter((messageId: number) => messageId !== payload)
        : [...selectedMessages, payload];
      return state.set('selectedMessages', newState);
    }
    default:
      return state;
  }
};
