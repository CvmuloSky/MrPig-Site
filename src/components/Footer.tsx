"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Image from "next/image";

export default function AnimatedFooter() {
    useEffect(() => {
        AOS.init({ duration: 600 });
    }, []);

    return (
        <footer className="" data-aos="fade-up">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link href="/" legacyBehavior>
                            <a className="flex items-center">
                                <Image
                                    src="/logo.png"
                                    alt="Mr. Pig Logo"
                                    width={32}
                                    height={32}
                                    className="h-8 mr-3"
                                />
                                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                                    Mr. Pig Korean BBQ
                                </span>
                            </a>
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                Resources
                            </h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link href="/" legacyBehavior>
                                        <a className="hover:underline">Home</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#menu" legacyBehavior>
                                        <a className="hover:underline">Menu</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                Follow us
                            </h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link href="#" legacyBehavior>
                                        <a className="hover:underline">Instagram</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" legacyBehavior>
                                        <a className="hover:underline">Facebook</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                Legal
                            </h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link href="#" legacyBehavior>
                                        <a className="hover:underline">Privacy Policy</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" legacyBehavior>
                                        <a className="hover:underline">Terms &amp; Conditions</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 sm:mx-auto  lg:my-8" color="white" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        © {new Date().getFullYear()}{" "}
                        <Link href="/" legacyBehavior>
                            <a className="hover:underline">Mr. Pig Korean BBQ</a>
                        </Link>
                        . All Rights Reserved.
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0 space-x-6">
                        <Link href="#" legacyBehavior>
                            <a className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                {/* Facebook SVG icon */}
                                <svg
                                    className="w-4 h-4 text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.483v-9.294H9.691v-3.622h3.117V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.312h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0z" />
                                </svg>
                                <span className="sr-only">Facebook page</span>
                            </a>
                        </Link>
                        <Link href="#" legacyBehavior>
                            <a className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                {/* Twitter SVG icon */}
                                <svg
                                    className="w-4 h-4 text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.865 9.865 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.384 4.482A13.94 13.94 0 0 1 1.671 3.149a4.917 4.917 0 0 0 1.523 6.574 4.9 4.9 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.085 4.918 4.918 0 0 0 4.588 3.417A9.868 9.868 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.058 0 14.01-7.514 14.01-14.01 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z" />
                                </svg>
                                <span className="sr-only">Twitter page</span>
                            </a>
                        </Link>
                        <Link href="#" legacyBehavior>
                            <a className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                {/* GitHub SVG icon */}
                                <svg
                                    className="w-4 h-4 text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.385.6.111.82-.261.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.605-2.665-.304-5.467-1.333-5.467-5.932 0-1.31.47-2.382 1.236-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.404c1.02.005 2.045.138 3.003.404 2.29-1.553 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.839 1.235 1.911 1.235 3.221 0 4.61-2.807 5.625-5.48 5.921.43.37.823 1.102.823 2.222v3.293c0 .319.218.694.825.576C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
                                </svg>
                                <span className="sr-only">GitHub account</span>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
