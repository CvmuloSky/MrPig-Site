"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <nav className="bg-white shadow-md fixed top-0 w-full z-50">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <Link href="/" legacyBehavior>
                        <a className="text-3xl font-bold text-red-600">
                            Mr. Pig Korean BBQ
                        </a>
                    </Link>
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        <Link href="/" legacyBehavior>
                            <a className="text-lg hover:text-red-600 transition-colors">
                                Home
                            </a>
                        </Link>
                        <Link href="/menu" legacyBehavior>
                            <a className="text-lg hover:text-red-600 transition-colors">
                                Menu
                            </a>
                        </Link>
                        <Link href="/contact" legacyBehavior>
                            <a className="text-lg hover:text-red-600 transition-colors">
                                Contact Us
                            </a>
                        </Link>
                    </div>
                    {/* Mobile Navigation Toggle */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-600 hover:text-gray-800 focus:outline-none"
                        >
                            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M18.3 5.71a1 1 0 00-1.42-1.42L12 9.17 7.12 4.29a1 1 0 00-1.41 1.42L10.59 12l-4.88 4.88a1 1 0 001.41 1.42L12 14.83l4.88 4.88a1 1 0 001.42-1.42L13.41 12l4.89-4.88z"
                                    />
                                ) : (
                                    <path
                                        fillRule="evenodd"
                                        d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
                {/* Mobile Navigation Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white">
                        <ul className="px-6 py-4 space-y-2">
                            <li>
                                <Link href="/" legacyBehavior>
                                    <a
                                        onClick={() => setIsMenuOpen(false)}
                                        className="block text-lg hover:text-red-600 transition-colors"
                                    >
                                        Home
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/menu" legacyBehavior>
                                    <a
                                        onClick={() => setIsMenuOpen(false)}
                                        className="block text-lg hover:text-red-600 transition-colors"
                                    >
                                        Menu
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/#contact" legacyBehavior>
                                    <a
                                        onClick={() => setIsMenuOpen(false)}
                                        className="block text-lg hover:text-red-600 transition-colors"
                                    >
                                        Contact Us
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
            {/* Spacer to offset the fixed navbar */}
            <div className="h-20"></div>
        </>
    );
}
