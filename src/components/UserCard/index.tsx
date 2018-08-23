import * as React from 'react';
import {
  UserCardContainer,
  ImageContainer,
  UserAvatar,
  UserStatus,
  UserInfoContainer,
  UserName,
  TextMessage,
  NewCountMessage
} from '../../styledComponents'

const UserCard = (props: IUserCard): JSX.Element => {
  return (
    <UserCardContainer>
      <ImageContainer>
        <UserAvatar
          maxwidth="65px"
          maxheight="65px"
          bordersize="1px"
          bordercolor="white"
          src={props.avatar}
          size="tiny"
          circular={true}
        />
        <UserStatus />
      </ImageContainer>
      <UserInfoContainer>
        <UserName>{props.name}</UserName>
        <TextMessage>Lorem ipsum dolor sit amet.</TextMessage>
      </UserInfoContainer>
      <NewCountMessage>3</NewCountMessage>
    </UserCardContainer>
  );
};

export default UserCard;
