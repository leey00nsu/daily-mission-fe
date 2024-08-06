'use server';

import { delay } from 'es-toolkit';
import { cookies } from 'next/headers';

export async function mockSignIn() {
  cookies().set('session', JSON.stringify({}), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60,
    path: '/',
  });

  await delay(1000);

  return JSON.stringify({
    ok: true,
  });
}
