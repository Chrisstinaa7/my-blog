import { blogs } from '../data/blogs';
import BlogCard from '../components/BlogCard';
import Navbar from '@/components/Navbar';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Latest Blog Posts</h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map(blog => (
            <BlogCard key={blog.id} post={blog} />
            //                 🔑       ^ post instead of blog
          ))}
        </div>
      </div>
    </>
  );
}
