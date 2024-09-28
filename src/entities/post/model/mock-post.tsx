import { Post } from '@/entities/post/model/type';

export const MOCK_POSTS: Post[] = [
  {
    id: 1,
    missionId: 1,
    missionTitle: 'Mission 1',
    nickname: 'John Doe',
    userImageUrl:
      'https://missionlabbucket.s3.ap-northeast-2.amazonaws.com/고민개발자.png',
    title: 'Post 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl:
      'https://missionlabbucket.s3.ap-northeast-2.amazonaws.com/고민개발자.png',
    createdDate: '2022-01-01',
    modifiedDate: '2022-01-02',
  },
  {
    id: 2,
    missionId: 2,
    missionTitle: 'Mission 2',
    nickname: 'Jane Smith',
    userImageUrl:
      'https://missionlabbucket.s3.ap-northeast-2.amazonaws.com/고민개발자.png',
    title: 'Post 2',
    content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
    imageUrl:
      'https://missionlabbucket.s3.ap-northeast-2.amazonaws.com/고민개발자.png',
    createdDate: '2022-01-03',
    modifiedDate: '2022-01-04',
  },
];
