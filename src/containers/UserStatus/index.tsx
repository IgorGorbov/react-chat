import * as React from 'react';
import styled from 'styled-components';

const UserStatusContainer = styled.div`
  //display: flex;
  display: none;
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
const RadioInput = styled.input`
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

class UserStatus extends React.Component {
  public render() {
    return (
      <UserStatusContainer>
        <RadioInput
          className="online"
          type="radio"
          id="r1"
          name="status"
          defaultChecked={true}
        />
        <label htmlFor="r1">Online</label>

        <RadioInput className="away" type="radio" id="r2" name="status" />
        <label htmlFor="r2">Away</label>

        <RadioInput className="busy" type="radio" id="r3" name="status" />
        <label htmlFor="r3">Busy</label>

        <RadioInput className="offline" type="radio" id="r4" name="status" />
        <label htmlFor="r4">Offline</label>
      </UserStatusContainer>
    );
  }
}

export default UserStatus;
