import { useRouter } from 'next/router'

export default function BlogDetail() {
    const { query } = useRouter()
    const slug = query.slug

    // Dummy content for now
    const post = {
        title: 'My First Blog',
        content: 'Full blog content goes here...',
        image: '/sample.jpg',
    }

    return (
        <div className="max-w-3xl mx-auto p-4">
            <h1 className="text-3xl font-bold dark:text-white">{post.title}</h1>
            <img src={post.image} className="my-4 w-full h-64 object-cover" />
            <p className="text-gray-800 dark:text-gray-200">{post.content}</p>
        </div>
    )
}
