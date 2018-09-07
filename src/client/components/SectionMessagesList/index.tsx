import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MessagesList } from '../../styledComponents/index';
import Message from '../Message/index';

interface IMessagesListProps {
  messages: IMessage[];
  currentUser: IUser;
  currentChatId: number;
  selectedMessages: number[];
  selectMessage: (messageId: number) => { type: string; payload: number };
  readMessages: (
    currentChatId: number,
    currentUserID: number,
  ) => {
    type: string;
    payload: { currentChatId: number; currentUserID: number };
  };
}

class SectionMessagesList extends React.Component<IMessagesListProps> {
  private container: any;

  constructor(props: IMessagesListProps) {
    super(props);
  }

  public componentDidMount() {
    this.scrollToBottom();
    // const { currentUser, currentChatId, readMessages } = this.props;
    // readMessages(currentChatId, currentUser.id);
  }

  public componentDidUpdate() {
    this.scrollToBottom();
  }

  public scrollToBottom = () => {
    const messagesContainer: any = ReactDOM.findDOMNode(this.container);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  };

  public render() {
    const {
      messages,
      currentUser,
      selectMessage,
      selectedMessages,
    } = this.props;
    return (
      <MessagesList ref={(el: any) => (this.container = el)}>
        {messages.length
          ? messages.map((message: any) => (
              <Message
                key={message.id}
                message={message}
                currentUser={currentUser}
                className="wow bounceIn"
                selectMessage={selectMessage}
                selectedMessages={selectedMessages}
              />
            ))
          : null}
      </MessagesList>
    );
  }
}

export default SectionMessagesList;
