import * as React from 'react';
import { Modal, Button } from 'semantic-ui-react';
import { UserButton } from '../../styledComponents/index';

interface IModalDeleteChatProps {
  userName: string;
  currentChatId: number;
  deleteChat: (chatId: number) => { type: string; payload: number };
}

interface IModalDeleteChatState {
  modalOpen: boolean;
}

class ModalDeleteChat extends React.Component<
  IModalDeleteChatProps,
  IModalDeleteChatState
> {
  public state = { modalOpen: false };
  public handleOpen = (): void => this.setState({ modalOpen: true });
  public handleClose = (): void => {
    this.setState({ modalOpen: false });
  };

  public handleClick(chatId: number): void {
    const { deleteChat } = this.props;
    deleteChat(chatId);
    this.setState({ modalOpen: false });
  }
  public render() {
    const { currentChatId, userName } = this.props;
    const DeleteButton: any = (
      <UserButton
        buttonwidth="40px"
        buttonmargin="0 10px 0 auto"
        buttonheight="35px"
        color="red"
        icon="user delete"
        onClick={(): void => this.handleOpen()}
      />
    );
    return (
      <Modal
        trigger={DeleteButton}
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >
        <Modal.Header>Delete chat</Modal.Header>
        <Modal.Content>
          <p>Are you sure you want to delete chat with {userName}?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={(): void => this.handleClose()} negative={true}>
            No
          </Button>
          <Button
            onClick={(): void => this.handleClick(currentChatId)}
            positive={true}
            labelPosition="right"
            icon="checkmark"
            content="Yes"
          />
        </Modal.Actions>
      </Modal>
    );
  }
}

export default ModalDeleteChat;
