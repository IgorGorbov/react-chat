import * as React from 'react';

import './styles.css';

class UserStatus extends React.Component {
  public render() {
    return (
      <div className="CheckUserStatus">
        <input
          className="radio online"
          type="radio"
          id="r1"
          name="status"
          defaultChecked={true}
        />
        <label htmlFor="r1">Online</label>

        <input className="radio away" type="radio" id="r2" name="status" />
        <label htmlFor="r2">Away</label>

        <input className="radio busy" type="radio" id="r3" name="status" />
        <label htmlFor="r3">Busy</label>

        <input className="radio offline" type="radio" id="r4" name="status" />
        <label htmlFor="r4">Offline</label>
      </div>
    );
  }
}

export default UserStatus;
