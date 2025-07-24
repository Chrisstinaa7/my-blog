import { useState } from 'react';

export default function BlogForm() {
    const [blog, setBlog] = useState({
        title: '',
        content: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        // This is where you'd send data to your backend
        console.log('New blog submitted:', blog);

        // Clear form
        setBlog({ title: '', content: '' });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded shadow-md max-w-xl mx-auto mb-10"
        >
            <h2 className="text-2xl font-bold mb-4">Create a Blog Post</h2>

            <label className="block mb-2 font-medium">Title</label>
            <input
                type="text"
                value={blog.title}
                onChange={(e) => setBlog({ ...blog, title: e.target.value })}
                placeholder="Enter blog title"
                className="w-full mb-4 p-2 border rounded"
                required
            />

            <label className="block mb-2 font-medium">Content</label>
            <textarea
                value={blog.content}
                onChange={(e) => setBlog({ ...blog, content: e.target.value })}
                placeholder="Write your blog content here..."
                className="w-full mb-4 p-2 border rounded h-32"
                required
            />

            <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                Submit Post
            </button>
        </form>
    );
}
