import * as React from 'react';
import { Dispatch } from 'redux';
import {
  UserStatusContainer,
  RadioInput,
} from '../../styledComponents'
import { Status } from '../../constants/user'

declare interface IUserStatus {
  changeUserStatus: Dispatch<any>
  userStatus: string,
  handleClickAvatar: () => void
}

class UserStatus extends React.Component<IUserStatus, {}> {

  public handleClickLabel(newStatus: string): void {
    this.props.changeUserStatus(newStatus);
    this.props.handleClickAvatar();
  }

  public render() {
    const { userStatus } = this.props;
    return (
      <UserStatusContainer>
        <RadioInput
          className="online"
          type="radio"
          id="r1"
          name="status"
          defaultChecked={userStatus === Status.Online}
        />
        <label
          onClick={ () => this.handleClickLabel(Status.Online) }
          htmlFor="r1"
        >
          Online
        </label>

        <RadioInput
          className="away"
          type="radio"
          id="r2"
          name="status"
          defaultChecked={userStatus === Status.Away}
        />
        <label
          onClick={ () => this.handleClickLabel(Status.Away) }
          htmlFor="r2"
        >
          Away
        </label>

        <RadioInput
          className="busy"
          type="radio"
          id="r3"
          name="status"
          defaultChecked={userStatus === Status.Busy}
        />
        <label
          onClick={ () => this.handleClickLabel(Status.Busy) }
          htmlFor="r3"
        >
          Busy
        </label>

        <RadioInput
          className="offline"
          type="radio"
          id="r4"
          name="status"
          defaultChecked={userStatus === Status.Offline}
        />
        <label
          onClick={ () => this.handleClickLabel(Status.Offline) }
          htmlFor="r4"
        >
          Offline
        </label>
      </UserStatusContainer>
    );
  }
}

export default UserStatus;
