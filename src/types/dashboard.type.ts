import { Session } from 'next-auth';

export type TBlog = {
    title: string;
    content: string;
    image: string;
    category: string;
    _id?:string;
};

export type TProject = {
    title: string;
    description: string;
    image: string;
    link?: string;
    _id?:string;
};

export interface BlogPageProps {
    session: Session | null;
}
