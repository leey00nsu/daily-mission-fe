import { SignOut } from '@/entities/auth/api/auth-action';
import {
  UpdateProfileRequest,
  UpdateProfileResponse,
  User,
} from '@/entities/user/model/type';
import { GlobalResponse } from '@/shared/model/type';

export const updateProfile = async (
  request: UpdateProfileRequest,
): Promise<UpdateProfileResponse> => {
  const formData = new FormData();

  const requestDto: {
    nickname?: string;
  } = {};

  if (request.nickname) requestDto.nickname = request.nickname;

  const requestDtoBlob = new Blob([JSON.stringify(requestDto)], {
    type: 'application/json',
  });

  formData.append('requestDto', requestDtoBlob);

  if (request.image) formData.append('file', request.image);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/user/profile`,
    {
      method: 'PUT',
      body: formData,
      credentials: 'include',
    },
  );

  if (!response.ok) {
    throw new Error('Failed to update profile');
  }

  const data: GlobalResponse<UpdateProfileResponse> = await response.json();

  return data.data;
};

export const getProfile = async (): Promise<User> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/user/detail`,
    {
      credentials: 'include',
    },
  );

  if (!response.ok) {
    SignOut();

    throw new Error('Failed to get profile');
  }

  const data: GlobalResponse<User> = await response.json();

  return data.data;
};
