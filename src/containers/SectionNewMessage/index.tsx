import * as React from 'react';
import { Icon } from 'semantic-ui-react';

import {
  SectionNewMessage,
  UserButton,
  UserInput,
} from '../../StyledComponents';

const SectionUserNewMessage = () => {
  return (
    <SectionNewMessage>
      <UserInput inputWidth="92%" placeholder="Write your message ..." />
      <UserButton
        buttonWidth="8%"
        buttonMargin="0 -4px 0 0"
        buttonHeight="40px"
        size="large"
        primary={true}
        icon={true}
      >
        <Icon name="send" />
      </UserButton>
    </SectionNewMessage>
  );
};

export default SectionUserNewMessage;
