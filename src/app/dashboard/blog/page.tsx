import BlogPage from '@/components/dashboardBlogManagement';
import { authOptions } from '@/utils/authOptions';
import { getServerSession, Session } from 'next-auth';

export default async function BlogManagement() {
    const session: Session | null = await getServerSession(authOptions);
    return (
        <div>
            <BlogPage session={session} />
        </div>
    );
}
