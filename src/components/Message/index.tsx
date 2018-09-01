import * as React from 'react';
import ReactWOW from 'react-wow';
import {
  UserAvatar,
  TextMessage,
  MessageContainer,
  MessageInfoContainer,
  MessageArrow,
  MessageDate,
} from '../../styledComponents';

interface IMessageProps {
  key: number;
  message: IMessage;
  currentUser: IUser;
  selectedMessages: number[];
  selectMessage: (messageId: number) => { type: string; payload: number };
  className: string;
}

const Message = (props: IMessageProps): JSX.Element | null => {
  const { currentUser, message, selectMessage, selectedMessages } = props;
  const isMessageTo = currentUser.id === message.from.id ? 'isMessageTo' : '';
  const isSelected = selectedMessages.includes(message.id) ? ' isSelected' : '';
  if (message.deletedBy.includes(currentUser.id)) {
    return null;
  }
  return (
    <ReactWOW animation={isMessageTo ? 'fadeInRight' : 'fadeInLeft'}>
      <MessageContainer
        key={message.id}
        className={isMessageTo}
        onClick={() => selectMessage(message.id)}
      >
        <UserAvatar
          maxwidth="45px"
          maxheight="45px"
          bordersize="1px"
          src={message.from.avatar}
          size="tiny"
          circular={true}
        />
        <MessageInfoContainer className={isMessageTo + isSelected}>
          <MessageArrow className={isMessageTo + isSelected} />
          <TextMessage>{message.text}</TextMessage>
          <MessageDate>{message.date}</MessageDate>
        </MessageInfoContainer>
      </MessageContainer>
    </ReactWOW>
  );
};

export default Message;
