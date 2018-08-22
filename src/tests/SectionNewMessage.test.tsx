import * as React from "react";
import toJSON from 'enzyme-to-json';
import { mount } from "enzyme";
import SectionUserNewMessage from "../containers/SectionNewMessage";
import {
  SectionNewMessage,
  UserInput,
  UserButton
} from '../StyledComponents'

describe('testing SectionUserNewMessage', () => {
  const wrapper = mount(<SectionUserNewMessage />);

  it("should contain SectionMessagesList", () => {
    expect(wrapper.find(SectionNewMessage)).toHaveLength(1);
  });

  it("should contain UserInput", () => {
    expect(wrapper.find(UserInput)).toHaveLength(1);
  });

  it("should contain UserButton", () => {
    expect(wrapper.find(UserButton)).toHaveLength(1);
  });
  
  it('snapshot SectionUserNewMessage', () => {
    const tree = toJSON(wrapper);
    expect(tree).toMatchSnapshot();
  })
});
