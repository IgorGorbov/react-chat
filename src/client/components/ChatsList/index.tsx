import * as React from 'react';
import ChatCard from '../ChatCard/index';
import { UserListWrapper } from '../../styledComponents/index';

function isChatArray(arr: any): arr is [] {
  return arr.length > 0 && typeof arr[0] === 'object' && Array.isArray(arr);
}

interface IUserListProps {
  chats: IChat[];
  currentChatId: number;
  currentUserId: number;
  changeChat: (
    chat: object,
  ) => {
    type: string;
    payload: {
      id: number;
      companion: IUser;
    };
  };
  readMessages: (
    currentChatId: number,
    currentUserID: number,
  ) => {
    type: string;
    payload: { currentChatId: number; currentUserID: number };
  };
}

class ChatsList extends React.Component<IUserListProps> {
  public onChangeChat(chat: IChat, user: IUser) {
    this.props.changeChat({ id: chat.id, companion: user });
    this.props.readMessages(chat.id, this.props.currentUserId);
  }

  public renderChatCard(chat: IChat): JSX.Element | null {
    const { currentUserId, currentChatId } = this.props;
    const user: IUser | undefined = chat.users.find(
      (u: IUser) => u.id !== currentUserId,
    );
    if (!user) {
      return null;
    }
    const isActive = currentChatId === chat.id ? 'active' : '';
    return (
      <ChatCard
        key={user.id}
        user={user}
        chat={chat}
        onChangeChat={() => this.onChangeChat(chat, user)}
        isActive={isActive}
      />
    );
  }

  public render() {
    const chats = Object.values(this.props.chats);
    return (
      <UserListWrapper>
        {isChatArray(chats)
          ? chats.map(chat => this.renderChatCard(chat))
          : null}
      </UserListWrapper>
    );
  }
}

export default ChatsList;
