import * as React from 'react';
import toJSON from 'enzyme-to-json';
import { mount } from 'enzyme';

import SectionMessagesList from '../client/components/SectionMessagesList';
import Message from '../client/components/Message';

import { MessagesList } from '../client/styledComponents';

import { Status } from '../client/constants/user';

describe('testing SectionMessagesList', () => {
  const selectMessageHandle = jest.fn();
  const readMessagesHandle = jest.fn();

  interface IMessagesListProps {
    messages: IMessage[];
    currentUser: IUser;
    currentChatId: number;
    selectedMessages: number[];
    selectMessage: (messageId: number) => { type: string; payload: number };
    readMessages: (
      currentChatId: number,
      currentUserID: number,
    ) => {
      type: string;
      payload: { currentChatId: number; currentUserID: number };
    };
  }

  let currentUser = {
    id: 1,
    name: 'currentName',
    avatar: 'currentAvatar',
    status: Status.Online,
  };

  let companion = {
    id: 2,
    name: 'companionName',
    avatar: 'companionAvatar',
    status: Status.Online,
  };

  let props: IMessagesListProps = {
    messages: [
      {
        id: 1,
        from: currentUser,
        to: companion,
        text: 'text test 1',
        date: '15:00',
        isRead: false,
        deletedBy: [],
      },
      {
        id: 2,
        from: currentUser,
        to: companion,
        text: 'text test 2',
        date: '16:00',
        isRead: false,
        deletedBy: [],
      },
    ],
    currentUser,
    currentChatId: 1,
    selectedMessages: [],
    selectMessage: selectMessageHandle,
    readMessages: readMessagesHandle,
  };

  let wrapper: any;
  beforeAll(() => {
    wrapper = mount(<SectionMessagesList {...props} />);
  });

  it('should contain MessagesList', () => {
    expect(wrapper.find(MessagesList)).toHaveLength(1);
  });

  it('should contain Messages', () => {
    const messages = wrapper.find(Message);
    expect(messages).toHaveLength(props.messages.length);
  });

  it('click Message', () => {
    const messages = wrapper.find(Message);
    messages.first().simulate('click');
    expect(selectMessageHandle).toHaveBeenCalledTimes(1);
  });

  it('snapshot SectionMessagesList', () => {
    const tree = toJSON(wrapper);
    expect(tree).toMatchSnapshot();
  });
});
