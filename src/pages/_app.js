// pages/_app.js
import { ThemeProvider } from '@/context/ThemeContext'

import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">

        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}
