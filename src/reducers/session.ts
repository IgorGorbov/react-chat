import * as types from '../constants/actionTypes';
import { Map } from 'immutable';
import { defaultAvatar, Status } from '../constants/user';

const initialState: IUser = {
  id: 1,
  name: `Mike Ross`,
  avatar: defaultAvatar,
  status: Status.Offline
};

export default (state = Map(initialState), { type, payload }: any) => {
  switch (type) {
    case types.USER_LOGIN: {
      return state.set('status',  Status.Online);
    }
    case types.CHANGE_USER_STATUS: {
      return state.set('status', payload);
    }
    default:
      return state;
  }
};

