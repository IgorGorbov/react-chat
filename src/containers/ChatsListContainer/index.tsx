import * as React from 'react';
import { connect } from 'react-redux';
import ChatsList from '../../components/ChatsList';
import ModalAddChat from '../../components/ModalAddChat';
import { changeChat, newChat } from '../../actions/';
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
  newChat: (
    currentUser: IUser,
    companion: IUser,
  ) => {
    type: string;
    payload: { currentUser: IUser; companion: IUser };
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
    newChat,
  } = props;
  const currentUserId = currentUser.id;

  return (
    <React.Fragment>
      <ChatsList
        chats={chats}
        changeChat={changeChat}
        currentUserId={currentUserId}
        currentChatId={currentChatId}
      />
      <ModalAddChat
        newChat={newChat}
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
  newChat: (
    currentUser: IUser,
    companion: IUser,
  ) => {
    type: string;
    payload: { currentUser: IUser; companion: IUser };
  };
} = {
  changeChat,
  newChat,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserListContainer);
