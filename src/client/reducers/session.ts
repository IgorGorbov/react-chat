import * as types from '../constants/actionTypes';
import { Map } from 'immutable';

const initialState: IUser | {} = {};

export default (state = Map(initialState), { type, payload }: any) => {
  switch (type) {
    case types.CHOOSE_USER: {
      return state.merge(payload);
    }
    case types.CHANGE_USER_STATUS: {
      return state.set('status', payload);
    }
    default:
      return state;
  }
};
