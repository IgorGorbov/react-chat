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
  const messages: IMessage[] = [
    {
      id: '1',
      from: 'Mike Ross',
      to: 'Louis Litt',
      text:
      'Lorem ipsum dolor sit amet, onsectetur adipisicing  onsectetur ' +
      'adipisicing consectetur adipisicing elit. Porro!',
      date: new Date().toDateString(),
      isRead: false,
    },
    {
      id: '2',
      from: 'Louis Litt',
      to: 'Mike Ross',
      text: 'Lorem ipsum dolor sit amet',
      date: new Date().toDateString(),
      isRead: false,
    },
    {
      id: '3',
      from: 'Mike Ross',
      to: 'Louis Litt',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro!',
      date: new Date().toDateString(),
      isRead: false,
    },
    {
      id: '4',
      from: 'Louis Litt',
      to: 'Mike Ross',
      text: 'Lorem ipsum dolor sit amet',
      date: new Date().toDateString(),
      isRead: false,
    },
    {
      id: '5',
      from: 'Mike Ross',
      to: 'Louis Litt',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro!',
      date: new Date().toDateString(),
      isRead: false,
    },
    {
      id: '6',
      from: 'Louis Litt',
      to: 'Mike Ross',
      text: 'Lorem ipsum dolor sit amet',
      date: new Date().toDateString(),
      isRead: false,
    },
    {
      id: '7',
      from: 'Mike Ross',
      to: 'Louis Litt',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro!',
      date: new Date().toDateString(),
      isRead: false,
    },
    {
      id: '8',
      from: 'Louis Litt',
      to: 'Mike Ross',
      text: 'Lorem ipsum dolor sit amet',
      date: new Date().toDateString(),
      isRead: false,
    },
    {
      id: '9',
      from: 'Mike Ross',
      to: 'Louis Litt',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro!',
      date: new Date().toDateString(),
      isRead: false,
    },
    {
      id: '10',
      from: 'Louis Litt',
      to: 'Mike Ross',
      text: 'Lorem ipsum dolor sit amet',
      date: new Date().toDateString(),
      isRead: false,
    },
  ];

  return (
    <GridLayout>
      <SectionContacts />
      <SectionContactHeader />
      <SectionMessagesList messages={messages} />
      <SectionUserNewMessage />
    </GridLayout>
  );
};

export default Chat;
