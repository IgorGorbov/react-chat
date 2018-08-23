import * as React from 'react';
import { Icon } from 'semantic-ui-react';

import {
  SectionNewMessage,
  UserButton,
  UserInput,
} from '../../styledComponents';

const SectionUserNewMessage = () => {
  return (
    <SectionNewMessage>
      <UserInput inputwidth="92%" placeholder="Write your message ..." />
      <UserButton
        buttonwidth="8%"
        buttonmargin="0 -4px 0 0"
        buttonheight="40px"
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
