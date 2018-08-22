import * as React from 'react';
import {
  MessagesList,
  UserAvatar,
  Text,
  MessageContainer,
  MessageInfoContainer,
  MessageArrow,
  MessageDate,
} from '../../StyledComponents';

const src = 'https://emilcarlsson.se/assets/mikeross.png';

function isMessagesArray(arr: any): arr is [] {
  return arr.length > 0 &&
    typeof arr[0] === "object" && Array.isArray(arr);
}

class SectionMessagesList extends React.Component<ISectionMessagesList, {}> {
  public static messageRender(massage: IMessage): JSX.Element {
    return (
      <MessageContainer key={massage.id}>
        <UserAvatar
          maxwidth="45px"
          maxheight="45px"
          bordersize="1px"
          src={src}
          size="tiny"
          circular={true}
        />
        <MessageInfoContainer>
          <MessageArrow />
          <Text
            textColor="white"
            textSize="15px"
            textLineHeight="1.5"
            textWeight="400"
            textFontFamily="Titillium Web"
            className="messageText"
          >
            {massage.text}
          </Text>
          <MessageDate>{massage.date}</MessageDate>
        </MessageInfoContainer>
      </MessageContainer>
    );
  }
  public render() {
    const { messages } = this.props;
    let content: JSX.Element | JSX.Element[];

    if(isMessagesArray(messages)) {
      content = messages.map(SectionMessagesList.messageRender)
    } else {
      content = <p>Not messages</p>
    }
    return (
      <MessagesList>
        {content}
      </MessagesList>
    );
  }
}

export default SectionMessagesList;
