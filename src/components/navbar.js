import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
    return (
        <nav className="w-full px-6 py-4 bg-white dark:bg-gray-900 shadow-md flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white">
                VerseFrame
            </Link>

            <div className="flex items-center space-x-4 text-gray-800 dark:text-white">
                <Link href="/" className="hover:text-gray-400">Home</Link>
                <Link href="/login" className="hover:text-gray-400">Login</Link>
                <Link href="/register" className="hover:text-gray-400">Register</Link>
                <ThemeToggle />
            </div>
        </nav>
    );
}
