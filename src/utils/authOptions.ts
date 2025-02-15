import config from '@/config';
import { NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: NextAuthOptions = {
    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: config.github_id as string,
            clientSecret: config.github_secret as string,
        }),
        GoogleProvider({
            clientId: config.google_client_id as string,
            clientSecret: config.google_client_secret as string,
        }),
    ],
    secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
    pages: {
        signIn: '/login',
    },
};
