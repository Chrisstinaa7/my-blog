import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function SubmitBlog() {
    const router = useRouter();
    const [blog, setBlog] = useState({ title: '', content: '', image: null });
    const [imagePreview, setImagePreview] = useState(null);

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        if (!isLoggedIn) router.push('/login');
    }, [router]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = () => {
            setBlog(prev => ({ ...prev, image: reader.result }));
            setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newBlog = {
            id: Date.now(), // assign unique ID
            title: blog.title,
            summary: blog.summary,
            content: blog.content,
            image: blog.image,
            author: localStorage.getItem('currentUser'),
            date: new Date().toLocaleString(),
        };

        const existingBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
        existingBlogs.push(newBlog);
        localStorage.setItem('blogs', JSON.stringify(existingBlogs));

        alert('Blog submitted successfully!');
        setBlog({ title: '', content: '', image: null });
        setImagePreview(null);
    };

    return (
        <div className="max-w-2xl mx-auto mt-10 p-4">
            <h2 className="text-2xl font-bold mb-4">Submit a Blog Post</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Title"
                    value={blog.title}
                    onChange={(e) => setBlog({ ...blog, title: e.target.value })}
                    className="w-full mb-2 p-2 border rounded 
                        text-black bg-white 
                        dark:text-white dark:bg-gray-800 dark:placeholder-gray-400"
                    required
                />

                <input
                    type="text"
                    placeholder="Summary"
                    value={blog.summary || ''}
                    onChange={(e) => setBlog({ ...blog, summary: e.target.value })}
                    className="w-full mb-2 p-2 border rounded 
    text-black bg-white 
    dark:text-white dark:bg-gray-800 dark:placeholder-gray-400"
                    required
                />

                <textarea
                    placeholder="Content"
                    value={blog.content}
                    onChange={(e) => setBlog({ ...blog, content: e.target.value })}
                    className="w-full mb-4 p-2 border rounded h-32 
                        text-black bg-white 
                        dark:text-white dark:bg-gray-800 dark:placeholder-gray-400"
                    required
                />

                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full"
                    required
                />

                {imagePreview && (
                    <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-full h-60 object-cover mt-2 rounded"
                    />
                )}

                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
