import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';

export default function Register() {
    const [user, setUser] = useState({ email: '', password: '' });
    const { login } = useAuth();

    const handleRegister = (e) => {
        e.preventDefault();
        if (user.email && user.password) {
            login();
        }
    };

    return (
        <form
            onSubmit={handleRegister}
            className="max-w-sm mx-auto space-y-4 mt-10 bg-gray-100 p-6 rounded shadow"
        >
            <h2 className="text-xl font-semibold">Register</h2>
            <input
                type="email"
                placeholder="Email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                className="w-full px-3 py-2 border rounded"
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                className="w-full px-3 py-2 border rounded"
                required
            />
            <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded">
                Register
            </button>
        </form>
    );
}
