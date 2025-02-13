'use client';

import TiptapEditor from '@/utils/TipTapEditor';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const BlogPosts = () => {
    const [content, setContent] = useState(''); // ✅ Define state for markdown content

    const handleEditorChange = (markdown: string) => {
        setContent(markdown); // ✅ Update state with new markdown content
    };

    const exampleData = [
        {
            id: 2,
            question: 'This is question 2?',
            content: content, // ✅ Assign updated markdown content
        },
    ];

    return (
        <div>
            <TiptapEditor onChange={handleEditorChange} />

            {exampleData.map((post) => (
                <div key={post.id} style={{ marginBottom: '2rem' }}>
                    <h4>{post?.question}</h4>
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
