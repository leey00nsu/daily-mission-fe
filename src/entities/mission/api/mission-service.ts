import { SignOut } from '@/entities/auth/api/auth-action';
import {
  CreateMissionRequest,
  GetMissionRequest,
  GetMissionResponse,
  GetMissionsRequest,
  GetMissionsResponse,
  JoinMissionRequest,
} from '@/entities/mission/model/type';
import { GlobalResponse } from '@/shared/model/type';
import { format } from 'date-fns';
import { delay } from 'es-toolkit';

export const createMission = async (request: CreateMissionRequest) => {
  const formData = new FormData();

  formData.append('week', JSON.stringify(request.week));
  formData.append('title', request.title);
  formData.append('content', request.content);
  formData.append('startDate', format(request.date.startDate!, 'yyyy-MM-dd'));
  formData.append('endDate', format(request.date.endDate!, 'yyyy-MM-dd'));
  formData.append('file', request.image);

  // const response = await fetch('/api/mission', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(mission),
  // });

  await delay(1000);

  return {
    credential: 'test-credential',
  };
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

  const data: GlobalResponse<GetMissionResponse> = await response.json();

  if (!response.ok) {
    SignOut();
  }

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

  const data: GlobalResponse<GetMissionsResponse> = await response.json();

  if (!response.ok) {
    SignOut();
  }

  return data.data;
};

export const joinMission = async (request: JoinMissionRequest) => {
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
