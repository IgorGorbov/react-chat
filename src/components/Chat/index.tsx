import * as React from 'react';
import { Image, Input, Button, Icon } from 'semantic-ui-react';

import UserList from '../../containers/UserList';
import UserStatus from '../../containers/UserStatus';
import MassagesList from '../../containers/MassagesList';

import './styles.css';

const src = 'https://emilcarlsson.se/assets/mikeross.png';
const src2 = 'https://emilcarlsson.se/assets/louislitt.png';

const Chat = (): JSX.Element => {
  return (
    <div className="container">
      <section className="contactsList">
        <div className="userWrapper">
          <Image className="userAvatar" src={src} size="tiny" circular={true} />
          <span className="userName">Mike Ross</span>
        </div>
        <Input
          className="inputSearch"
          icon="users"
          iconPosition="left"
          placeholder="Search users..."
        />
        <UserStatus />
        <UserList />
        <div className="buttonControls">
          <Button color="black" icon={true} labelPosition="right">
            Add User
            <Icon name="add user" />
          </Button>
          <Button color="black" icon={true} labelPosition="right">
            Settings
            <Icon name="settings" />
          </Button>
        </div>
      </section>
      <section className="contactHeader">
        <Image
          className="contactHeaderAvatar"
          src={src2}
          size="tiny"
          circular={true}
        />
        <div className="contactUserInfo">
          <span className="contactUserName">Louis Litt</span>
          <span className="contactUserStatus">Online</span>
        </div>
        <Button className="userDeleteButton" color="red" icon="user delete" />
      </section>
      <section className="messagesList">
        <MassagesList />
      </section>
      <section className="inputField">
        <Input
          className="textInputMessage"
          placeholder="Write your message ..."
        />
        <Button className="ButtonSend" size="large" primary={true} icon={true}>
          <Icon name="send" />
        </Button>
      </section>
    </div>
  );
};

export default Chat;
