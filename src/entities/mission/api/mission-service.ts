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
} from '@/entities/mission/model/type';
import { GlobalResponse } from '@/shared/model/type';
import { format } from 'date-fns';

export const createMission = async (
  request: CreateMissionRequest,
): Promise<CreateMissionResponse> => {
  const formData = new FormData();

  const missionReqDto = {
    week: request.week,
    title: request.title,
    hint: request.hint,
    credential: request.credential,
    content: request.content,
    startDate: format(request.date.startDate!, 'yyyy-MM-dd'),
    endDate: format(request.date.endDate!, 'yyyy-MM-dd'),
  };

  const missionReqDtoBlob = new Blob([JSON.stringify(missionReqDto)], {
    type: 'application/json',
  });

  formData.append('missionReqDto', missionReqDtoBlob);
  formData.append('file', request.image);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/mission/save`,
    {
      method: 'POST',
      body: formData,
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

  if (!response.ok) {
    SignOut();

    throw new Error('Failed to delete mission');
  }

  const data: GlobalResponse<void> = await response.json();

  return data.data;
};
