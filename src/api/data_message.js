const arnold = {
  id: 2,
  name: 'Arnold',
  img: require('../../assets/contacts/arnold.jpg'),
};
const alice = {
  id: 3,
  name: 'Alice Freeman',
  img: require('../../assets/contacts/alice.jpg'),
};
const barrera = {
  id: 4,
  name: 'Barrera',
  img: require('../../assets/contacts/barrera.jpg'),
};

export const data = [
  {
    id: arnold.id,
    img: arnold.img,
    name: arnold.name,
    messages: [
      {
        _id: 3,
        text: 'We are losing money! Quick!',
        createdAt: new Date(2019, 2, 21, 22, 10, 0),
        user: {
          _id: arnold.id,
          name: arnold.name,
          avatar: arnold.img,
        },
      },
      {
        _id: 2,
        text: 'I’m having breakfast right now, can’t you wait for 10 minutes?',
        createdAt: new Date(2019, 2, 21, 22, 5, 0),
        user: {
          _id: 1,
        },
      },
      {
        _id: 1,
        text: 'Quickly come to the meeting room 1B, we have a big server issue',
        createdAt: new Date(2019, 2, 21, 22, 0, 0),
        user: {
          _id: arnold.id,
          name: arnold.name,
          avatar: arnold.img,
        },
      },
    ],
  },
  {
    id: alice.id,
    img: alice.img,
    name: alice.name,
    messages: [
      {
        _id: 10,
        text:
          'It’s not my money, you know. I will eat my breakfast and then I will come to the meeting room.',
        createdAt: new Date(2019, 2, 22, 6, 20, 28),
        user: {
          _id: 1,
        },
      },
      {
        _id: 9,
        text: 'We are losing money! Quick!',
        createdAt: new Date(2019, 2, 22, 6, 17, 28),
        user: {
          _id: alice.id,
          name: alice.name,
          avatar: alice.img,
        },
      },
      {
        _id: 8,
        text: 'You are the worst!',
        createdAt: new Date(2019, 2, 22, 6, 17, 28),
        user: {
          _id: alice.id,
          name: alice.name,
          avatar: alice.img,
        },
      },
      {
        _id: 7,
        text: 'We are losing money! Quick!',
        createdAt: new Date(2019, 2, 22, 6, 17, 28),
        user: {
          _id: alice.id,
          name: alice.name,
          avatar: alice.img,
        },
      },
      {
        _id: 6,
        text: 'You are the worst!',
        createdAt: new Date(2019, 2, 22, 6, 17, 28),
        user: {
          _id: alice.id,
          name: alice.name,
          avatar: alice.img,
        },
      },
      {
        _id: 5,
        text:
          'It’s not my money, you know. I will eat my breakfast and then I will come to the meeting room.',
        createdAt: new Date(2019, 2, 22, 6, 2, 28),
        user: {
          _id: 1,
        },
      },
      {
        _id: 4,
        text: 'We are losing money! Quick!',
        createdAt: new Date(2019, 2, 22, 6, 0, 28),
        user: {
          _id: alice.id,
          name: alice.name,
          avatar: alice.img,
        },
      },
      {
        _id: 3,
        text: 'I’m having breakfast right now, can’t you wait for 10 minutes?',
        createdAt: new Date(2019, 2, 22, 5, 56, 28),
        user: {
          _id: 1,
        },
      },
      {
        _id: 2,
        text: 'I’m having breakfast right now, can’t you wait for 10 minutes?',
        createdAt: new Date(2019, 2, 22, 5, 56, 28),
        user: {
          _id: 1,
        },
      },
      {
        _id: 1,
        text: 'Quickly come to the meeting room 1B, we have a big server issue',
        createdAt: new Date(2019, 2, 22, 5, 24, 28),
        user: {
          _id: alice.id,
          name: alice.name,
          avatar: alice.img,
        },
      },
    ],
  },
  {
    id: 4,
    img: barrera.img,
    name: barrera.name,
    messages: [
      {
        _id: 1,
        text: 'Quickly come to the meeting room 1B, we have a big server issue',
        createdAt: new Date(2001, 3, 21, 11, 10, 0),
        user: {
          _id: barrera.id,
          name: barrera.name,
          avatar: barrera.img,
        },
      },
    ],
  },
];
