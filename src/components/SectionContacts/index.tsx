import * as React from 'react';
import { Button, Icon } from 'semantic-ui-react';

import {
  SectionContactsList,
  UserInfoWrapper,
  UserAvatar,
  Text,
  UserInput,
  ButtonsContainer
} from '../../StyledComponents';

import UserStatus from '../../containers/UserStatus'
import UserList from '../../containers/UserList'

const src = 'https://emilcarlsson.se/assets/mikeross.png';

const SectionContacts = () => {
  return (
    <SectionContactsList>
      <UserInfoWrapper>
        <UserAvatar
          maxHeight="80px"
          maxWidth="80px"
          borderSize="4px"
          borderColor="green"
          cursor="true"
          src={src}
          size="tiny"
          circular={true}
        />
        <Text
          textColor="white"
          textSize="18px"
          textLineHeight="1"
          textFontFamily="Titillium Web"
          textWeight="500"
        >
          Mike Ross
        </Text>
      </UserInfoWrapper>
      <UserInput
        icon="users"
        iconPosition="left"
        placeholder="Search users..."
        inputWidth="100%"
        inputColor="white"
        inputBgc="#485F78"
      />
      <UserStatus />
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
