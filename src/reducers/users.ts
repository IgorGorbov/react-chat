import * as types from '../constants/actionTypes';
import { List } from 'immutable';

const initialState: IUser[] = [];

export default (state = List(initialState), { type, payload }: any) => {
  switch (type) {
    case types.FETCH_ALL_USERS: {
      return state.merge(payload);
    }
    default:
      return state;
  }
};
