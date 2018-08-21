import * as React from 'react';

import styled from 'styled-components';

import SectionContacts from '../SectionContacts';
import SectionContactHeader from '../SectionContactHeader';
import SectionMessagesList from '../../containers/SectionMessagesList';
import SectionUserNewMessage from '../../containers/SectionNewMessage';

export const GridLayout = styled.div`
  display: grid;
  margin: 80px auto 0 auto;
  width: 75%;
  grid-template-columns: 1fr 3fr;
  grid-auto-rows: minmax(20px, auto);
  background-color: #485f78;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

const Chat = (): JSX.Element => {
  return (
    <GridLayout>
      <SectionContacts />
      <SectionContactHeader />
      <SectionMessagesList />
      <SectionUserNewMessage />
    </GridLayout>
  );
};

export default Chat;
