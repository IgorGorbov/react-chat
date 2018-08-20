import * as React from 'react';
import styled from 'styled-components';
import { UserAvatar } from '../../StyledComponents';

const UserCardContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #364658;
  }
`;

const ImageContainer = styled.div`
  position: relative;
`;

const UserStatus = styled.span`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50% 50%;
  background-color: green;
  width: 15px;
  height: 15px;
  z-index: 10;
`;

const UserInfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: white;
  margin-left: 10px;
  font-family: Roboto, sans-serif;
`;

const UserName = styled.p`
  display: inline-block;
  width: 100%;
  padding: 0;
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  align-self: center;
`;

const TextMessage = styled.p`
  display: inline-block;
  flex: 1;
  color: white;
  font-weight: 300;
`;

const NewCountMessage = styled.p`
  position: absolute;
  display: flex;
  justify-content: center;
  align-content: center;
  right: 6px;
  top: 50%;
  border-radius: 50% 50%;
  width: 20px;
  height: auto;
  background-color: #c5e4f9;
  color: black;
  z-index: 20;
  transform: translate(0, -50%);
`;

const UserCard = (props: IUserCard): JSX.Element => {
  return (
    <UserCardContainer>
      <ImageContainer>
        <UserAvatar
          maxWidth="65px"
          maxHeight="65px"
          borderSize="1px"
          borderColor="white"
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
