// components/BlogCard.js
import Link from 'next/link';
import Image from 'next/image';

export default function BlogCard({ post }) {
    const { id, title, summary, thumbnail, image, date, author } = post;

    return (
        <Link href={`/blog/${id}`} passHref>
            <div className="cursor-pointer bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md transition-transform hover:scale-105 duration-300">
                <div className="w-full h-48 relative">
                    <Image
                        src={thumbnail || image || '/images/fallback.png'}
                        alt={title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-xl"
                        priority
                    />
                </div>
                <div className="p-4 space-y-2">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h2>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{summary || 'No summary available.'}</p>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                        By {author || 'Unknown'} — {date ? new Date(date).toLocaleDateString() : 'Unknown date'}
                    </div>
                </div>
            </div>
        </Link>
    );
}
