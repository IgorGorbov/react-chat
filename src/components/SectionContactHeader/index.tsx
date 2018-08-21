import * as React from 'react';

import {
  SectionContactHeader as ContactHeader,
  ContactInfoContainer,
  UserAvatar,
  Text,
  UserButton,
} from '../../StyledComponents';

const src2 = 'https://emilcarlsson.se/assets/louislitt.png';

const SectionContactHeader = () => {
  return (
    <ContactHeader>
      <UserAvatar
        src={src2}
        size="tiny"
        circular={true}
        maxheight="65px"
        maxwidth="65px"
        bordersize="2px"
        bordercolor="grey"
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
        buttonwidth="40px"
        buttonmargin="0 10px 0 auto"
        buttonheight="35px"
        color="red"
        icon="user delete"
      />
    </ContactHeader>
  );
};

export default SectionContactHeader;
