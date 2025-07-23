import { useRouter } from 'next/router';
import { blogs } from '../../data/blogs';

export default function BlogPost() {
    const router = useRouter();
    const { id } = router.query;

    const blog = blogs.find(b => b.id === id);

    if (!blog) return <p className="p-4">Blog not found</p>;

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
            <p className="text-gray-600 mb-2">By {blog.author} on {blog.date}</p>
            <div className="prose prose-lg dark:prose-invert">
                <p>{blog.content}</p>
            </div>
        </div>
    );
}
