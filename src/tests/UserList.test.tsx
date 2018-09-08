// import * as React from 'react';
// import toJSON from 'enzyme-to-json';
// import { mount } from 'enzyme';
// import UserList from '../components/ChatsList';
// import { UserListWrapper } from '../styledComponents';
//
// describe('testing ChatsList', () => {
//   const chats: IUser[] = [
//     {
//       id: 1,
//       name: 'Louis Litt',
//       avatar: 'https://emilcarlsson.se/assets/louislitt.png',
//       status: Status.Offline,
//     },
//     {
//       id: 2,
//       name: 'Litt Louis',
//       avatar: 'https://emilcarlsson.se/assets/louislitt.png',
//       status: Status.Offline,
//     },
//   ];
//
//   const wrapper = mount(<UserList chats={chats} />);
//
//   it('should contain UserListWrapper', () => {
//     expect(wrapper.find(UserListWrapper)).toHaveLength(1);
//   });
//
//   it('snapshot ChatsList', () => {
//     const tree = toJSON(wrapper);
//     expect(tree).toMatchSnapshot();
//   });
// });
