import { Session } from 'next-auth';

export type TBlog = {
    title: string;
    content: string;
    image: string;
    category: string;
};

export interface BlogPageProps {
    session: Session | null;
}
