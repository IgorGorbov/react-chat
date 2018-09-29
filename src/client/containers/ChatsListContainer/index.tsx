import * as React from 'react';
import { connect } from 'react-redux';
import ChatsList from '../../components/ChatsList';
import ModalAddChat from '../../components/ModalAddChat';
import { changeChat, addChat, readMessages } from '../../actions';
import { getSearchEntities, getAvailableUsers } from '../../selectors';

interface IUserListProps {
  currentUser: IUser;
  currentChatId: number;
  availableUsers: IUser[];
  chats: IChat[];
  changeChat: (
    chat: object,
  ) => {
    type: string;
    payload: {
      id: number;
      companion: IUser;
    };
  };
  addChat: (companion: IUser) => { type: string; payload: IUser };
  readMessages: (
    currentChatId: number,
    currentUserID: number,
  ) => {
    type: string;
    payload: { currentChatId: number; currentUserID: number };
  };
}

const UserListContainer = (props: IUserListProps): JSX.Element => {
  // tslint:disable: no-shadowed-variable
  const {
    currentUser,
    currentChatId,
    availableUsers,
    chats,
    changeChat,
    addChat,
    readMessages,
  } = props;
  const currentUserId = currentUser.id;

  return (
    <React.Fragment>
      <ChatsList
        chats={chats}
        changeChat={changeChat}
        currentUserId={currentUserId}
        currentChatId={currentChatId}
        readMessages={readMessages}
      />
      <ModalAddChat
        addChat={addChat}
        currentUser={currentUser}
        users={availableUsers}
      />
    </React.Fragment>
  );
};

const mapStateToProps = (state: IState) => ({
  chats: getSearchEntities(state),
  currentUser: state.session.toJS(),
  currentChatId: state.currentChat.get('id'),
  availableUsers: getAvailableUsers(state),
});

const mapDispatchToProps: {
  changeChat: (
    chat: object,
  ) => {
    type: string;
    payload: {
      id: number;
      companion: IUser;
    };
  };
  addChat: (companion: IUser) => { type: string; payload: IUser };
  readMessages: (
    currentChatId: number,
    currentUserID: number,
  ) => {
    type: string;
    payload: { currentChatId: number; currentUserID: number };
  };
} = {
  changeChat,
  addChat,
  readMessages,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserListContainer);
