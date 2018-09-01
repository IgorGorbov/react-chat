import * as React from 'react';
import { connect } from 'react-redux';
import { changeUserStatus, userLogin } from '../../actions';
import UserInfo from '../../components/UserInfo';

interface IUserInfoProps {
  user: IUser;
  userLogin: () => { type: string };
  changeUserStatus: (status: string) => { type: string; payload: string };
}

const UserInfoContainers = (props: IUserInfoProps): JSX.Element => {
  // tslint:disable-next-line: no-shadowed-variable
  const { user, changeUserStatus, userLogin } = props;
  return (
    <UserInfo
      user={user}
      changeUserStatus={changeUserStatus}
      userLogin={userLogin}
    />
  );
};

const mapStateToProps = (state: IState) => ({
  user: state.session.toJS(),
});

const mapDispatchToProps: {
  userLogin: () => { type: string };
  changeUserStatus: (status: string) => { type: string; payload: string };
} = {
  userLogin,
  changeUserStatus,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserInfoContainers);
