import React from 'react'
import useThemeMode from '../../contexts/ThemeContext';

export default function ThemeBtn() {
    const { themeMode, lightTheme, darkTheme } = useThemeMode()

    const isDarkMode = themeMode === "dark";

    const toggleTheme = () => {
        if (isDarkMode) {
            lightTheme()
        } else {
            darkTheme()
        }
    }

    return (
        <button
            type="button"
            onClick={toggleTheme}
            className="relative inline-flex items-center cursor-pointer select-none border-none bg-transparent p-0 focus:outline-none group"
        >
            <div className={`absolute -inset-1   rounded-full blur-sm transition-all duration-300 pointer-events-none ${isDarkMode ? 'opacity-70' : 'opacity-0'}`}></div>

            <div className={`relative w-12 h-6 rounded-full transition-colors duration-300 flex items-center px-0.5   ${isDarkMode ? 'bg-blue-600' : 'bg-slate-300'}`}>

                <div
                    className={`relative w-5 h-5 bg-white rounded-full transform transition-transform duration-300 ease-in-out flex items-center justify-center ${isDarkMode ? 'translate-x-6' : 'translate-x-0'
                        }`}
                >
                    <svg
                        className={`absolute w-3 h-3 text-amber-500 transition-all duration-300 transform ${isDarkMode ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
                            }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>

                    <svg
                        className={`absolute w-3 h-3 text-indigo-600 transition-all duration-300 transform ${isDarkMode ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                            }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                    </svg>
                </div>
            </div>
        </button>
    );
}