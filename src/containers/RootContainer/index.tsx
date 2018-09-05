import * as React from 'react';
import { connect } from 'react-redux';
import CurrentChatContainer from '../../containers/CurrentChatContainer';
import TypingMessageContainer from '../TypingMessageContainer';
import SectionContacts from '../../components/SectionContacts';
import ModalWindow from '../../components/ModalLogin';
import { GridLayout } from '../../styledComponents';
import {
  clientConnect,
  chooseUser,
  fetchAllUsers,
  registerClient,
} from '../../actions';

interface IRootContainerProps {
  users: IUser[];
  currentUser: IUser | {};
  currentChat: ICurrentChat;
  clientConnect: () => { type: string };
  registerClient: (name: string) => { type: string; payload: string };
  fetchAllUsers: (users: IUser[]) => { type: string; payload: IUser[] };
  chooseUser: (user: IUser) => { type: string; payload: IUser };
}

class RootContainer extends React.Component<IRootContainerProps> {
  public componentWillMount(): void {
    this.props.clientConnect();
  }
  public render(): JSX.Element {
    // tslint:disable: no-shadowed-variable
    const { users, currentUser, currentChat, registerClient } = this.props;
    const withChat: number = Object.keys(currentChat).length;
    if (!currentUser || !Object.keys(currentUser).length) {
      return (
        <ModalWindow
          modalOpen={true}
          registerClient={registerClient}
          users={users}
        />
      );
    }
    return (
      <React.Fragment>
        <GridLayout className={withChat ? 'withChat' : ''}>
          <SectionContacts />
          <CurrentChatContainer />
          <TypingMessageContainer />
        </GridLayout>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: IState) => ({
  currentUser: state.session.toJS(),
  currentChat: state.currentChat.toJS(),
  users: state.users,
});

const mapDispatchToProps: {
  clientConnect: () => { type: string };
  registerClient: (name: string) => { type: string; payload: string };
  fetchAllUsers: (users: IUser[]) => { type: string; payload: IUser[] };
  chooseUser: (user: IUser) => { type: string; payload: IUser };
} = {
  clientConnect,
  registerClient,
  fetchAllUsers,
  chooseUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RootContainer);
