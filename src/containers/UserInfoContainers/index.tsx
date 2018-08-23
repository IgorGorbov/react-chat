import * as React from 'react';
import { connect } from 'react-redux'
import { changeUserStatus } from '../../actions/session'
import UserInfo from '../../components/UserInfo'

const UserInfoContainers = (props: any): JSX.Element => {
  // tslint:disable-next-line: no-shadowed-variable
  const { user, changeUserStatus } = props;
  return (
    <UserInfo user={user} changeUserStatus={changeUserStatus} />
  )
};

const mapStateToProps = (state: any) => ({
  user: state.session.toJS()
});

const mapDispatchToProps = {
  changeUserStatus
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfoContainers);
