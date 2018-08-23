import { CHANGE_USER_STATUS } from '../constants/actionTypes';

// export const userLogin = user => ({
//   type: USER_LOGIN,
//   payload: user,
// });

export const changeUserStatus = (status: string) => ({
  type: CHANGE_USER_STATUS,
  payload: status
});
