enum StatusUser {
  Online = 'Online',
  Offline = 'Offline',
  Away = 'Away',
  Busy = 'Busy',
}

const initUsers = [
  {
    id: 1,
    name: `Mike Ross`,
    avatar: 'https://emilcarlsson.se/assets/mikeross.png',
    status: StatusUser.Offline,
  },
  {
    id: 2,
    name: 'Vincent Lash',
    avatar: 'https://emilcarlsson.se/assets/danielhardman.png',
    status: StatusUser.Online,
  },
  {
    id: 3,
    name: 'Louis Litt',
    avatar: 'https://emilcarlsson.se/assets/louislitt.png',
    status: StatusUser.Away,
  },
  {
    id: 4,
    name: 'Mary R. Morales',
    avatar: 'https://emilcarlsson.se/assets/katrinabennett.png',
    status: StatusUser.Busy,
  },
  {
    id: 5,
    name: 'Justin Ingram',
    avatar: 'https://emilcarlsson.se/assets/jonathansidwell.png',
    status: StatusUser.Offline,
  },
  {
    id: 6,
    name: 'Carla Hines',
    avatar: 'https://emilcarlsson.se/assets/donnapaulsen.png',
    status: StatusUser.Online,
  },
  {
    id: 7,
    name: 'Cindy Lowe',
    avatar: 'https://emilcarlsson.se/assets/rachelzane.png',
    status: StatusUser.Online,
  },
  {
    id: 8,
    name: 'Phillip Gilliam',
    avatar: 'https://emilcarlsson.se/assets/harveyspecter.png',
    status: StatusUser.Away,
  },
  {
    id: 9,
    name: 'John Trottier',
    avatar: 'https://emilcarlsson.se/assets/charlesforstman.png',
    status: StatusUser.Online,
  },
  {
    id: 10,
    name: 'Joseph Kelly',
    avatar: 'https://emilcarlsson.se/assets/haroldgunderson.png',
    status: StatusUser.Busy,
  },
];

const initChats = {
  1: {
    id: 1,
    users: [
      {
        id: 1,
        name: `Mike Ross`,
        avatar: 'https://emilcarlsson.se/assets/mikeross.png',
        status: StatusUser.Offline,
      },
      {
        id: 2,
        name: 'Vincent Lash',
        avatar: 'https://emilcarlsson.se/assets/danielhardman.png',
        status: StatusUser.Offline,
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
          avatar: 'https://emilcarlsson.se/assets/mikeross.png',
          status: StatusUser.Offline,
        },
        to: {
          id: 2,
          name: 'Vincent Lash',
          avatar: 'https://emilcarlsson.se/assets/danielhardman.png',
          status: StatusUser.Online,
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
          status: StatusUser.Online,
        },
        to: {
          id: 1,
          name: `Mike Ross`,
          avatar: 'https://emilcarlsson.se/assets/mikeross.png',
          status: StatusUser.Offline,
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
        avatar: 'https://emilcarlsson.se/assets/mikeross.png',
        status: StatusUser.Offline,
      },
      {
        id: 3,
        name: 'Louis Litt',
        avatar: 'https://emilcarlsson.se/assets/louislitt.png',
        status: StatusUser.Away,
      },
    ],
    messages: [],
  },
};

module.exports = {
  initUsers,
  initChats,
};
