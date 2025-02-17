import '../../../assets/root.css';
import styles from './about.module.css';
import BlogPosts from '@/components/blogPosts';

import { Divider } from 'antd';
import { Metadata } from 'next';

async function getData() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog`, {
        cache: 'force-cache',
    });
    return res.json();
}

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Overview',
};

// Generate static paths for each blog
export async function generateStaticParams() {
    const blogData = await getData();

    return blogData.data.map((post: { _id: string }) => ({
        id: post._id.toString(), // Ensure it's a string
    }));
}

export default async function Blog({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { data: blogData } = await getData();
    const { id } = await params;
    console.log(id);

    return (
        <div className="default-margin-body">
            <Divider orientation="left" className={styles.dividerStyle}>
                <h3 className={styles.dividerHeader}>Blog</h3>
            </Divider>
            <BlogPosts blogData={blogData} />
        </div>
    );
}
