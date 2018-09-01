import * as React from 'react';
import ChatCard from '../ChatCard';
import { UserListWrapper } from '../../styledComponents';

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
}

class ChatsList extends React.Component<IUserListProps> {
  public onChangeChat(chat: IChat, user: IUser) {
    this.props.changeChat({ id: chat.id, companion: user });
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
