import * as React from "react";
import toJSON from 'enzyme-to-json';
import { shallow, mount } from "enzyme";
import SectionMessagesList from "../containers/SectionMessagesList";
import {
  MessageContainer,
  UserAvatar,
  MessageInfoContainer,
  MessageArrow,
  Text,
  MessageDate
} from '../StyledComponents'

describe('testing SectionMessagesList', () => {
  const messages: IMessage[] = [
    {
      id: '1',
      from: 'Mike Ross',
      to: 'Louis Litt',
      text:
      'Lorem ipsum dolor sit amet, onsectetur adipisicing  onsectetur ' +
      'adipisicing consectetur adipisicing elit. Porro!',
      date: new Date().toDateString(),
      isRead: false,
    },
    {
      id: '2',
      from: 'Mike Jenn',
      to: 'Louis Litt',
      text:
      'Lorem ipsum dolor sit amet!',
      date: new Date().toDateString(),
      isRead: false,
    }
  ];
  const wrapper = mount(<SectionMessagesList messages={messages} />);

  it("should contain SectionMessagesList", () => {
    expect(wrapper.find('SectionMessagesList')).toHaveLength(1);
  });

  it("should render 0 messages", () => {
    const result = mount(<SectionMessagesList messages={[]} />);
    expect(result.find('p').text()).toEqual('Not messages');
  });

  it("should contain 2 messages", () => {
    expect(wrapper.find(MessageContainer)).toHaveLength(2);
  });

  it("should contain 2 UserAvatars", () => {
    expect(wrapper.find(UserAvatar)).toHaveLength(2);
  });

  it("should contain 2 MessageInfoContainer", () => {
    expect(wrapper.find(MessageInfoContainer)).toHaveLength(2);
  });

  it("should contain 2 MessageArrow", () => {
    expect(wrapper.find(MessageArrow)).toHaveLength(2);
  });

  it("should contain 2 Messages Text", () => {
    expect(wrapper.find(Text)).toHaveLength(2);
  });

  it("should the text of the messages contain fake data", () => {
    wrapper.find(Text).forEach((node, i) => {
      expect(node.text()).toEqual(messages[i].text)
    })
  });

  it("should contain 2 Messages MessageDate", () => {
    expect(wrapper.find(MessageDate)).toHaveLength(2);
  });

  it("should the data of the messages contain fake data", () => {
    wrapper.find(MessageDate).forEach((node, i) => {
      expect(node.text()).toEqual(messages[i].date)
    })
  });


  it('snapshot SectionMessagesList', () => {
    const result = shallow(<SectionMessagesList messages={messages} />);
    const tree = toJSON(result);
    expect(tree).toMatchSnapshot();
  })
});
