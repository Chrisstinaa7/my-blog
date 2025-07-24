// pages/_app.js
import { AuthProvider } from '@/context/AuthContext';
import { ThemeProvider } from '@/context/ThemeContext'

import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ThemeProvider>
        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">

          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </AuthProvider>
  )
}
