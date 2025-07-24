// pages/index.js
import { useEffect, useState } from 'react';
import { blogs as staticBlogs } from '../data/blogs';
import BlogCard from '../components/BlogCard';
import { useRouter } from 'next/router';

export default function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [combinedBlogs, setCombinedBlogs] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);

    const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    const allBlogs = [...staticBlogs, ...storedBlogs];
    setCombinedBlogs(allBlogs);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        {isLoggedIn ? 'Welcome back!' : 'Latest Blog Posts'}
      </h1>

      {combinedBlogs.length === 0 ? (
        <p>No blogs found. Submit one!</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {combinedBlogs.map((blog, index) => (
            <BlogCard key={index} post={blog} />
          ))}
        </div>
      )}
    </div>
  );
}
