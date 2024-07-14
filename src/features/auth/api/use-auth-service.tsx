import { signUp } from '@/features/auth/api/auth-service';
import { SignUpForm } from '@/types/user';
import { UseMutationOptions, useMutation } from '@tanstack/react-query';

export const useSignUp = ({
  ...props
}: UseMutationOptions<object, unknown, SignUpForm, unknown>) => {
  return useMutation({
    mutationFn: (data: SignUpForm) => signUp(data),
    ...props,
  });
};
