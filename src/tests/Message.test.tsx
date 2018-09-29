import * as React from 'react';
import toJSON from 'enzyme-to-json';
import { mount } from 'enzyme';

import Message from '../client/components/Message';
import {
  MessageContainer,
  UserAvatar,
  MessageInfoContainer,
  MessageArrow,
  TextMessage,
  MessageDate,
} from '../client/styledComponents';

import { Status } from '../client/constants/user';

describe('testing Message', () => {
  interface IMessageProps {
    key: number;
    message: IMessage;
    currentUser: IUser;
    selectedMessages: number[];
    selectMessage: (messageId: number) => { type: string; payload: number };
    className: string;
  }
  const mockSelectMessage = jest.fn();
  const initState: IMessageProps = {
    key: 1,
    message: {
      id: 1,
      from: {
        id: 1,
        name: 'test',
        avatar: 'test',
        status: Status.Online,
      },
      to: {
        id: 1,
        name: 'test',
        avatar: 'test',
        status: Status.Online,
      },
      text: 'Text message',
      date: '16.09.2018',
      isRead: false,
      deletedBy: [],
    },
    currentUser: {
      id: 1,
      name: 'test',
      avatar: 'test',
      status: Status.Online,
    },
    selectMessage: mockSelectMessage,
    selectedMessages: [],
    className: '',
  };

  let wrapper: any;

  beforeAll(() => {
    wrapper = mount(<Message {...initState} />);
  });

  it('should contain MessageContainer', () => {
    const messageContainer = wrapper.find(MessageContainer);
    expect(messageContainer).toHaveLength(1);

    messageContainer.simulate('click');
    expect(mockSelectMessage).toHaveBeenCalled();
  });

  it('should contain UserAvatar', () => {
    expect(wrapper.find(UserAvatar)).toHaveLength(1);
  });

  it('should contain MessageInfoContainer', () => {
    const messageInfoContainer = wrapper.find(MessageInfoContainer);
    expect(messageInfoContainer).toHaveLength(1);
  });

  it('should contain MessageArrow', () => {
    expect(wrapper.find(MessageArrow)).toHaveLength(1);
  });

  it('should contain TextMessage', () => {
    const textMessage = wrapper.find(TextMessage);
    expect(textMessage).toHaveLength(1);
    expect(textMessage.text()).toEqual(initState.message.text);
  });

  it('should contain MessageDate', () => {
    const messageDate = wrapper.find(MessageDate);
    expect(messageDate).toHaveLength(1);
    expect(messageDate.text()).toEqual(initState.message.date);
  });

  it('snapshot Message', () => {
    const tree = toJSON(wrapper);
    expect(tree).toMatchSnapshot();
  });
});
