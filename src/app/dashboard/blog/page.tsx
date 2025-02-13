import BlogPage from '@/components/dashboardBlogManagement';

import { authOptions } from '@/utils/authOptions';
import { getServerSession, Session } from 'next-auth';
import config from "@/config"

async function getData() {
    const res = await fetch(`${config.api_url}/blog`, {
        cache: 'force-cache',
    });
    return res.json();
}

export default async function BlogManagement() {
    const session: Session | null = await getServerSession(authOptions);
    const blogData = await getData();
    return (
        <div>
            <BlogPage blogData={blogData} />
        </div>
    );
}
