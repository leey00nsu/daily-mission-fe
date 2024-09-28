import { Mission } from '@/entities/mission/model/type';

export const MOCK_ALL_MISSON_LIST_1: Mission[] = [
  {
    id: 1,
    hint: 'hint',
    nickname: 'nickname',
    title: 'title',
    content: 'content',
    imageUrl:
      'https://missionlabbucket.s3.ap-northeast-2.amazonaws.com/고민개발자.png',
    startDate: '2024-08-25',
    endDate: '2024-09-30',
    ended: false,
    missionRuleResponseDto: {
      week: {
        mon: true,
        tue: true,
        wed: true,
        thu: true,
        fri: true,
        sat: true,
        sun: true,
      },
      deleted: false,
    },
    participantDto: [
      {
        id: 1,
        banned: false,
        imageUrl:
          'https://missionlabbucket.s3.ap-northeast-2.amazonaws.com/고민개발자.png',
        nickname: 'nickname',
      },
    ],
    credential: 'credential',
  },
];
