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
    status: StatusUser.Offline,
  },
  {
    id: 3,
    name: 'Louis Litt',
    avatar: 'https://emilcarlsson.se/assets/louislitt.png',
    status: StatusUser.Offline,
  },
  {
    id: 4,
    name: 'Mary R. Morales',
    avatar: 'https://emilcarlsson.se/assets/katrinabennett.png',
    status: StatusUser.Offline,
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
    status: StatusUser.Offline,
  },
  {
    id: 7,
    name: 'Cindy Lowe',
    avatar: 'https://emilcarlsson.se/assets/rachelzane.png',
    status: StatusUser.Offline,
  },
  {
    id: 8,
    name: 'Phillip Gilliam',
    avatar: 'https://emilcarlsson.se/assets/harveyspecter.png',
    status: StatusUser.Offline,
  },
  {
    id: 9,
    name: 'John Trottier',
    avatar: 'https://emilcarlsson.se/assets/charlesforstman.png',
    status: StatusUser.Offline,
  },
  {
    id: 10,
    name: 'Joseph Kelly',
    avatar: 'https://emilcarlsson.se/assets/haroldgunderson.png',
    status: StatusUser.Offline,
  },
];

const initChats = {
  '1': {
    id: 1,
    users: [
      {
        id: 1,
        name: 'Mike Ross',
        avatar: 'https://emilcarlsson.se/assets/mikeross.png',
        status: 'Offline',
      },
      {
        id: 2,
        name: 'Vincent Lash',
        avatar: 'https://emilcarlsson.se/assets/danielhardman.png',
        status: 'Offline',
      },
    ],
    messages: [
      {
        id: '2018-09-08T16:56:18.254Z',
        text: 'Hello!',
        from: {
          id: 1,
          name: 'Mike Ross',
          avatar: 'https://emilcarlsson.se/assets/mikeross.png',
          status: 'Online',
        },
        to: {
          id: 2,
          name: 'Vincent Lash',
          avatar: 'https://emilcarlsson.se/assets/danielhardman.png',
          status: 'Offline',
        },
        date: '8/9/18 - 19:56',
        deletedBy: [],
        isRead: false,
      },
      {
        id: '2018-09-08T16:58:02.176Z',
        text: 'Hello )',
        from: {
          id: 2,
          name: 'Vincent Lash',
          avatar: 'https://emilcarlsson.se/assets/danielhardman.png',
          status: 'Online',
        },
        to: {
          id: 1,
          name: 'Mike Ross',
          avatar: 'https://emilcarlsson.se/assets/mikeross.png',
          status: 'Online',
        },
        date: '8/9/18 - 19:58',
        deletedBy: [],
        isRead: false,
      },
      {
        id: '2018-09-08T16:58:18.476Z',
        text: 'How are you ?',
        from: {
          id: 1,
          name: 'Mike Ross',
          avatar: 'https://emilcarlsson.se/assets/mikeross.png',
          status: 'Online',
        },
        to: {
          id: 2,
          name: 'Vincent Lash',
          avatar: 'https://emilcarlsson.se/assets/danielhardman.png',
          status: 'Offline',
        },
        date: '8/9/18 - 19:58',
        deletedBy: [],
        isRead: false,
      },
      {
        id: '2018-09-08T16:59:16.859Z',
        text: "I'm ok. And you? 🤔",
        from: {
          id: 2,
          name: 'Vincent Lash',
          avatar: 'https://emilcarlsson.se/assets/danielhardman.png',
          status: 'Online',
        },
        to: {
          id: 1,
          name: 'Mike Ross',
          avatar: 'https://emilcarlsson.se/assets/mikeross.png',
          status: 'Online',
        },
        date: '8/9/18 - 19:59',
        deletedBy: [],
        isRead: false,
      },
      {
        id: '2018-09-08T16:59:37.936Z',
        text: "I'm super.",
        from: {
          id: 1,
          name: 'Mike Ross',
          avatar: 'https://emilcarlsson.se/assets/mikeross.png',
          status: 'Online',
        },
        to: {
          id: 2,
          name: 'Vincent Lash',
          avatar: 'https://emilcarlsson.se/assets/danielhardman.png',
          status: 'Offline',
        },
        date: '8/9/18 - 19:59',
        deletedBy: [],
        isRead: false,
      },
      {
        id: '2018-09-08T17:56:26.464Z',
        text: 'Hello 😁🤚',
        from: {
          id: 1,
          name: 'Mike Ross',
          avatar: 'https://emilcarlsson.se/assets/mikeross.png',
          status: 'Online',
        },
        to: {
          id: 2,
          name: 'Vincent Lash',
          avatar: 'https://emilcarlsson.se/assets/danielhardman.png',
          status: 'Online',
        },
        date: '8/9/18 - 20:56',
        deletedBy: [],
        isRead: false,
      },
      {
        id: '2018-09-08T17:56:31.422Z',
        text: 'Hi !',
        from: {
          id: 2,
          name: 'Vincent Lash',
          avatar: 'https://emilcarlsson.se/assets/danielhardman.png',
          status: 'Online',
        },
        to: {
          id: 1,
          name: 'Mike Ross',
          avatar: 'https://emilcarlsson.se/assets/mikeross.png',
          status: 'Online',
        },
        date: '8/9/18 - 20:56',
        deletedBy: [],
        isRead: false,
      },
    ],
  },
  '2': {
    id: 2,
    users: [
      {
        id: 1,
        name: 'Mike Ross',
        avatar: 'https://emilcarlsson.se/assets/mikeross.png',
        status: 'Offline',
      },
      {
        id: 3,
        name: 'Louis Litt',
        avatar: 'https://emilcarlsson.se/assets/louislitt.png',
        status: 'Offline',
      },
    ],
    messages: [
      {
        id: '2018-09-08T16:57:13.998Z',
        text: 'Hi 🤚',
        from: {
          id: 1,
          name: 'Mike Ross',
          avatar: 'https://emilcarlsson.se/assets/mikeross.png',
          status: 'Online',
        },
        to: {
          id: 3,
          name: 'Louis Litt',
          avatar: 'https://emilcarlsson.se/assets/louislitt.png',
          status: 'Offline',
        },
        date: '8/9/18 - 19:57',
        deletedBy: [],
        isRead: false,
      },
      {
        id: '2018-09-08T17:00:16.235Z',
        text: 'Hello !',
        from: {
          id: 3,
          name: 'Louis Litt',
          avatar: 'https://emilcarlsson.se/assets/louislitt.png',
          status: 'Online',
        },
        to: {
          id: 1,
          name: 'Mike Ross',
          avatar: 'https://emilcarlsson.se/assets/mikeross.png',
          status: 'Online',
        },
        date: '8/9/18 - 20:00',
        deletedBy: [],
        isRead: false,
      },
      {
        id: '2018-09-08T17:00:48.290Z',
        text: 'What are you doing ?',
        from: {
          id: 3,
          name: 'Louis Litt',
          avatar: 'https://emilcarlsson.se/assets/louislitt.png',
          status: 'Online',
        },
        to: {
          id: 1,
          name: 'Mike Ross',
          avatar: 'https://emilcarlsson.se/assets/mikeross.png',
          status: 'Online',
        },
        date: '8/9/18 - 20:00',
        deletedBy: [],
        isRead: false,
      },
    ],
  },
  '47': {
    id: 47,
    users: [
      {
        id: 1,
        name: 'Mike Ross',
        avatar: 'https://emilcarlsson.se/assets/mikeross.png',
        status: 'Online',
      },
      {
        id: 7,
        name: 'Cindy Lowe',
        avatar: 'https://emilcarlsson.se/assets/rachelzane.png',
        status: 'Offline',
      },
    ],
    messages: [
      {
        id: '2018-09-08T17:05:43.449Z',
        text: 'Hello, Cindy !',
        from: {
          id: 1,
          name: 'Mike Ross',
          avatar: 'https://emilcarlsson.se/assets/mikeross.png',
          status: 'Online',
        },
        to: {
          id: 7,
          name: 'Cindy Lowe',
          avatar: 'https://emilcarlsson.se/assets/rachelzane.png',
          status: 'Offline',
        },
        date: '8/9/18 - 20:05',
        deletedBy: [],
        isRead: false,
      },
    ],
  },
  '160': {
    id: 160,
    users: [
      {
        id: 2,
        name: 'Vincent Lash',
        avatar: 'https://emilcarlsson.se/assets/danielhardman.png',
        status: 'Online',
      },
      {
        id: 4,
        name: 'Mary R. Morales',
        avatar: 'https://emilcarlsson.se/assets/katrinabennett.png',
        status: 'Offline',
      },
    ],
    messages: [
      {
        id: '2018-09-08T17:07:22.730Z',
        text: 'Hello, Marry!',
        from: {
          id: 2,
          name: 'Vincent Lash',
          avatar: 'https://emilcarlsson.se/assets/danielhardman.png',
          status: 'Online',
        },
        to: {
          id: 4,
          name: 'Mary R. Morales',
          avatar: 'https://emilcarlsson.se/assets/katrinabennett.png',
          status: 'Offline',
        },
        date: '8/9/18 - 20:07',
        deletedBy: [],
        isRead: false,
      },
      {
        id: '2018-09-08T17:09:13.932Z',
        text: 'Hi, Vincent.',
        from: {
          id: 4,
          name: 'Mary R. Morales',
          avatar: 'https://emilcarlsson.se/assets/katrinabennett.png',
          status: 'Online',
        },
        to: {
          id: 2,
          name: 'Vincent Lash',
          avatar: 'https://emilcarlsson.se/assets/danielhardman.png',
          status: 'Online',
        },
        date: '8/9/18 - 20:09',
        deletedBy: [],
        isRead: false,
      },
    ],
  },
  '176': {
    id: 176,
    users: [
      {
        id: 1,
        name: 'Mike Ross',
        avatar: 'https://emilcarlsson.se/assets/mikeross.png',
        status: 'Online',
      },
      {
        id: 6,
        name: 'Carla Hines',
        avatar: 'https://emilcarlsson.se/assets/donnapaulsen.png',
        status: 'Offline',
      },
    ],
    messages: [
      {
        id: '2018-09-08T17:05:59.394Z',
        text: 'Hi, Carla !',
        from: {
          id: 1,
          name: 'Mike Ross',
          avatar: 'https://emilcarlsson.se/assets/mikeross.png',
          status: 'Online',
        },
        to: {
          id: 6,
          name: 'Carla Hines',
          avatar: 'https://emilcarlsson.se/assets/donnapaulsen.png',
          status: 'Offline',
        },
        date: '8/9/18 - 20:05',
        deletedBy: [],
        isRead: false,
      },
    ],
  },
  '240': {
    id: 240,
    users: [
      {
        id: 6,
        name: 'Carla Hines',
        avatar: 'https://emilcarlsson.se/assets/donnapaulsen.png',
        status: 'Online',
      },
      {
        id: 7,
        name: 'Cindy Lowe',
        avatar: 'https://emilcarlsson.se/assets/rachelzane.png',
        status: 'Offline',
      },
    ],
    messages: [
      {
        id: '2018-09-08T17:11:12.040Z',
        text: 'Hello 🤚',
        from: {
          id: 6,
          name: 'Carla Hines',
          avatar: 'https://emilcarlsson.se/assets/donnapaulsen.png',
          status: 'Online',
        },
        to: {
          id: 7,
          name: 'Cindy Lowe',
          avatar: 'https://emilcarlsson.se/assets/rachelzane.png',
          status: 'Offline',
        },
        date: '8/9/18 - 20:11',
        deletedBy: [],
        isRead: false,
      },
    ],
  },
  '243': {
    id: 243,
    users: [
      {
        id: 6,
        name: 'Carla Hines',
        avatar: 'https://emilcarlsson.se/assets/donnapaulsen.png',
        status: 'Online',
      },
      {
        id: 4,
        name: 'Mary R. Morales',
        avatar: 'https://emilcarlsson.se/assets/katrinabennett.png',
        status: 'Offline',
      },
    ],
    messages: [
      {
        id: '2018-09-08T17:11:19.689Z',
        text: 'Hi !',
        from: {
          id: 6,
          name: 'Carla Hines',
          avatar: 'https://emilcarlsson.se/assets/donnapaulsen.png',
          status: 'Online',
        },
        to: {
          id: 4,
          name: 'Mary R. Morales',
          avatar: 'https://emilcarlsson.se/assets/katrinabennett.png',
          status: 'Offline',
        },
        date: '8/9/18 - 20:11',
        deletedBy: [],
        isRead: false,
      },
    ],
  },
  '351': {
    id: 351,
    users: [
      {
        id: 1,
        name: 'Mike Ross',
        avatar: 'https://emilcarlsson.se/assets/mikeross.png',
        status: 'Online',
      },
      {
        id: 8,
        name: 'Phillip Gilliam',
        avatar: 'https://emilcarlsson.se/assets/harveyspecter.png',
        status: 'Offline',
      },
    ],
    messages: [
      {
        id: '2018-09-08T17:06:44.945Z',
        text: 'Good evening, Phillip !',
        from: {
          id: 1,
          name: 'Mike Ross',
          avatar: 'https://emilcarlsson.se/assets/mikeross.png',
          status: 'Online',
        },
        to: {
          id: 8,
          name: 'Phillip Gilliam',
          avatar: 'https://emilcarlsson.se/assets/harveyspecter.png',
          status: 'Offline',
        },
        date: '8/9/18 - 20:06',
        deletedBy: [],
        isRead: false,
      },
    ],
  },
  '402': {
    id: 402,
    users: [
      {
        id: 5,
        name: 'Justin Ingram',
        avatar: 'https://emilcarlsson.se/assets/jonathansidwell.png',
        status: 'Online',
      },
      {
        id: 10,
        name: 'Joseph Kelly',
        avatar: 'https://emilcarlsson.se/assets/haroldgunderson.png',
        status: 'Offline',
      },
    ],
    messages: [
      {
        id: '2018-09-08T17:10:36.454Z',
        text: 'Hi 😁🤔',
        from: {
          id: 5,
          name: 'Justin Ingram',
          avatar: 'https://emilcarlsson.se/assets/jonathansidwell.png',
          status: 'Online',
        },
        to: {
          id: 10,
          name: 'Joseph Kelly',
          avatar: 'https://emilcarlsson.se/assets/haroldgunderson.png',
          status: 'Offline',
        },
        date: '8/9/18 - 20:10',
        deletedBy: [],
        isRead: false,
      },
    ],
  },
  '406': {
    id: 406,
    users: [
      {
        id: 1,
        name: 'Mike Ross',
        avatar: 'https://emilcarlsson.se/assets/mikeross.png',
        status: 'Online',
      },
      {
        id: 5,
        name: 'Justin Ingram',
        avatar: 'https://emilcarlsson.se/assets/jonathansidwell.png',
        status: 'Offline',
      },
    ],
    messages: [
      {
        id: '2018-09-08T17:10:01.483Z',
        text: 'Hi, Mike!',
        from: {
          id: 5,
          name: 'Justin Ingram',
          avatar: 'https://emilcarlsson.se/assets/jonathansidwell.png',
          status: 'Online',
        },
        to: {
          id: 1,
          name: 'Mike Ross',
          avatar: 'https://emilcarlsson.se/assets/mikeross.png',
          status: 'Online',
        },
        date: '8/9/18 - 20:10',
        deletedBy: [],
        isRead: false,
      },
    ],
  },
  '512': {
    id: 512,
    users: [
      {
        id: 2,
        name: 'Vincent Lash',
        avatar: 'https://emilcarlsson.se/assets/danielhardman.png',
        status: 'Online',
      },
      {
        id: 9,
        name: 'John Trottier',
        avatar: 'https://emilcarlsson.se/assets/charlesforstman.png',
        status: 'Offline',
      },
    ],
    messages: [
      {
        id: '2018-09-08T17:07:35.104Z',
        text: 'Hi, John.',
        from: {
          id: 2,
          name: 'Vincent Lash',
          avatar: 'https://emilcarlsson.se/assets/danielhardman.png',
          status: 'Online',
        },
        to: {
          id: 9,
          name: 'John Trottier',
          avatar: 'https://emilcarlsson.se/assets/charlesforstman.png',
          status: 'Offline',
        },
        date: '8/9/18 - 20:07',
        deletedBy: [],
        isRead: false,
      },
    ],
  },
  '560': {
    id: 560,
    users: [
      {
        id: 8,
        name: 'Phillip Gilliam',
        avatar: 'https://emilcarlsson.se/assets/harveyspecter.png',
        status: 'Online',
      },
      {
        id: 10,
        name: 'Joseph Kelly',
        avatar: 'https://emilcarlsson.se/assets/haroldgunderson.png',
        status: 'Offline',
      },
    ],
    messages: [
      {
        id: '2018-09-08T17:12:36.951Z',
        text: 'Hello !',
        from: {
          id: 8,
          name: 'Phillip Gilliam',
          avatar: 'https://emilcarlsson.se/assets/harveyspecter.png',
          status: 'Online',
        },
        to: {
          id: 10,
          name: 'Joseph Kelly',
          avatar: 'https://emilcarlsson.se/assets/haroldgunderson.png',
          status: 'Offline',
        },
        date: '8/9/18 - 20:12',
        deletedBy: [],
        isRead: false,
      },
    ],
  },
  '663': {
    id: 663,
    users: [
      {
        id: 5,
        name: 'Justin Ingram',
        avatar: 'https://emilcarlsson.se/assets/jonathansidwell.png',
        status: 'Online',
      },
      {
        id: 9,
        name: 'John Trottier',
        avatar: 'https://emilcarlsson.se/assets/charlesforstman.png',
        status: 'Offline',
      },
    ],
    messages: [
      {
        id: '2018-09-08T17:10:17.777Z',
        text: 'Hello.',
        from: {
          id: 5,
          name: 'Justin Ingram',
          avatar: 'https://emilcarlsson.se/assets/jonathansidwell.png',
          status: 'Online',
        },
        to: {
          id: 9,
          name: 'John Trottier',
          avatar: 'https://emilcarlsson.se/assets/charlesforstman.png',
          status: 'Offline',
        },
        date: '8/9/18 - 20:10',
        deletedBy: [],
        isRead: false,
      },
    ],
  },
  '667': {
    id: 667,
    users: [
      {
        id: 1,
        name: 'Mike Ross',
        avatar: 'https://emilcarlsson.se/assets/mikeross.png',
        status: 'Online',
      },
      {
        id: 4,
        name: 'Mary R. Morales',
        avatar: 'https://emilcarlsson.se/assets/katrinabennett.png',
        status: 'Offline',
      },
    ],
    messages: [
      {
        id: '2018-09-08T17:08:24.597Z',
        text: 'Hello!😀',
        from: {
          id: 4,
          name: 'Mary R. Morales',
          avatar: 'https://emilcarlsson.se/assets/katrinabennett.png',
          status: 'Online',
        },
        to: {
          id: 1,
          name: 'Mike Ross',
          avatar: 'https://emilcarlsson.se/assets/mikeross.png',
          status: 'Online',
        },
        date: '8/9/18 - 20:08',
        deletedBy: [],
        isRead: false,
      },
    ],
  },
  '674': {
    id: 674,
    users: [
      {
        id: 6,
        name: 'Carla Hines',
        avatar: 'https://emilcarlsson.se/assets/donnapaulsen.png',
        status: 'Online',
      },
      {
        id: 9,
        name: 'John Trottier',
        avatar: 'https://emilcarlsson.se/assets/charlesforstman.png',
        status: 'Offline',
      },
    ],
    messages: [
      {
        id: '2018-09-08T17:11:25.131Z',
        text: 'Hi )',
        from: {
          id: 6,
          name: 'Carla Hines',
          avatar: 'https://emilcarlsson.se/assets/donnapaulsen.png',
          status: 'Online',
        },
        to: {
          id: 9,
          name: 'John Trottier',
          avatar: 'https://emilcarlsson.se/assets/charlesforstman.png',
          status: 'Offline',
        },
        date: '8/9/18 - 20:11',
        deletedBy: [],
        isRead: false,
      },
    ],
  },
  '789': {
    id: 789,
    users: [
      {
        id: 7,
        name: 'Cindy Lowe',
        avatar: 'https://emilcarlsson.se/assets/rachelzane.png',
        status: 'Online',
      },
      {
        id: 3,
        name: 'Louis Litt',
        avatar: 'https://emilcarlsson.se/assets/louislitt.png',
        status: 'Offline',
      },
    ],
    messages: [
      {
        id: '2018-09-08T17:11:58.912Z',
        text: 'Hi !',
        from: {
          id: 7,
          name: 'Cindy Lowe',
          avatar: 'https://emilcarlsson.se/assets/rachelzane.png',
          status: 'Online',
        },
        to: {
          id: 3,
          name: 'Louis Litt',
          avatar: 'https://emilcarlsson.se/assets/louislitt.png',
          status: 'Offline',
        },
        date: '8/9/18 - 20:11',
        deletedBy: [],
        isRead: false,
      },
    ],
  },
  '861': {
    id: 861,
    users: [
      {
        id: 2,
        name: 'Vincent Lash',
        avatar: 'https://emilcarlsson.se/assets/danielhardman.png',
        status: 'Online',
      },
      {
        id: 3,
        name: 'Louis Litt',
        avatar: 'https://emilcarlsson.se/assets/louislitt.png',
        status: 'Offline',
      },
    ],
    messages: [
      {
        id: '2018-09-08T17:07:56.422Z',
        text: 'Hello, Louis.',
        from: {
          id: 2,
          name: 'Vincent Lash',
          avatar: 'https://emilcarlsson.se/assets/danielhardman.png',
          status: 'Online',
        },
        to: {
          id: 3,
          name: 'Louis Litt',
          avatar: 'https://emilcarlsson.se/assets/louislitt.png',
          status: 'Offline',
        },
        date: '8/9/18 - 20:07',
        deletedBy: [],
        isRead: false,
      },
    ],
  },
  '883': {
    id: 883,
    users: [
      {
        id: 8,
        name: 'Phillip Gilliam',
        avatar: 'https://emilcarlsson.se/assets/harveyspecter.png',
        status: 'Online',
      },
      {
        id: 4,
        name: 'Mary R. Morales',
        avatar: 'https://emilcarlsson.se/assets/katrinabennett.png',
        status: 'Offline',
      },
    ],
    messages: [
      {
        id: '2018-09-08T17:12:29.987Z',
        text: 'Hi 🤔',
        from: {
          id: 8,
          name: 'Phillip Gilliam',
          avatar: 'https://emilcarlsson.se/assets/harveyspecter.png',
          status: 'Online',
        },
        to: {
          id: 4,
          name: 'Mary R. Morales',
          avatar: 'https://emilcarlsson.se/assets/katrinabennett.png',
          status: 'Offline',
        },
        date: '8/9/18 - 20:12',
        deletedBy: [],
        isRead: false,
      },
    ],
  },
  '966': {
    id: 966,
    users: [
      {
        id: 6,
        name: 'Carla Hines',
        avatar: 'https://emilcarlsson.se/assets/donnapaulsen.png',
        status: 'Online',
      },
      {
        id: 10,
        name: 'Joseph Kelly',
        avatar: 'https://emilcarlsson.se/assets/haroldgunderson.png',
        status: 'Offline',
      },
    ],
    messages: [
      {
        id: '2018-09-08T17:11:36.458Z',
        text: '😈',
        from: {
          id: 6,
          name: 'Carla Hines',
          avatar: 'https://emilcarlsson.se/assets/donnapaulsen.png',
          status: 'Online',
        },
        to: {
          id: 10,
          name: 'Joseph Kelly',
          avatar: 'https://emilcarlsson.se/assets/haroldgunderson.png',
          status: 'Offline',
        },
        date: '8/9/18 - 20:11',
        deletedBy: [],
        isRead: false,
      },
    ],
  },
};

module.exports = {
  initUsers,
  initChats,
};
