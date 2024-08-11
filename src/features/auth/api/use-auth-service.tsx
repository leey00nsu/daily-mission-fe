import { signUp } from '@/entities/auth/api/auth-service';
import { SignUpRequest } from '@/entities/auth/api/model/type';
import { UseMutationOptions, useMutation } from '@tanstack/react-query';

export const useSignUp = (
  props?: UseMutationOptions<object, unknown, SignUpRequest, unknown>,
) => {
  return useMutation({
    mutationFn: signUp,
    ...props,
  });
};
