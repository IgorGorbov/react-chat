// import * as React from 'react';
// import toJSON from 'enzyme-to-json';
// import { mount } from 'enzyme';
// import UserCard from '../components/ChatCard';
// import UserStatus from '../components/UserStatus';
// import {
//   UserCardContainer,
//   ImageContainer,
//   UserAvatar,
//   UserInfoContainer,
//   UserName,
//   TextMessage,
//   NewCountMessage,
// } from '../styledComponents';
//
// describe('testing ChatsList', () => {
//   const user: IUser = {
//     id: 1,
//     name: 'Louis Litt',
//     avatar: 'https://emilcarlsson.se/assets/louislitt.png',
//     status: Status.Offline,
//   };
//   const wrapper = mount(<UserCard key={user.id} user={user} />);
//
//   it('should contain UserCardContainer', () => {
//     expect(wrapper.find(UserCardContainer)).toHaveLength(1);
//   });
//
//   it('should contain ImageContainer', () => {
//     expect(wrapper.find(ImageContainer)).toHaveLength(1);
//   });
//
//   it('should contain UserAvatar', () => {
//     expect(wrapper.find(UserAvatar)).toHaveLength(1);
//   });
//
//   it('should to hide UserStatus', () => {
//     expect(wrapper.find(UserStatus)).toHaveLength(0);
//   });
//
//   it('should contain UserInfoContainer', () => {
//     expect(wrapper.find(UserInfoContainer)).toHaveLength(1);
//   });
//
//   it('should contain UserName', () => {
//     expect(wrapper.find(UserName)).toHaveLength(1);
//   });
//
//   it('should contain TextMessage', () => {
//     expect(wrapper.find(TextMessage)).toHaveLength(1);
//   });
//
//   it('should contain NewCountMessage', () => {
//     expect(wrapper.find(NewCountMessage)).toHaveLength(1);
//   });
//
//   it('snapshot ChatsList', () => {
//     const tree = toJSON(wrapper);
//     expect(tree).toMatchSnapshot();
//   });
// });
