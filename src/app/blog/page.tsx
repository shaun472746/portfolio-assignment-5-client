import config from '@/config';
import '../../../assets/root.css';
import styles from './about.module.css';
import BlogPosts from '@/components/blogPosts';

import { Divider } from 'antd';
import { Metadata } from 'next';

async function getData() {
    const res = await fetch(`${config.api_url}/blog`, {
        cache: 'force-cache',
    });
    return res.json();
}

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Overview',
};

// Generate static paths for each blog post
export async function generateStaticParams() {
    const blogData = await getData(); // Fetch blog data

    // Assuming each blog post has a unique `id` or `slug`
    return blogData.data.map((post: { id: string }) => ({
        id: post.id, // or `slug: post.slug` if using slugs
    }));
}

export default async function Blog({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    console.log(id);
    const { data: blogData } = await getData();

    return (
        <div className="default-margin-body">
            <Divider orientation="left" className={styles.dividerStyle}>
                <h3 className={styles.dividerHeader}>Blog</h3>
            </Divider>
            <BlogPosts blogData={blogData} />
        </div>
    );
}
