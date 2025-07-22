import BlogCard from '@/components/BlogCard'

const dummyPosts = [
  {
    id: 1,
    slug: 'post-1',
    title: 'My First Blog',
    summary: 'This is a short summary of the blog.',
    thumbnail: '/sample.jpg', // Add image in /public/
  },
]

export default function Home() {
  return (
    <div className="p-4 grid md:grid-cols-2 gap-4">
      {dummyPosts.map(post => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  )
}
