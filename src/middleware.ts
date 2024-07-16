import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get('session')?.value;

  if (currentUser && request.nextUrl.pathname.startsWith('/sign-in')) {
    return Response.redirect(new URL('/', request.url));
  }

  if (!currentUser && !request.nextUrl.pathname.startsWith('/sign-in')) {
    return Response.redirect(new URL('/sign-in', request.url));
  }

  return null;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
