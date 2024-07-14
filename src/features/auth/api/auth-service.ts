import { mockSignIn } from '@/features/auth/api/mock-sign-in';
import { SignUpForm } from '@/types/user';

export const signUp = async (data: SignUpForm) => {
  const formData = new FormData();

  formData.append('email', data.email);
  formData.append('nickname', data.nickname);
  if (data.image) {
    formData.append('image', data.image);
  }
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

  const response = await mockSignIn(formData);

  return JSON.parse(response);
};
