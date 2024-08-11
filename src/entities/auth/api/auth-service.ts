import { SignUpRequest } from '@/entities/auth/model/type';
import { MOCK_USER } from '@/entities/user/model/mock-user';

export const signUp = async (request: SignUpRequest) => {
  const { provider } = request;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_AUTH_HOST}/${provider}`,
    {
      method: 'GET',
    },
  );

  if (!response.ok) {
    throw new Error('Failed to sign up');
  }

  // await mockSignIn();

  return MOCK_USER;
};
