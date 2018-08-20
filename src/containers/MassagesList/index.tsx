import * as React from 'react';
import { Image } from 'semantic-ui-react';

import './styles.css';
const src = 'https://emilcarlsson.se/assets/mikeross.png';

class MessagesList extends React.Component {
  public static messageRender(massage: IMessage): JSX.Element {
    return (
      <div className="messageWrapper" key={Math.random()}>
        <Image
          className="messageAvatar"
          src={src}
          size="tiny"
          circular={true}
        />
        <div className="messageInfo">
          <span className="messageInfoArrow" />
          <span className="messageText">{massage.text}</span>
          <span className="messageDate">{massage.date}</span>
        </div>
      </div>
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
