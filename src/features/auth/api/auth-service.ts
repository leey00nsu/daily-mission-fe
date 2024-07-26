import { MOCK_USER } from '@/entities/user/constants/mock-user';
import { mockSignIn } from '@/features/auth/api/mock-sign-in';

export const signUp = async () => {
  // const response = await fetch('/api/auth/sign-up', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(data),
  // });

  // if (!response.ok) {
  //   throw new Error('Failed to sign up');
  // }

  await mockSignIn();

  return MOCK_USER;
};
