import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';
import { blogs } from '../../data/blogs';

export default function BlogPost() {
    const router = useRouter();
    const { slug } = router.query;

    if (!router.isReady) {
        return <p className="p-4">Loading...</p>;
    }

    const blog = blogs.find(b => b.id === slug);

    if (!blog) return <p className="p-4">Blog not found</p>;

    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
            <p className="text-gray-600 text-sm mb-6">By {blog.author} on {blog.date}</p>
            <img
                src={blog.featuredImage}
                alt={blog.title}
                className="w-full h-96 object-cover rounded-md mb-6"
            />

            <div className="prose prose-lg dark:prose-invert">
                <ReactMarkdown>{blog.content}</ReactMarkdown>
            </div>
        </div>

    );

}
