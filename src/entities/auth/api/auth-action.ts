'use server';

import { User } from '@/entities/user/model/type';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function MockSignIn({
  authorization,
  session,
}: {
  authorization: string;
  session: string;
}) {
  cookies().set('Authorization', authorization, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'development',
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
  });

  cookies().set('SESSION', session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'development',
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
  });

  redirect('/sign-in/callback');
}

export async function SignIn(user: User) {
  cookies().set('Auth', JSON.stringify(user), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
  });
}

export async function SignOut() {
  cookies().delete('Auth');
  cookies().delete('Authorization');
  cookies().delete('SESSION');
}
