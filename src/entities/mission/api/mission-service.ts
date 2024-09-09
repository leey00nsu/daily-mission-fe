import { SignOut } from '@/entities/auth/api/auth-action';
import {
  CreateMissionRequest,
  CreateMissionResponse,
  DeleteMissionRequest,
  GetMissionRequest,
  GetMissionResponse,
  GetMissionsRequest,
  GetMissionsResponse,
  JoinMissionRequest,
  Mission,
} from '@/entities/mission/model/type';
import { GlobalResponse } from '@/shared/model/type';
import { format } from 'date-fns';
import { delay } from 'es-toolkit';

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

export const getMissions = async (
  request: GetMissionsRequest,
): Promise<GetMissionsResponse> => {
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

export const joinMission = async (request: JoinMissionRequest) => {
  // 수정 필요

  // const response = await fetch('/api/participant/join', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(request),
  // });

  console.log(request);

  await delay(1000);

  return {
    ok: true,
  };
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
