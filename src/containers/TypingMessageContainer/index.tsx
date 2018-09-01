import * as React from 'react';
import { connect } from 'react-redux';
import { newMessage } from '../../actions';
import SectionTypingMessage from '../../components/SectionTypingMessage';

interface ITypingMessageProps {
  currentUser: IUser;
  currentChatId: number;
  companion: IUser;
  newMessage: (
    currentUser: IUser,
    currentChatId: number,
    companion: IUser,
    text: string,
  ) => {
    type: string;
    payload: {
      currentUser: IUser;
      currentChatId: number;
      companion: IUser;
      text: string;
    };
  };
}

const TypingMessageContainer = (
  props: ITypingMessageProps,
): JSX.Element | null => {
  // tslint:disable-next-line: no-shadowed-variable
  const { newMessage, currentUser, currentChatId, companion } = props;
  if (!currentChatId || !companion) {
    return null;
  }
  return (
    <SectionTypingMessage
      newMessage={newMessage}
      currentUser={currentUser}
      currentChatId={currentChatId}
      companion={companion}
    />
  );
};

const mapStateToProps = (state: IState) => ({
  currentUser: state.session.toJS(),
  currentChatId: state.currentChat.get('id'),
  companion: state.currentChat.get('companion'),
});

const mapDispatchToProps: {
  newMessage: (
    currentUser: IUser,
    currentChatId: number,
    companion: IUser,
    text: string,
  ) => {
    type: string;
    payload: {
      currentUser: IUser;
      currentChatId: number;
      companion: IUser;
      text: string;
    };
  };
} = {
  newMessage,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TypingMessageContainer);
