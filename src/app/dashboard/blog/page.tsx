import BlogPage from '@/components/dashboardBlogManagement';

import { authOptions } from '@/utils/authOptions';
import { getServerSession, Session } from 'next-auth';

async function getData() {
    const res = await fetch('http://localhost:5000/api/blog', {
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
