import { CreateMissionRequest } from '@/types/mission';
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
