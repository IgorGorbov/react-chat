import * as React from 'react';
import { Button, Icon } from 'semantic-ui-react';

import {
  SectionContactsList,
  UserInput,
  ButtonsContainer
} from '../../styledComponents';

import UserList from '../../containers/UserList'
import UserInfoContainers from '../../containers/UserInfoContainers'

const SectionContacts = () => {
  return (
    <SectionContactsList>
      <UserInfoContainers />
      <UserInput
        icon="users"
        iconPosition="left"
        placeholder="Search users..."
        inputwidth="100%"
        inputcolor="white"
        inputbgc="#485F78"
      />
      <UserList />
      <ButtonsContainer>
        <Button color="black" icon={true} labelPosition="right">
          Add User
          <Icon name="add user" />
        </Button>
        <Button color="black" icon={true} labelPosition="right">
          Settings
          <Icon name="settings" />
        </Button>
      </ButtonsContainer>
    </SectionContactsList>
  );
};

export default SectionContacts;
