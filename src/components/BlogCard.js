import Link from 'next/link'

export default function BlogCard({ post }) {
    return (
        <Link href={`/blog/${post.slug}`}>
            <div className="bg-white dark:bg-gray-800 shadow rounded overflow-hidden cursor-pointer hover:scale-105 transition-transform">
                <img src={post.thumbnail} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                    <h2 className="text-xl font-bold dark:text-white">{post.title}</h2>
                    <p className="text-gray-600 dark:text-gray-300">{post.summary}</p>
                </div>
            </div>
        </Link>
    )
}
