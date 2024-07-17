import { Post } from '@/types/post';

export const POSTS: Post[] = [
  {
    postId: 1,
    missionId: 1,
    missionTitle: 'Mission 1',
    userName: 'John Doe',
    userImgUrl: 'https://example.com/user1.jpg',
    title: 'Post 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imgUrl: 'https://example.com/post1.jpg',
    createdDate: '2022-01-01',
    modifiedDate: '2022-01-02',
  },
  {
    postId: 2,
    missionId: 2,
    missionTitle: 'Mission 2',
    userName: 'Jane Smith',
    userImgUrl: 'https://example.com/user2.jpg',
    title: 'Post 2',
    content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
    imgUrl: 'https://example.com/post2.jpg',
    createdDate: '2022-01-03',
    modifiedDate: '2022-01-04',
  },
];
