// tslint: disable
import { defaultAvatar, Status } from './constants/user';

const users = [
  {
    id: 1,
    name: `Mike Ross`,
    avatar: 'https://emilcarlsson.se/assets/mikeross.png',
    status: Status.Offline
  },
  {
  id: 2,
    name: 'Vincent Lash',
  avatar: 'https://emilcarlsson.se/assets/danielhardman.png',
  status: Status.Online,
  },
  {
    id: 3,
      name: 'Louis Litt',
    avatar: 'https://emilcarlsson.se/assets/louislitt.png',
    status: Status.Away,
  },
  {
    id: 4,
      name: 'Mary R. Morales',
    avatar: 'https://emilcarlsson.se/assets/katrinabennett.png',
    status: Status.Busy,
  },
  {
    id: 5,
      name: 'Justin Ingram',
    avatar: 'https://emilcarlsson.se/assets/jonathansidwell.png',
    status: Status.Offline,
  },
  {
    id: 6,
      name: 'Carla Hines',
    avatar: 'https://emilcarlsson.se/assets/donnapaulsen.png',
    status: Status.Online,
  },
  {
    id: 7,
      name: 'Cindy Lowe',
    avatar: 'https://emilcarlsson.se/assets/rachelzane.png',
    status: Status.Online,
  },
  {
    id: 8,
      name: 'Phillip Gilliam',
    avatar: 'https://emilcarlsson.se/assets/harveyspecter.png',
    status: Status.Away,
  },
  {
    id: 9,
      name: 'John Trottier',
    avatar: 'https://emilcarlsson.se/assets/charlesforstman.png',
    status: Status.Online,
  },
  {
    id: 10,
      name: 'Joseph Kelly',
    avatar: 'https://emilcarlsson.se/assets/haroldgunderson.png',
    status: Status.Busy,
  }
];


export const chats = {
  1: {
    id: 1,
    users: [
      {
        id: 1,
        name: `Mike Ross`,
        avatar: defaultAvatar,
        status: Status.Offline,
      },
      {
        id: 2,
        name: 'Vincent Lash',
        avatar: 'https://emilcarlsson.se/assets/danielhardman.png',
        status: Status.Offline,
      },
    ],
    messages: [
      {
        id: 1,
        text: 'Hello!',
        deletedBy: [],
        from: {
          id: 1,
          name: `Mike Ross`,
          avatar: defaultAvatar,
          status: Status.Offline,
        },
        to: {
          id: 2,
          name: 'Vincent Lash',
          avatar: 'https://emilcarlsson.se/assets/danielhardman.png',
          status: Status.Online,
        },
        date: '16:15',
        isRead: false,
      },
      {
        id: 2,
        text: 'Hi!',
        deletedBy: [],
        from: {
          id: 2,
          name: 'Vincent Lash',
          avatar: 'https://emilcarlsson.se/assets/danielhardman.png',
          status: Status.Online,
        },
        to: {
          id: 1,
          name: `Mike Ross`,
          avatar: defaultAvatar,
          status: Status.Offline,
        },
        date: '16:25',
        isRead: false,
      },
    ],
  },

  2: {
    id: 2,
    users: [
      {
        id: 1,
        name: `Mike Ross`,
        avatar: defaultAvatar,
        status: Status.Offline,
      },
      {
        id: 3,
        name: 'Louis Litt',
        avatar: 'https://emilcarlsson.se/assets/louislitt.png',
        status: Status.Away,
      },
    ],
    messages: [],
  },
};

export default users;
