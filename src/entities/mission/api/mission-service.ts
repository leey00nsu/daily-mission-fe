import { ALL_MISSIONS } from '@/entities/mission/model/mock-mission';
import {
  CreateMissionRequest,
  JoinMissionRequest,
} from '@/entities/mission/model/type';
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

export const getMission = async (id: number) => {
  // const response = await fetch(`/api/mission/${id}`);
  // const data = await response.json();

  await delay(1000);

  const selectedMission = ALL_MISSIONS.find((mission) => mission.id === id);

  if (!selectedMission) {
    throw new Error('Failed to get mission');
  }

  return selectedMission;
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
