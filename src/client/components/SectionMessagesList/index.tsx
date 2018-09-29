import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MessagesList } from '../../styledComponents';
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
  private container: React.RefObject<any> = React.createRef();

  constructor(props: IMessagesListProps) {
    super(props);
  }

  public componentDidMount() {
    this.scrollToBottom();
  }

  public componentDidUpdate() {
    this.scrollToBottom();
  }

  public scrollToBottom = () => {
    const messagesContainer: any = ReactDOM.findDOMNode(this.container.current);
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
      <MessagesList ref={this.container}>
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
