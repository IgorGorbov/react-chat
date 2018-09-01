import * as React from 'react';
import { Modal, List, Image, Grid, Button, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import { AddUserButton } from '../../styledComponents';

const ListItem = styled(List.Item)`
  cursor: pointer;
  text-align: center;
`;

const NoUsers = styled.div`
  margin: 0 auto 0 auto;
  font-size: 18px;
  text-align: center;
`;

interface IModalAddChatProps {
  currentUser: IUser;
  users: IUser[];
  newChat: (
    currentUser: IUser,
    companion: IUser,
  ) => { type: string; payload: { currentUser: IUser; companion: IUser } };
}

interface IModalAddChatState {
  modalOpen: boolean;
}

class ModalAddChat extends React.Component<
  IModalAddChatProps,
  IModalAddChatState
> {
  public state = { modalOpen: false };

  public handleOpen = (): void => this.setState({ modalOpen: true });
  public handleClose = (): void => {
    this.setState({ modalOpen: false });
  };

  public handleClick(companion: IUser): void {
    const { currentUser, newChat } = this.props;
    newChat(currentUser, companion);
  }
  public render() {
    const { users } = this.props;
    const AddButton: any = (
      <AddUserButton
        onClick={() => this.handleOpen()}
        color="black"
        icon={true}
        labelPosition="right"
      >
        Add User
        <Icon name="add user" />
      </AddUserButton>
    );
    return (
      <Modal
        trigger={AddButton}
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >
        <Modal.Header>New chat</Modal.Header>
        <Modal.Content>
          <Grid columns="five" divided="vertically">
            <Grid.Row>
              {users.length ? (
                users.map((user: IUser) => (
                  <Grid.Column
                    key={user.id}
                    onClick={() => this.handleClick(user)}
                  >
                    <ListItem>
                      <Image size="tiny" avatar={true} src={user.avatar} />
                      <List.Content>
                        <List.Header as="a">{user.name}</List.Header>
                      </List.Content>
                    </ListItem>
                  </Grid.Column>
                ))
              ) : (
                <NoUsers>No available users</NoUsers>
              )}
            </Grid.Row>
          </Grid>
        </Modal.Content>
        <Modal.Actions>
          <Button
            color="red"
            onClick={() => this.handleClose()}
            inverted={true}
          >
            <Icon name="window close outline" /> Close
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default ModalAddChat;
