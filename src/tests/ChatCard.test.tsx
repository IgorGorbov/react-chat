import * as React from 'react';
import toJSON from 'enzyme-to-json';
import { mount } from 'enzyme';

import ChatCard from '../client/components/ChatCard';
import {
  UserCardContainer,
  ImageContainer,
  UserAvatar,
  UserStatus,
  UserInfoContainer,
  UserName,
  TextMessage,
  NewCountMessage,
} from '../client/styledComponents';

import { Status } from '../client/constants/user';

describe('testing ChatCard', () => {
  interface IChatCardProps {
    user: IUser;
    key: number;
    chat: IChat;
    isActive: string;
    onChangeChat: () => void;
  }
  const FakeOnChangeChat = jest.fn();
  const initState: IChatCardProps = {
    user: {
      id: 1,
      name: 'test',
      avatar: 'test',
      status: Status.Online,
    },
    key: 1,
    chat: {
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
    isActive: '',
    onChangeChat: FakeOnChangeChat,
  };

  Date.now = jest.fn();

  let wrapper: any;

  beforeAll(() => {
    wrapper = mount(<ChatCard {...initState} />);
  });

  it('should contain UserCardContainer', () => {
    const userCardContainer = wrapper.find(UserCardContainer);
    expect(userCardContainer).toHaveLength(1);

    userCardContainer.simulate('click');
    expect(FakeOnChangeChat).toHaveBeenCalled();
  });

  it('should contain ImageContainer', () => {
    expect(wrapper.find(ImageContainer)).toHaveLength(1);
  });

  it('should contain UserCardContainer', () => {
    expect(wrapper.find(UserCardContainer)).toHaveLength(1);
  });

  it('should contain UserAvatar', () => {
    expect(wrapper.find(UserAvatar)).toHaveLength(1);
  });

  it('should contain UserStatus', () => {
    expect(wrapper.find(UserStatus)).toHaveLength(1);
  });

  it('should contain UserInfoContainer', () => {
    expect(wrapper.find(UserInfoContainer)).toHaveLength(1);
  });

  it('should contain UserName', () => {
    const userName = wrapper.find(UserName);
    expect(userName).toHaveLength(1);
    expect(userName.text()).toEqual(initState.user.name);
  });

  it('should contain TextMessage', () => {
    expect(wrapper.find(TextMessage)).toHaveLength(1);
  });

  it('should contain NewCountMessage', () => {
    expect(wrapper.find(NewCountMessage)).toHaveLength(1);
  });

  it('snapshot ChatCard', () => {
    const tree = toJSON(wrapper);
    expect(tree).toMatchSnapshot();
  });
});
