import * as React from 'react';
import {
  SectionMessagesList,
  UserAvatar,
  Text,
  MessageContainer,
  MessageInfoContainer,
  MessageArrow,
  MessageDate,
} from '../../StyledComponents';

const src = 'https://emilcarlsson.se/assets/mikeross.png';

class MessagesList extends React.Component {
  public static messageRender(massage: IMessage): JSX.Element {
    return (
      <MessageContainer key={Math.random()}>
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
    const messages: IMessage[] = [
      {
        from: 'Mike Ross',
        to: 'Louis Litt',
        text:
          'Lorem ipsum dolor sit amet, onsectetur adipisicing  onsectetur ' +
          'adipisicing consectetur adipisicing elit. Porro!',
        date: new Date().toDateString(),
        isRead: false,
      },
      {
        from: 'Louis Litt',
        to: 'Mike Ross',
        text: 'Lorem ipsum dolor sit amet',
        date: new Date().toDateString(),
        isRead: false,
      },
      {
        from: 'Mike Ross',
        to: 'Louis Litt',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro!',
        date: new Date().toDateString(),
        isRead: false,
      },
      {
        from: 'Louis Litt',
        to: 'Mike Ross',
        text: 'Lorem ipsum dolor sit amet',
        date: new Date().toDateString(),
        isRead: false,
      },
      {
        from: 'Mike Ross',
        to: 'Louis Litt',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro!',
        date: new Date().toDateString(),
        isRead: false,
      },
      {
        from: 'Louis Litt',
        to: 'Mike Ross',
        text: 'Lorem ipsum dolor sit amet',
        date: new Date().toDateString(),
        isRead: false,
      },
      {
        from: 'Mike Ross',
        to: 'Louis Litt',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro!',
        date: new Date().toDateString(),
        isRead: false,
      },
      {
        from: 'Louis Litt',
        to: 'Mike Ross',
        text: 'Lorem ipsum dolor sit amet',
        date: new Date().toDateString(),
        isRead: false,
      },
      {
        from: 'Mike Ross',
        to: 'Louis Litt',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro!',
        date: new Date().toDateString(),
        isRead: false,
      },
      {
        from: 'Louis Litt',
        to: 'Mike Ross',
        text: 'Lorem ipsum dolor sit amet',
        date: new Date().toDateString(),
        isRead: false,
      },
    ];

    return (
      <SectionMessagesList>
        {messages.map(MessagesList.messageRender)}
      </SectionMessagesList>
    );
  }
}

export default MessagesList;
