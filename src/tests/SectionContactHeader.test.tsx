import * as React from 'react';
import toJSON from 'enzyme-to-json';
import { mount } from 'enzyme';

import SectionContactHeader from '../client/components/SectionContactHeader';
import ModalDeleteChat from '../client/components/ModalDeleteChat';
import {
  SectionContactHeader as ContactHeader,
  UserButton,
  UserAvatar,
  ContactInfoContainer,
  Text,
} from '../client/styledComponents/index';

import { Status } from '../client/constants/user';

describe('testing SectionContactHeader', () => {
  interface InterfaceContactHeaderProps {
    currentUser: IUser;
    user: IUser;
    currentChatId: number;
    selectedMessages: number[];
    deleteChat: (chatId: number) => { type: string; payload: number };
    deleteMessages: (
      selectedMessages: number[],
      currentUserID: number,
      currentChatId: number,
    ) => {
      type: string;
      payload: {
        selectedMessages: number[];
        currentUserID: number;
        currentChatId: number;
      };
    };
  }
  const deleteMessagesHandle = jest.fn();
  const deleteChatHandle = jest.fn();

  const props: InterfaceContactHeaderProps = {
    currentUser: {
      id: 1,
      name: 'test',
      avatar: 'test',
      status: Status.Online,
    },
    user: {
      id: 2,
      name: 'test2',
      avatar: 'test2',
      status: Status.Online,
    },
    currentChatId: 1,
    selectedMessages: [],
    deleteChat: deleteChatHandle,
    deleteMessages: deleteMessagesHandle,
  };

  let wrapper: any;
  beforeAll(() => {
    wrapper = mount(<SectionContactHeader {...props} />);
  });

  it('should contain ContactHeader', () => {
    expect(wrapper.find(ContactHeader)).toHaveLength(1);
  });

  it('should contain UserAvatar', () => {
    expect(wrapper.find(UserAvatar)).toHaveLength(1);
  });

  it('should contain ContactInfoContainer', () => {
    expect(wrapper.find(ContactInfoContainer)).toHaveLength(1);
  });

  it('should contain Button(ModalDeleteChat)', () => {
    expect(wrapper.find(ModalDeleteChat)).toHaveLength(1);
  });

  it('should contain user name and status', () => {
    const container = wrapper.find(ContactInfoContainer);
    expect(container.find(Text)).toHaveLength(2);
    expect(
      container
        .find(Text)
        .first()
        .text(),
    ).toEqual(props.user.name);
    expect(
      container
        .find(Text)
        .last()
        .text(),
    ).toEqual(props.user.status);
  });

  it('should contain UserButton(delete messages)', () => {
    const propsSelectedMessages = {
      currentUser: {
        id: 1,
        name: 'test',
        avatar: 'test',
        status: Status.Online,
      },
      user: {
        id: 2,
        name: 'test2',
        avatar: 'test2',
        status: Status.Online,
      },
      currentChatId: 1,
      selectedMessages: [1, 2],
      deleteChat: jest.fn(),
      deleteMessages: deleteMessagesHandle,
    };
    const wrapper = mount(<SectionContactHeader {...propsSelectedMessages} />);
    const ub = wrapper.find(UserButton);
    expect(ub).toHaveLength(1);

    ub.simulate('click');
    expect(deleteMessagesHandle).toHaveBeenCalledTimes(1);
  });

  it('snapshot CurrentChatContainer', () => {
    const wrapper = mount(<SectionContactHeader {...props} />);
    const tree = toJSON(wrapper);
    expect(tree).toMatchSnapshot();
  });
});
