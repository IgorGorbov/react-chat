import * as React from 'react';
import toJSON from 'enzyme-to-json';
import { mount } from 'enzyme';
import { Picker } from 'emoji-mart';

import SectionTypingMessage from '../client/components/SectionTypingMessage';
import { Status } from '../client/constants/user';
import {
  SectionNewMessage,
  UserInput,
  UserButton,
} from '../client/styledComponents';

describe('testing SectionTypingMessage', () => {
  interface ISectionTypingProps {
    currentUser: IUser;
    companion: IUser;
    currentChatId: number;
    addMessage: (
      text: string,
    ) => {
      type: string;
      payload: string;
    };
  }
  const FakeAddMessage = jest.fn();

  const initState: ISectionTypingProps = {
    currentUser: {
      id: 1,
      name: 'test',
      avatar: 'test',
      status: Status.Online,
    },
    companion: {
      id: 2,
      name: 'test2',
      avatar: 'test2',
      status: Status.Online,
    },

    currentChatId: 1,
    addMessage: FakeAddMessage,
  };

  let wrapper: any;

  beforeAll(() => {
    wrapper = mount(<SectionTypingMessage {...initState} />);
    wrapper.setState({ inputText: 'test', isOpenPicker: true });
  });

  it('should contain SectionNewMessage', () => {
    expect(wrapper.find(SectionNewMessage)).toHaveLength(1);
  });
  it('should contain UserInput', () => {
    expect(wrapper.find(UserInput)).toHaveLength(1);
  });
  it('should contain UserButton', () => {
    const buttonAddNewMessage = wrapper.find(UserButton);
    expect(buttonAddNewMessage).toHaveLength(1);

    buttonAddNewMessage.simulate('click');
    expect(FakeAddMessage).toHaveBeenCalled();
  });

  it('should contain Picker', () => {
    expect(wrapper.find(Picker)).toHaveLength(1);
  });

  it('snapshot SectionTypingMessage', () => {
    const tree = toJSON(wrapper);
    expect(tree).toMatchSnapshot();
  });

  it('should not contain Picker', () => {
    wrapper.setState({ isOpenPicker: false });
    expect(wrapper.find(Picker)).toHaveLength(0);
  });
});
