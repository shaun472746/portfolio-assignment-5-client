import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';
import confEnv from './config';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    const token = await getToken({
        req: request,
        secret: confEnv.next_auth_secret,
    });
    const { pathname } = request.nextUrl;
    if (!token && pathname.startsWith('/dashboard')) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    if (token && pathname === '/login') {
        return NextResponse.redirect(new URL('/', request.url));
    }
    return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/dashboard/:path*', '/login'],
};
