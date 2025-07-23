import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-gray-800 text-white px-4 py-3 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold hover:text-gray-300">
                MyBlog
            </Link>
            <div className="space-x-4">
                <Link href="/" className="hover:text-gray-300">Home</Link>
                <Link href="/login" className="hover:text-gray-300">Login</Link>
                <Link href="/register" className="hover:text-gray-300">Register</Link>
            </div>
        </nav>
    );
}
