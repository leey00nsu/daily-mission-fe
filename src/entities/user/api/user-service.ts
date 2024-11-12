import { SignOut } from '@/entities/auth/api/auth-action';
import {
  UpdateProfileRequest,
  UpdateProfileResponse,
  User,
} from '@/entities/user/model/type';
import { getPresignedUrl, uploadImage } from '@/shared/api/shared-service';
import { GlobalResponse } from '@/shared/model/type';

export const updateProfile = async (
  request: UpdateProfileRequest,
): Promise<UpdateProfileResponse> => {
  const { email, nickname, image } = request;

  if (image) {
    const { url } = await getPresignedUrl({
      fileName: image.name,
      title: image.name,
    });

    await uploadImage({ image, url });
  }

  const reqDto = {
    email,
    nickname,
    imageUrl: image ? `${image.name}/${image.name}` : undefined,
  };

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/user/profile`,
    {
      method: 'PUT',
      body: JSON.stringify(reqDto),
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
