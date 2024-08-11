import { SignOut } from '@/entities/auth/api/auth-action';
import { MOCK_USER } from '@/entities/user/model/mock-user';
import { UpdateProfileRequest } from '@/entities/user/model/type';

import { delay } from 'es-toolkit';

export const updateProfile = async (request: UpdateProfileRequest) => {
  const formData = new FormData();

  formData.append('email', request.email);
  formData.append('name', request.name);

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

export const getProfile = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/user/detail`,
    {
      credentials: 'include',
    },
  );

  const data = await response.json();

  if (!response.ok) {
    SignOut();
  }

  return data.data;
};
