'use server';

import { delay } from 'es-toolkit';
import { cookies } from 'next/headers';

export async function mockSignIn(form: FormData) {
  const formObject = Object.fromEntries(form.entries());

  cookies().set('session', JSON.stringify(formObject), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60,
    path: '/',
  });

  await delay(1000);

  return JSON.stringify({
    ok: true,
    json: formObject,
  });
}
