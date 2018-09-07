import * as React from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../../actions/index';
import SectionTypingMessage from '../../components/SectionTypingMessage';

interface ITypingMessageProps {
  currentUser: IUser;
  currentChatId: number;
  companion: IUser;
  addMessage: (
    text: string,
  ) => {
    type: string;
    payload: string;
  };
}

const TypingMessageContainer = (
  props: ITypingMessageProps,
): JSX.Element | null => {
  // tslint:disable-next-line: no-shadowed-variable
  const { addMessage, currentUser, currentChatId, companion } = props;
  if (!currentChatId || !companion) {
    return null;
  }
  return (
    <SectionTypingMessage
      addMessage={addMessage}
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
  addMessage: (
    text: string,
  ) => {
    type: string;
    payload: string;
  };
} = {
  addMessage,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TypingMessageContainer);
