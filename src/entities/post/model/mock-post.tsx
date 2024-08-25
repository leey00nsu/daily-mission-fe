import { Post } from '@/entities/post/model/type';

export const POSTS: Post[] = [
  {
    id: 1,
    missionId: 1,
    missionTitle: 'Mission 1',
    username: 'John Doe',
    userImageUrl: 'https://example.com/user1.jpg',
    title: 'Post 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: 'https://example.com/post1.jpg',
    createdDate: '2022-01-01',
    modifiedDate: '2022-01-02',
  },
  {
    id: 2,
    missionId: 2,
    missionTitle: 'Mission 2',
    username: 'Jane Smith',
    userImageUrl: 'https://example.com/user2.jpg',
    title: 'Post 2',
    content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
    imageUrl: 'https://example.com/post2.jpg',
    createdDate: '2022-01-03',
    modifiedDate: '2022-01-04',
  },
];
