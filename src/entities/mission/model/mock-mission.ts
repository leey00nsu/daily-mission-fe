import { Mission } from '@/entities/mission/model/type';

export const ALL_MISSIONS: Mission[] = [
  {
    id: 1,
    startDate: '2024-09-01',
    endDate: '2024-09-02',
    imgUrl: 'https://placehold.co/600?text=Mission1',
    title: '미션 1 제목',
    content: '미션1 설명',
    missionRuleResponseDto: {
      week: {
        mon: true,
        tue: false,
        wed: true,
        thu: false,
        fri: true,
        sat: false,
        sun: true,
      },
      deleted: false,
    },
    name: 'John Doe',
    participantDto: [
      {
        id: 1,
        userName: 'John Doe',
        imgUrl: 'https://example.com/user1.jpg',
        banned: false,
      },
    ],
    credential: 'test-credential',
    ended: false,
  },
  {
    id: 2,
    startDate: '2024-09-03',
    endDate: '2024-09-04',
    imgUrl: 'https://placehold.co/600?text=Mission2',
    title: '미션 2 제목',
    content: '미션2 설명',
    missionRuleResponseDto: {
      week: {
        mon: true,
        tue: false,
        wed: true,
        thu: false,
        fri: true,
        sat: false,
        sun: true,
      },
      deleted: false,
    },
    name: 'John Doe',
    participantDto: [
      {
        id: 1,
        userName: 'John Doe',
        imgUrl: 'https://example.com/user1.jpg',
        banned: false,
      },
    ],
    credential: 'test-credential',
    ended: false,
  },
  {
    id: 3,
    startDate: '2024-09-05',
    endDate: '2024-09-06',
    imgUrl: 'https://placehold.co/600?text=Mission3',
    title: '미션 3 제목',
    content: '미션3 설명',
    missionRuleResponseDto: {
      week: {
        mon: true,
        tue: false,
        wed: true,
        thu: false,
        fri: true,
        sat: false,
        sun: true,
      },
      deleted: false,
    },
    name: 'John Doe',
    participantDto: [
      {
        id: 1,
        userName: 'John Doe',
        imgUrl: 'https://example.com/user1.jpg',
        banned: false,
      },
    ],
    credential: 'test-credential',
    ended: false,
  },
];
