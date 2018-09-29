import * as React from 'react';
import toJSON from 'enzyme-to-json';
import { mount } from 'enzyme';

import ChatsList from '../client/components/ChatsList';
import ChatCard from '../client/components/ChatCard';
import { Status } from '../client/constants/user';
import { UserListWrapper } from '../client/styledComponents';

describe('testing ChatsList', () => {
  interface IUserListProps {
    chats: IChat[];
    currentChatId: number;
    currentUserId: number;
    changeChat: (
      chat: object,
    ) => {
      type: string;
      payload: {
        id: number;
        companion: IUser;
      };
    };
    readMessages: (
      currentChatId: number,
      currentUserID: number,
    ) => {
      type: string;
      payload: { currentChatId: number; currentUserID: number };
    };
  }
  const FakeChangeChat = jest.fn();
  const FakeReadMessages = jest.fn();

  const initState: IUserListProps = {
    chats: [
      {
        id: 1,
        users: [
          {
            id: 1,
            name: 'test',
            avatar: 'test',
            status: Status.Online,
          },
          {
            id: 2,
            name: 'test2',
            avatar: 'test2',
            status: Status.Online,
          },
        ],
        messages: [],
      },
    ],
    currentChatId: 1,
    currentUserId: 1,
    changeChat: FakeChangeChat,
    readMessages: FakeReadMessages,
  };

  let wrapper: any;

  beforeAll(() => {
    wrapper = mount(<ChatsList {...initState} />);
  });

  it('should contain UserListWrapper', () => {
    expect(wrapper.find(UserListWrapper)).toHaveLength(1);
  });

  it('should contain ChatCard', () => {
    const countChat = initState.chats.length;
    const chatCard = wrapper.find(ChatCard);

    expect(chatCard).toHaveLength(countChat);

    chatCard.simulate('click');
    expect(FakeChangeChat).toHaveBeenCalled();
    expect(FakeReadMessages).toHaveBeenCalled();
  });

  it('snapshot ChatsList', () => {
    const tree = toJSON(wrapper);
    expect(tree).toMatchSnapshot();
  });
});
