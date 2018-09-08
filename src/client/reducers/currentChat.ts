import * as types from '../constants/actionTypes';
import { Map } from 'immutable';

const initialState: ICurrentChat | {} = {};

export default (state = Map(initialState), { type, payload }: any) => {
  switch (type) {
    case types.CHANGE_CHAT: {
      return state.set('id', payload.id).set('companion', payload.companion);
    }
    case types.DELETE_CHAT: {
      return Map({});
    }
    default:
      return state;
  }
};
