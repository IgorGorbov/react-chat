import * as React from 'react';
import UserCard from '../../components/UserCard';

import './styles.css';

class UserList extends React.Component {
  public static renderUserCard(user: IUserCard): JSX.Element {
    return <UserCard key={user.id} {...user} />;
  }

  public render() {
    const users: IUserCard[] = [
      {
        id: 2,
        name: 'Louis Litt',
        avatar: 'https://emilcarlsson.se/assets/louislitt.png',
      },
      {
        id: 3,
        name: 'Louis Litt',
        avatar: 'https://emilcarlsson.se/assets/louislitt.png',
      },
      {
        id: 4,
        name: 'Louis Litt',
        avatar: 'https://emilcarlsson.se/assets/louislitt.png',
      },
      {
        id: 5,
        name: 'Louis Litt',
        avatar: 'https://emilcarlsson.se/assets/louislitt.png',
      },
      {
        id: 6,
        name: 'Louis Litt',
        avatar: 'https://emilcarlsson.se/assets/louislitt.png',
      },
      {
        id: 7,
        name: 'Louis Litt',
        avatar: 'https://emilcarlsson.se/assets/louislitt.png',
      },
      {
        id: 8,
        name: 'Louis Litt',
        avatar: 'https://emilcarlsson.se/assets/louislitt.png',
      },
      {
        id: 9,
        name: 'Louis Litt',
        avatar: 'https://emilcarlsson.se/assets/louislitt.png',
      },
      {
        id: 10,
        name: 'Louis Litt',
        avatar: 'https://emilcarlsson.se/assets/louislitt.png',
      },
    ];

    return (
      <div className="UserListWrapper">
        {users.map(UserList.renderUserCard)}
      </div>
    );
  }
}

export default UserList;
