import { createMission } from '@/features/mission/api/mission-service';
import { CreateMissionRequest, CreateMissionResponse } from '@/types/mission';

import { UseMutationOptions, useMutation } from '@tanstack/react-query';

export const useCreateMission = (
  props?: UseMutationOptions<
    CreateMissionResponse,
    unknown,
    CreateMissionRequest,
    unknown
  >,
) => {
  return useMutation({
    mutationFn: createMission,
    ...props,
  });
};
