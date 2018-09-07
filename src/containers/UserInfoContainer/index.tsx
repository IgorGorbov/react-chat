import * as React from 'react';
import { connect } from 'react-redux';
import { changeUserStatus } from '../../actions';
import UserInfo from '../../components/UserInfo';

interface IUserInfoProps {
  user: IUser;
  changeUserStatus: (status: string) => { type: string; payload: string };
}

const UserInfoContainers = (props: IUserInfoProps): JSX.Element => {
  // tslint:disable-next-line: no-shadowed-variable
  const { user, changeUserStatus } = props;
  return <UserInfo user={user} changeUserStatus={changeUserStatus} />;
};

const mapStateToProps = (state: IState) => ({
  user: state.session.toJS(),
});

const mapDispatchToProps: {
  changeUserStatus: (status: string) => { type: string; payload: string };
} = {
  changeUserStatus,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserInfoContainers);
