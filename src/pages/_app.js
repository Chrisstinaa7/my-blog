// pages/_app.js
import { AuthProvider } from '@/context/AuthContext';
import { ThemeProvider } from '@/context/ThemeContext';
import { BlogProvider } from '@/context/BlogContext';
import { useRouter } from 'next/router';
import Navbar from '@/components/navbar';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const hideNavbarRoutes = ['/login', '/register'];
  const showNavbar = !hideNavbarRoutes.includes(router.pathname);

  return (
    <AuthProvider>
      <ThemeProvider>
        <BlogProvider>
          <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
            {showNavbar && <Navbar />}
            <Component {...pageProps} />
          </div>
        </BlogProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}
