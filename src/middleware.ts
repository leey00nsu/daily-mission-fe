import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const isLogin = request.cookies.get('Authorization')?.value;

  if (isLogin && request.nextUrl.pathname === '/sign-in') {
    return Response.redirect(new URL('/', request.url));
  }

  if (!isLogin && request.nextUrl.pathname !== '/sign-in') {
    return Response.redirect(new URL('/sign-in', request.url));
  }

  return null;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
