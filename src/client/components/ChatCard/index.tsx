import * as React from 'react';
import {
  UserCardContainer,
  ImageContainer,
  UserAvatar,
  UserStatus,
  UserInfoContainer,
  UserName,
  TextMessage,
  NewCountMessage,
} from '../../styledComponents/index';
import { statusColors } from '../../constants/user';

interface IChatCardProps {
  user: IUser;
  key: number;
  chat: IChat;
  isActive: string;
  onChangeChat: () => void;
}

const ChatCard = ({ user, chat, onChangeChat, isActive }: IChatCardProps) => {
  const inBox: any = chat.messages.filter(
    (message: IMessage) => message.to.id !== user.id,
  );
  const lastMessage = inBox.length ? [...inBox].pop().text.slice(0, 10) : '';
  const countNewMessages = inBox.reduce(
    (acc: number, message: IMessage) => acc + Number(!message.isRead),
    0,
  );
  return (
    <UserCardContainer className={isActive} onClick={onChangeChat}>
      <ImageContainer>
        <UserAvatar
          maxwidth="65px"
          maxheight="65px"
          bordersize="1px"
          bordercolor="white"
          src={user.avatar}
          size="tiny"
          circular={true}
        />
        <UserStatus color={statusColors[user.status]} />
      </ImageContainer>
      <UserInfoContainer>
        <UserName>{user.name}</UserName>
        <TextMessage>{lastMessage}</TextMessage>
      </UserInfoContainer>
      <NewCountMessage>
        {countNewMessages !== 0 ? countNewMessages : ''}
      </NewCountMessage>
    </UserCardContainer>
  );
};

export default ChatCard;
