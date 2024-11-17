import { SignOut } from '@/entities/auth/api/auth-action';
import {
  CreateMissionRequest,
  CreateMissionResponse,
  DeleteMissionRequest,
  GetMissionRequest,
  GetMissionResponse,
  GetMissionsResponse,
  GetPaginationMissionsRequest,
  GetPaginationMissionsResponse,
  JoinMissionRequest,
  Mission,
  UpdateMissionRequest,
  UpdateMissionResponse,
} from '@/entities/mission/model/type';
import { getPresignedUrl, uploadImage } from '@/shared/api/shared-service';
import { GlobalResponse } from '@/shared/model/type';
import { format } from 'date-fns';

export const createMission = async (
  request: CreateMissionRequest,
): Promise<CreateMissionResponse> => {
  const { week, title, hint, credential, content, date, image } = request;

  const { url, path } = await getPresignedUrl({
    fileName: image.name,
    title,
  });

  await uploadImage({ image, url });

  const missionReqDto = {
    week,
    title,
    hint,
    credential,
    content,
    startDate: format(date.startDate!, 'yyyy-MM-dd'),
    endDate: format(date.endDate!, 'yyyy-MM-dd'),
    imageUrl: path,
  };

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/mission/save`,
    {
      method: 'POST',
      body: JSON.stringify(missionReqDto),
      credentials: 'include',
    },
  );

  if (!response.ok) {
    SignOut();

    throw new Error('Failed to create mission');
  }

  const data: GlobalResponse<CreateMissionResponse> = await response.json();

  return data.data;
};

export const updateMission = async (
  request: UpdateMissionRequest,
): Promise<UpdateMissionResponse> => {
  const { hint, credential, id } = request;

  const missionReqDto = {
    hint,
    credential,
  };

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/mission/${id}`,
    {
      method: 'PUT',
      body: JSON.stringify(missionReqDto),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    },
  );

  if (!response.ok) {
    SignOut();

    throw new Error('Failed to update mission');
  }

  const data: GlobalResponse<CreateMissionResponse> = await response.json();

  return data.data;
};

export const getMission = async (
  request: GetMissionRequest,
): Promise<GetMissionResponse> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/mission/${request.id}`,
    {
      credentials: 'include',
    },
  );

  if (!response.ok) {
    SignOut();

    throw new Error('Failed to get mission');
  }

  const data: GlobalResponse<GetMissionResponse> = await response.json();

  return data.data;
};

export const getParticipatedMissions =
  async (): Promise<GetMissionsResponse> => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_HOST}/mission/user`,
      {
        credentials: 'include',
      },
    );

    if (!response.ok) {
      SignOut();

      throw new Error('Failed to get participated missions');
    }

    const data: GlobalResponse<GetMissionsResponse> = await response.json();

    return data.data;
  };

export const getPaginationMissions = async (
  request: GetPaginationMissionsRequest,
): Promise<GetPaginationMissionsResponse> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/mission/${request.type}?page=${request.page}&size=${request.size}&sort=${request.sort}`,
    {
      credentials: 'include',
    },
  );

  if (!response.ok) {
    SignOut();

    throw new Error('Failed to get missions');
  }

  const data: GlobalResponse<Mission[]> = await response.json();

  return {
    data: data.data,
    meta: {
      isNext: data.meta.isNext,
    },
  };
};

export const joinMission = async (
  request: JoinMissionRequest,
): Promise<void> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/participant/join`,
    {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(request),
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  const data: GlobalResponse<void> = await response.json();

  if (!response.ok) {
    throw new Error(data.errors.message);
  }

  return data.data;
};

export const deleteMission = async (
  request: DeleteMissionRequest,
): Promise<void> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/mission/${request.id}`,
    {
      method: 'DELETE',
      credentials: 'include',
    },
  );

  const data: GlobalResponse<void> = await response.json();

  if (!response.ok) {
    throw new Error(data.errors.message);
  }

  return data.data;
};
