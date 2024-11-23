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

  const reqDto: {
    email: string;
    nickname?: string;
    imageUrl?: string;
  } = {
    email,
    nickname,
  };

  if (image) {
    const { url, path } = await getPresignedUrl({
      fileName: image.name,
      title: image.name,
    });

    await uploadImage({ image, url });

    reqDto.imageUrl = path;
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/user/profile`,
    {
      method: 'PUT',
      body: JSON.stringify(reqDto),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    },
  );

  if (!response.ok) {
    throw new Error('프로필을 수정하는데 실패했습니다.');
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

    throw new Error('프로필을 불러오는데 실패했습니다.');
  }

  const data: GlobalResponse<User> = await response.json();

  return data.data;
};
