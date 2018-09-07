import * as types from '../constants/actionTypes';

const initialState: IUser[] = [];

export default (state = initialState, { type, payload }: any) => {
  switch (type) {
    case types.FETCH_ALL_USERS: {
      return [...payload];
    }
    default:
      return state;
  }
};
