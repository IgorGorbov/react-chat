import * as React from 'react';
import { UserInfoWrapper, UserAvatar, Text } from '../../styledComponents';
import UserStatus from '../UserStatus';
import { statusColors, Status } from '../../constants/user';

interface IUserInfoProps {
  user: IUser;
  changeUserStatus: (status: string) => { type: string; payload: string };
}

interface IUserInfoState {
  isOpenUserStatus: boolean;
}

class UserInfo extends React.Component<IUserInfoProps, IUserInfoState> {
  public state = {
    isOpenUserStatus: false,
  };

  public componentDidMount(): void {
    this.props.changeUserStatus(Status.Online);
  }

  public handleClickAvatar(): void {
    this.setState({ isOpenUserStatus: !this.state.isOpenUserStatus });
  }

  public render(): JSX.Element {
    const { user, changeUserStatus } = this.props;
    const { isOpenUserStatus } = this.state;
    return (
      <UserInfoWrapper>
        <UserAvatar
          maxheight="80px"
          maxwidth="80px"
          bordersize="4px"
          bordercolor={statusColors[user.status]}
          cursor="true"
          src={user.avatar}
          size="tiny"
          circular={true}
          onClick={() => this.handleClickAvatar()}
        />
        <Text
          textColor="white"
          textSize="18px"
          textLineHeight="1"
          textFontFamily="Titillium Web"
          textWeight="500"
        >
          {user.name}
        </Text>
        {isOpenUserStatus ? (
          <UserStatus
            changeUserStatus={changeUserStatus}
            userStatus={user.status}
            handleClickAvatar={() => this.handleClickAvatar()}
          />
        ) : null}
      </UserInfoWrapper>
    );
  }
}

export default UserInfo;
