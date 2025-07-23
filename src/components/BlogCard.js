import Link from 'next/link';
import Image from 'next/image';

export default function BlogCard({ post }) {
    const { id, title, summary, thumbnail } = post;

    return (
        <Link href={`/blog/${id}`}>
            <div className="cursor-pointer bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md transition-all hover:scale-105">
                <Image src={thumbnail} alt={title} width={300} height={200} className="w-full object-cover" />
                <div className="p-4">
                    <h2 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h2>
                    <p className="text-gray-600 dark:text-gray-300">{summary}</p>
                </div>
            </div>
        </Link>
    );
}
