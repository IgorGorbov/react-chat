import * as React from 'react';
import { Modal, List, Image, Grid } from 'semantic-ui-react';
import styled from 'styled-components';

const ListItem = styled(List.Item)`
  cursor: pointer;
  text-align: center;
`;

interface IModalProps {
  modalOpen: boolean;
  registerClient: (name: string) => { type: string; payload: string };
  users: IUser[];
}

interface IModalState {
  modalOpen: boolean;
}

class ModalLogin extends React.Component<IModalProps, IModalState> {
  public state = { modalOpen: true };

  public handleClick(user: IUser): void {
    this.setState({
      modalOpen: false,
    });
    this.props.registerClient(user.name);
  }
  public render() {
    const { users } = this.props;
    return (
      <Modal open={this.state.modalOpen}>
        <Modal.Header>Choice a character</Modal.Header>
        <Modal.Content>
          <Grid columns="five" divided="vertically">
            <Grid.Row>
              {users.map((user: IUser) => (
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
              ))}
            </Grid.Row>
          </Grid>
        </Modal.Content>
      </Modal>
    );
  }
}

export default ModalLogin;
