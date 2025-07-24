// pages/index.js
import { useEffect, useState } from 'react';
import { blogs } from '../data/blogs';
import BlogCard from '../components/BlogCard';
import Navbar from '@/components/navbar.js';
import { useRouter } from 'next/router';

export default function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
  }, []);

  return (
    <>
      <Navbar />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">
          {isLoggedIn ? 'Welcome back!' : 'Latest Blog Posts'}
        </h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} post={blog} />
          ))}
        </div>
      </div>
    </>
  );
}
