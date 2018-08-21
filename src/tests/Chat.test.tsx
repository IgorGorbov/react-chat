import * as React from "react";
import toJSON from 'enzyme-to-json';
import { shallow } from "enzyme";
import Chat from "../components/Chat/index";

describe('testing Chat component', () => {

  it("should contain GridLayout", () => {
    const result = shallow(<Chat/>);
    expect(toJSON(result).type).toEqual('styled.div')
  });

  it("should contain SectionContacts", () => {
    const result = shallow(<Chat/>);
    expect(result.find('SectionContacts')).toHaveLength(1)
  });

  it("should contain SectionContactHeader", () => {
    const result = shallow(<Chat/>);
    expect(result.find('SectionContactHeader')).toHaveLength(1)
  });

  it("should contain SectionMessagesList", () => {
    const result = shallow(<Chat/>);
    expect(result.find('SectionMessagesList')).toHaveLength(1)
  });

  it("should contain SectionUserNewMessage", () => {
    const result = shallow(<Chat/>);
    expect(result.find('SectionUserNewMessage')).toHaveLength(1)
  });

  it('snapshot Chat component', () => {
    const wrapper = shallow(<Chat />);
    const tree = toJSON(wrapper);
    expect(tree).toMatchSnapshot();
  })
});
