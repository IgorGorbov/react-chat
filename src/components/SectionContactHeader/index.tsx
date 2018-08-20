import * as React from 'react';

import {
  SectionContactHeader,
  ContactInfoContainer,
  UserAvatar,
  Text,
  UserButton,
} from '../../StyledComponents';

const src2 = 'https://emilcarlsson.se/assets/louislitt.png';

const ContactHeader = () => {
  return (
    <SectionContactHeader>
      <UserAvatar
        src={src2}
        size="tiny"
        circular={true}
        maxHeight="65px"
        maxWidth="65px"
        borderSize="2px"
        borderColor="grey"
        cursor="false"
      />
      <ContactInfoContainer>
        <Text
          textColor="#000"
          textSize="20px"
          textLineHeight="1"
          textWeight="500"
          textFontFamily="Titillium Web"
        >
          Louis Litt
        </Text>
        <Text
          textColor="green"
          textSize="14px"
          textLineHeight="1"
          textWeight="500"
          textFontFamily="Titillium Web"
        >
          Online
        </Text>
      </ContactInfoContainer>
      <UserButton
        buttonWidth="40px"
        buttonMargin="0 10px 0 auto"
        buttonHeight="35px"
        color="red"
        icon="user delete"
      />
    </SectionContactHeader>
  );
};

export default ContactHeader;
