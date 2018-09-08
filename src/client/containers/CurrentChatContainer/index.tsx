import * as React from 'react';
import { connect } from 'react-redux';
import SectionContactHeader from '../../components/SectionContactHeader';
import SectionMessagesList from '../../components/SectionMessagesList';
import {
  deleteChat,
  selectMessage,
  deleteMessages,
  readMessages,
} from '../../actions/index';
import { getChatById } from '../../selectors/index';

interface IContactHeaderProps {
  currentUser: IUser;
  currentChat: IChat;
  companion: IUser;
  selectedMessages: number[];
  selectMessage: (messageId: number) => { type: string; payload: number };
  deleteChat: (chatId: number) => { type: string; payload: number };
  deleteMessages: (
    selectedMessages: number[],
    currentUserID: number,
    currentChatId: number,
  ) => {
    type: string;
    payload: {
      selectedMessages: number[];
      currentUserID: number;
      currentChatId: number;
    };
  };
  readMessages: (
    currentUserID: number,
    currentChatId: number,
  ) => {
    type: string;
    payload: { currentUserID: number; currentChatId: number };
  };
}

const ContactHeaderContainer = (
  props: IContactHeaderProps,
): JSX.Element | null => {
  // tslint:disable: no-shadowed-variable
  const {
    currentChat,
    companion,
    deleteChat,
    selectMessage,
    selectedMessages,
    deleteMessages,
    currentUser,
    readMessages,
  } = props;
  if (
    typeof currentChat === 'undefined' ||
    !Object.keys(currentChat).length ||
    typeof companion === 'undefined'
  ) {
    return null;
  }
  const { messages } = currentChat;
  const currentChatId = currentChat.id;

  return (
    <React.Fragment>
      <SectionContactHeader
        currentChatId={currentChatId}
        currentUser={currentUser}
        user={companion}
        deleteChat={deleteChat}
        selectedMessages={selectedMessages}
        deleteMessages={deleteMessages}
      />
      <SectionMessagesList
        messages={messages}
        currentUser={currentUser}
        currentChatId={currentChatId}
        selectMessage={selectMessage}
        selectedMessages={selectedMessages}
        readMessages={readMessages}
      />
    </React.Fragment>
  );
};

const mapStateToProps = (state: IState) => ({
  currentUser: state.session.toJS(),
  currentChat: getChatById(state),
  companion: state.currentChat.get('companion'),
  selectedMessages: state.filters.get('selectedMessages'),
});

const mapDispatchToProps = {
  deleteChat,
  selectMessage,
  deleteMessages,
  readMessages,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactHeaderContainer);
