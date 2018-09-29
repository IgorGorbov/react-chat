import * as React from 'react';
import toJSON from 'enzyme-to-json';
import { mount } from 'enzyme';

import UserStatus from '../client/components/UserStatus';

import { UserStatusContainer, RadioInput } from '../client/styledComponents';

describe('testing UserStatus', () => {
  interface IUserStatus {
    changeUserStatus: (status: string) => { type: string; payload: string };
    userStatus: string;
    handleClickAvatar: () => void;
  }
  const FakeChangeUserStatus = jest.fn();
  const FakeHandleClickAvatar = jest.fn();

  const initState: IUserStatus = {
    changeUserStatus: FakeChangeUserStatus,
    userStatus: 'Online',
    handleClickAvatar: FakeHandleClickAvatar,
  };

  let wrapper: any;

  beforeAll(() => {
    wrapper = mount(<UserStatus {...initState} />);
  });

  it('should contain UserStatusContainer', () => {
    expect(wrapper.find(UserStatusContainer)).toHaveLength(1);
  });

  it('should contain RadioInput', () => {
    expect(wrapper.find(RadioInput)).toHaveLength(4);
  });

  it('should contain label', () => {
    const labels = wrapper.find('label');
    expect(labels).toHaveLength(4);

    labels.first().simulate('click');
    expect(FakeChangeUserStatus).toHaveBeenCalledTimes(1);
    expect(FakeHandleClickAvatar).toHaveBeenCalledTimes(1);
  });

  it('snapshot UserStatus', () => {
    const tree = toJSON(wrapper);
    expect(tree).toMatchSnapshot();
  });
});
