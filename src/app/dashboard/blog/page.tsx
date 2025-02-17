import BlogPage from '@/components/dashboardBlogManagement';

import { authOptions } from '@/utils/authOptions';
import { getServerSession, Session } from 'next-auth';
import { Metadata } from 'next';

async function getData() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog`, {
        cache: 'force-cache',
    });
    return res.json();
}

export const metadata: Metadata = {
    title: 'Dashboard-Blog',
    description: 'Overview',
};

export default async function BlogManagement() {
    const session: Session | null = await getServerSession(authOptions);
    console.log(session);
    const blogData = await getData();
    return (
        <div>
            <BlogPage blogData={blogData} />
        </div>
    );
}
