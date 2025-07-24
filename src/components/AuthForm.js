import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';

export default function AuthForm({ type }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert('Please fill in both fields');
            return;
        }

        if (type === 'login') {

            login();
        } else {

            alert('Account created successfully!');
            login();
        }
    };

    return (
        <div className="max-w-sm mx-auto mt-10 p-6 border rounded shadow-md dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-4 text-center">
                {type === 'login' ? 'Login' : 'Register'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 border rounded dark:bg-gray-800 dark:border-gray-600"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-2 border rounded dark:bg-gray-800 dark:border-gray-600"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                    {type === 'login' ? 'Login' : 'Register'}
                </button>
            </form>
        </div>
    );
}
