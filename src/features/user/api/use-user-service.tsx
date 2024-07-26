import { updateProfile } from '@/features/user/api/user-service';
import { UpdateProfileRequest, UpdateProfileResponse } from '@/types/user';
import { UseMutationOptions, useMutation } from '@tanstack/react-query';

export const useUpdateProfile = (
  props?: UseMutationOptions<
    UpdateProfileResponse,
    unknown,
    UpdateProfileRequest,
    unknown
  >,
) => {
  return useMutation({
    mutationFn: (form: UpdateProfileRequest) => updateProfile(form),
    ...props,
  });
};
