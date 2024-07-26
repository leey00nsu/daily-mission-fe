import { MOCK_USER } from '@/entities/user/constants/mock-user';
import { UpdateProfileRequest } from '@/types/user';
import { delay } from 'es-toolkit';

export const updateProfile = async (request: UpdateProfileRequest) => {
  const formData = new FormData();

  formData.append('email', request.email);
  formData.append('nickname', request.nickname);

  if (request.image) {
    formData.append('file', request.image);
  }

  // const response = await fetch('/api/user', {
  //   method: 'PUT',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(data),
  // });

  // if (!response.ok) {
  //   throw new Error('Failed to sign up');
  // }

  await delay(1000);

  return MOCK_USER;
};
