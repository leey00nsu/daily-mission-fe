'use server';

import { User } from '@/entities/user/model/type';
import { cookies } from 'next/headers';

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
}
