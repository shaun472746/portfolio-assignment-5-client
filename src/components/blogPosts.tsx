'use client';

import { useGetBlogsQuery } from '@/redux/features/blogs/blog.api';
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

type BlogData = {
    _id: string;
    title: string;
    content: string;
    image: string;
    category: string;
}

const BlogPosts = ({blogData}:{blogData:BlogData[]}) => {

    const [blogs, setBlogs] = useState<BlogData[] >(blogData);
const { data, isLoading } = useGetBlogsQuery(undefined);


    useEffect(() => {
        setBlogs(data.data);
    }, [data]);

    return (
        <div>
            

            {blogs.map((post) => (
                <div key={post._id} style={{ marginBottom: '2rem' }}>
                    <h4>{post?.title}</h4>
                    <ReactMarkdown
                        components={{
                            code({ className, children }) {
                                const match = /language-(\w+)/.exec(
                                    className || ''
                                );
                                return match ? (
                                    <SyntaxHighlighter
                                        language={match[1]}
                                        style={materialDark}
                                        wrapLongLines={true}
                                    >
                                        {String(children).replace(/\n$/, '')}
                                    </SyntaxHighlighter>
                                ) : (
                                    <code className={className}>{children}</code>
                                );
                            },
                        }}
                    >
                        {post.content}
                    </ReactMarkdown>
                </div>
            ))}
        </div>
    );
};

export default BlogPosts;
