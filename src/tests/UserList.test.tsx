import * as React from "react";
import toJSON from 'enzyme-to-json';
import { mount } from "enzyme";
import UserList from "../containers/UserList";
import {
  UserListWrapper
} from '../StyledComponents'

describe('testing UserList', () => {
  const wrapper = mount(<UserList />);

  it("should contain UserListWrapper", () => {
    expect(wrapper.find(UserListWrapper)).toHaveLength(1);
  });

  it('snapshot UserList', () => {
    const tree = toJSON(wrapper);
    expect(tree).toMatchSnapshot();
  })
});
