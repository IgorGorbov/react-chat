import * as React from 'react';
import { connect } from 'react-redux';
import CurrentChatContainer from '../../containers/CurrentChatContainer';
import TypingMessageContainer from '../TypingMessageContainer';
import SectionContacts from '../../components/SectionContacts';
import ModalWindow from '../../components/ModalLogin';
import { GridLayout } from '../../styledComponents';
import { chooseUser, fetchAllUsers } from '../../actions';

import users from '../../users';

interface IRootContainerProps {
  currentUser: IUser | {};
  currentChat: ICurrentChat;
  fetchAllUsers: (users: IUser[]) => { type: string; payload: IUser[] };
  chooseUser: (user: IUser) => { type: string; payload: IUser };
}

class RootContainer extends React.Component<IRootContainerProps> {
  public componentDidMount(): void {
    this.props.fetchAllUsers(users);
  }
  public render(): JSX.Element {
    // tslint:disable-next-line: no-shadowed-variable
    const { currentUser, currentChat, chooseUser } = this.props;
    const withChat: number = Object.keys(currentChat).length;
    if (!currentUser || !Object.keys(currentUser).length) {
      return (
        <ModalWindow
          modalOpen={true}
          actionCreator={chooseUser}
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
});

const mapDispatchToProps: {
  fetchAllUsers: (users: IUser[]) => { type: string; payload: IUser[] };
  chooseUser: (user: IUser) => { type: string; payload: IUser };
} = {
  fetchAllUsers,
  chooseUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RootContainer);
