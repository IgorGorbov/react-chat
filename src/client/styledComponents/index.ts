import { Button, Image, Input } from 'semantic-ui-react';
import styled from 'styled-components';

export const GridLayout = styled.div`
  display: grid;
  min-height: 550px;
  margin: 80px auto 0 auto;
  width: 230px;
  grid-template-columns: 1fr 3fr;
  grid-auto-rows: minmax(20px, auto);
  background-color: #485f78;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  transition: width 0.25s linear;
  &.withChat {
    width: 75%;
  }
`;

export const SectionContactsList = styled.section`
  display: flex;
  min-width: 230px;
  position: relative;
  flex-direction: column;
  grid-column: 1;
  grid-row-start: 1;
  grid-row-end: 4;
  background-color: #2f3e4e;
`;

export const AddUserButton = styled(Button)`
  display: flex;
  margin: auto 0 0 0 !important;
  padding: 0;
  margin-right: 2px !important;
  width: 99.9% !important;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 0 20px 30px;
`;

export const UserAvatar = styled(Image)`
  max-height: ${props => props.maxheight};
  max-width: ${props => props.maxwidth} !important;
  border: ${props => props.bordersize} solid ${props => props.bordercolor};
  cursor: ${props => props.cursor};
  align-self: center;
`;

export const Text = styled.span`
  color: ${(props: ITextProps) => props.textColor};
  font-size: ${(props: ITextProps) => props.textSize};
  font-weight: ${(props: ITextProps) => props.textWeight};
  margin-left: 10px;
  align-self: center;
  line-height: ${(props: ITextProps) => props.textLineHeight};
  font-family: ${(props: ITextProps) => props.textFontFamily}, sans-serif;
`;

export const UserInput = styled(Input)`
  width: ${props => props.inputwidth};
  padding: 0 1px;
  input {
    color: ${props => props.inputcolor} !important;
    background-color: ${props => props.inputbgc} !important;
  }
`;

export const SectionContactHeader = styled.section`
  grid-column: 2;
  grid-row: 1;
  display: flex;
  padding-left: 20px;
  height: 90px;
  max-height: 110px;
  background-color: #fff;
`;

export const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const UserButton = styled(Button)`
  align-self: center;
  width: ${props => props.buttonwidth};
  height: ${props => props.buttonheight};
  margin: ${props => props.buttonmargin} !important;
`;

export const MessagesList = styled.section`
  max-height: 550px;
  min-height: 550px;
  overflow-y: scroll;
  overflow-x: hidden;
  grid-column: 2;
  grid-row: 2;
  background-color: #e7eaea;
`;

export const SectionNewMessage = styled.section`
  position: relative;
  grid-column: 2;
  grid-row: 3;
  max-height: 40px;
  width: 100%;
  display: flex;
  padding: 0;
  margin: 0;
  background-color: #ffffff;
`;

export const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  margin-bottom: 10px;
  &.isMessageTo {
    flex-direction: row-reverse;
  }
`;

export const MessageInfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  max-width: 280px;
  min-width: 120px;
  min-height: 60px;
  border-radius: 25px 25px;
  padding: 10px 10px 12px 10px;
  margin: 0 0 10px 20px;
  color: white;
  box-shadow: 0 10px 6px -6px #777;
  background-color: #6b7d91;
  transition: all 0.35s ease;
  &.isMessageTo {
    background-color: #3f85ca;
    margin: 0 20px 10px 20px;
  }
  &.isSelected {
    transform: scale(1.1);
    background-color: #960cff;
  }
`;

export const MessageArrow = styled.span`
  display: block;
  position: absolute;
  top: 48%;
  left: -14px;
  right: unset;
  transform: rotate(90deg);
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 0 solid transparent;
  border-top: 20px solid #6b7d91;
  transition: all 0.35s ease;
  &.isMessageTo {
    left: unset;
    right: -14px;
    transform: rotate(180deg);
    border-top: 20px solid #3f85ca;
  }
  &.isSelected {
    border-top: 20px solid #960cff;
  }
`;

export const TextMessage = styled.p`
  display: flex;
  font-size: 15px;
  margin-left: auto;
  margin-right: auto;
  hyphens: auto;
  color: white;
  font-weight: 300;
`;

export const MessageDate = styled.span`
  display: flex;
  position: absolute;
  bottom: 2px;
  right: 8px;
  font-size: 12px;
  width: 90px;
`;

export const UserListWrapper = styled.div`
  max-height: 480px;
  overflow-y: scroll;
`;

export const UserCardContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  padding: 10px 20px;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #364658;
  }
  &.active {
    background-color: #1d1d1d;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
`;

export const UserStatus = styled.span`
  display: block;
  position: absolute;
  top: 3px;
  left: 0;
  border-radius: 50% 50%;
  background-color: ${props => props.color};
  width: 14px;
  height: 14px;
  z-index: 10;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: white;
  margin-left: 10px;
  font-family: Roboto, sans-serif;
`;

export const UserName = styled.p`
  display: inline-block;
  width: 100%;
  padding: 0;
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  align-self: center;
`;

export const NewCountMessage = styled.p`
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

export const UserStatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 115px;
  left: 10px;
  width: 150px;
  height: 160px;
  z-index: 20;
  background-color: #485f78;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);

  &:before {
    content: '';
    position: absolute;
    display: block;
    left: 50px;
    top: -10px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #485f78;
  }
`;

/* tslint:disable: max-line-length */
export const RadioInput = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
  margin: 10px 0 0 7px;

  & + label {
    position: relative;
    padding: 10px 0 10px 55px;
    cursor: pointer;
    color: white;
    font-family: Titillium Web, sans-serif;
    font-size: 15px;
    transition: background-color 0.3s ease;
  }

  & + label:hover {
    background-color: #32465a;
  }

  & + label:before {
    content: '';
    position: absolute;
    top: 13px;
    left: 15px;
    width: 14px;
    height: 14px;
    border: 1px solid #485f78;
    border-radius: 50%;
    background: green;
  }

  & + label:after {
    content: '';
    position: absolute;
    top: 16px;
    left: 17px;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    opacity: 0;
    transition: 0.3s ease;
  }

  &:checked + label:after {
    opacity: 1;
  }
  &:focus + label:before {
    box-shadow: 0 0 0 2px rgba(72, 95, 120, 0.9), 0 0 0 4px rgba(0, 128, 0, 1);
  }

  &.busy + label:before {
    background: red;
  }

  &.busy:focus + label:before {
    box-shadow: 0 0 0 2px rgba(72, 95, 120, 0.9), 0 0 0 4px rgba(255, 0, 0, 0.8);
  }

  &.away + label:before {
    background: yellow;
  }

  &.away:focus + label:before {
    box-shadow: 0 0 0 2px rgba(72, 95, 120, 0.9),
      0 0 0 4px rgba(255, 255, 0, 0.9);
  }

  &.offline + label:before {
    background: #e7eaea;
  }

  &.offline:focus + label:before {
    box-shadow: 0 0 0 2px rgba(72, 95, 120, 0.9),
      0 0 0 4px rgba(231, 234, 234, 0.9);
  }
`;
