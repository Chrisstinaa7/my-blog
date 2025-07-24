import { useContext } from 'react'
import { ThemeContext } from '@/context/ThemeContext'

export default function ThemeToggle() {
    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <button
            onClick={toggleTheme}
            className="px-3 py-2 bg-gray-200 dark:bg-gray-700 rounded text-sm"
        >
            {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
    )
}
