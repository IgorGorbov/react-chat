import * as React from 'react';
import {
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
      <SectionContactHeader>
        <MessageContainer key={Math.random()}>
          <UserAvatar
            maxWidth="45px"
            maxHeight="45px"
            borderSize="1px"
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
      </SectionContactHeader>
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

    return messages.map(MessagesList.messageRender);
  }
}

export default MessagesList;