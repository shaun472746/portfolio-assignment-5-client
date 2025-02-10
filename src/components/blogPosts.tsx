'use client';
import React, { CSSProperties } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface BlogPost {
    id: number;
    content: string;
}

const blogPosts = [
    {
        id: 1,
        question: 'this is question 1?',
        content:
            "### Understanding Closures in JavaScript\n\n```javascript\nfunction outerFunction(outerVariable) {\n  return function innerFunction(innerVariable) {\n    console.log(`Outer Variable: ${outerVariable}`);\n    console.log(`Inner Variable: ${innerVariable}`);\n  };\n}\n\nconst newFunction = outerFunction('outside');\nnewFunction('inside');\n```\n\nClosures allow inner functions to access variables from their parent scope even after the parent has executed.",
    },
    {
        id: 2,
        question: 'this is question 2?',
        content:
            "### Simple API Fetch in TypeScript\n\n```typescript\nimport axios from 'axios';\n\nasync function fetchData(url: string): Promise<void> {\n  try {\n    const response = await axios.get(url);\n    console.log('Data:', response.data);\n  } catch (error) {\n    console.error('Error fetching data:', error);\n  }\n}\n\nfetchData('https://api.example.com/data');\n```\n\nThis code demonstrates how to make an API call using Axios in TypeScript.",
    },
    {
        id: 3,
        question: 'this is question 3?',
        content:
            '### Basic Sorting Algorithm in Python\n\n```python\ndef bubble_sort(arr):\n    n = len(arr)\n    for i in range(n):\n        for j in range(0, n - i - 1):\n            if arr[j] > arr[j + 1]:\n                arr[j], arr[j + 1] = arr[j + 1], arr[j]\n\n    return arr\n\nnumbers = [64, 34, 25, 12, 22, 11, 90]\nprint("Sorted array:", bubble_sort(numbers))\n```\n\nThis Python example demonstrates a simple bubble sort algorithm.',
    },
    {
        id: 4,
        question: 'this is question 4?',
        content:
            "### SQL Query for Joining Tables\n\n```sql\nSELECT customers.name, orders.order_id, orders.order_date\nFROM customers\nINNER JOIN orders ON customers.customer_id = orders.customer_id\nWHERE orders.status = 'completed';\n```\n\nThis query retrieves customer names and their completed order details from two related tables.",
    },
];

const BlogPosts: React.FC = () => {
    return (
        <div>
            {blogPosts.map((post) => (
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
                                    <code className={className}>
                                        {children}
                                    </code>
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
