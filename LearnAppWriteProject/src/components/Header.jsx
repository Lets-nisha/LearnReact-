import React from 'react';

export default function Header() {
    return (
        <header className="bg-gray-700 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="#" className="text-sm font-bold text-white hover:text-gray-300">
                            AppWriteProject
                        </a>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex items-center space-x-6">
                        <a
                            href="#home"
                            className="text-gray-300 hover:text-white transition duration-150 ease-in-out font-medium"
                        >
                            Home
                        </a>
                        <a
                            href="#about"
                            className="text-gray-300 hover:text-white transition duration-150 ease-in-out font-medium"
                        >
                            About
                        </a>

                        {/* Auth Buttons */}
                        <div className="flex items-center space-x-3 ml-4">
                            <a
                                href="#login"
                                className="px-4 py-2 text-sm font-medium text-blue-400 border border-blue-400 rounded-md hover:bg-blue-400 hover:text-white transition duration-150 ease-in-out"
                            >
                                Login
                            </a>
                            <a
                                href="#logout"
                                className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 transition duration-150 ease-in-out"
                            >
                                Logout
                            </a>
                        </div>
                    </nav>

                </div>
            </div>
        </header>
    );
}