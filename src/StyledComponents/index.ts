import { Button, Image, Input } from 'semantic-ui-react';
import styled from 'styled-components';

export const SectionContactsList = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  grid-column: 1;
  grid-row-start: 1;
  grid-row-end: 4;
  background-color: #2f3e4e;
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

export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  margin: auto 0 0 0;
  align-self: center;
  padding: 0;
  & button {
    width: 50.5%;
    margin-right: -4px !important;
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

export const SectionMessagesList = styled.section`
  max-height: 550px;
  overflow-y: scroll;
  grid-column: 2;
  grid-row: 2;
  background-color: #e7eaea;
`;

export const SectionNewMessage = styled.section`
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
`;

export const MessageInfoContainer = styled.div`
  position: relative;
  max-width: 450px;
  align-self: flex-start;
  border-radius: 25px 25px;
  padding: 10px 10px 30px 10px;
  margin: 0 0 10px 20px;
  color: white;
  box-shadow: 0 10px 6px -6px #777;
  background-color: #6b7d91;
`;

export const MessageArrow = styled.span`
  display: block;
  position: absolute;
  top: 48%;
  left: -14px;
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 0 solid transparent;
  border-top: 20px solid #6b7d91;
`;

export const MessageDate = styled.span`
  display: block;
  position: absolute;
  bottom: 2px;
  right: 15px;
  font-size: 12px;
`;

export const UserListWrapper = styled.div`
  max-height: 480px;
  overflow-y: scroll;
`;
