"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <nav className="relative opacity-70 shadow-md z-50 bg-black">
                <div className="w-full px-12 py-4 flex justify-between items-center">
                    <Link href="/" legacyBehavior>
                        <a id="navbarlink" className="text-3xl font-bold text-white">
                            Mr. Pig Korean BBQ
                        </a>
                    </Link>
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8 text-white">
                        <Link href="/reservations" legacyBehavior>
                            <a id="navbarlink" className="text-lg transition-colors">
                                RESERVE YOUR SEAT!
                            </a>
                        </Link>
                        <Link href="/hoursandloc" legacyBehavior>
                            <a id="navbarlink" className="text-lg transition-colors">
                                HOURS AND LOCATION
                            </a>
                        </Link> 
                        <Link href="/menu" legacyBehavior>
                            <a id="navbarlink" className="text-lg transition-colors">
                                MENU
                            </a>
                        </Link>
                        <Link href="/contact" legacyBehavior>
                            <a id="navbarlink" className="text-lg transition-colors">
                                CONTACT US
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
                                        className="block text-lg transition-colors"
                                    >
                                        Home
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/menu" legacyBehavior>
                                    <a
                                        onClick={() => setIsMenuOpen(false)}
                                        className="block text-lg transition-colors"
                                    >
                                        Menu
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/#contact" legacyBehavior>
                                    <a
                                        onClick={() => setIsMenuOpen(false)}
                                        className="block text-lg transition-colors"
                                    >
                                        Contact Us
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
            {/* Spacer to offset the navbar */}
            <div className="h-20"></div>
        </>
    );
}
