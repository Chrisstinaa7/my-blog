// pages/blog/[slug].js
import { useRouter } from 'next/router';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from 'react';
import { blogs as staticBlogs } from '../../data/blogs';

export default function BlogPost() {
    const router = useRouter();
    const { slug } = router.query;
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        if (!router.isReady) return;

        const localBlogs = JSON.parse(localStorage.getItem('blogs') || '[]');
        const allBlogs = [...staticBlogs, ...localBlogs];

        const foundBlog = allBlogs.find((b) => String(b.id) === String(slug));
        setBlog(foundBlog || null);
    }, [router.isReady, slug]);

    if (!router.isReady || blog === null) {
        return <p className="p-4">Loading...</p>;
    }

    if (!blog) {
        return <p className="p-4 text-red-500">Blog not found.</p>;
    }

    return (
        <>
            <Head>
                <title>{blog.title} | Blog</title>
                <meta name="description" content={blog.summary || blog.content?.slice(0, 150)} />
            </Head>

            <div className="max-w-4xl mx-auto p-6">
                <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
                <p className="text-gray-600 text-sm mb-6">
                    By {blog.author || 'Unknown'} on{' '}
                    {blog.date
                        ? new Date(blog.date).toLocaleDateString(undefined, {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        })
                        : 'Unknown date'}
                </p>

                {blog.image || blog.featuredImage ? (
                    <img
                        src={blog.image || blog.featuredImage}
                        alt={blog.title}
                        className="w-full h-80 sm:h-96 object-cover rounded-md mb-6"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = '/images/fallback.png';
                        }}
                    />
                ) : null}

                <div className="prose prose-lg dark:prose-invert whitespace-pre-wrap">
                    <ReactMarkdown>
                        {typeof blog.content === 'string' ? blog.content : 'No content available.'}
                    </ReactMarkdown>
                </div>
            </div>
        </>
    );
}
