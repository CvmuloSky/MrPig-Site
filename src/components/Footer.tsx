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
        <footer className="text-white" data-aos="fade-up">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between text-center sm:text-left">
                    <div className="mb-6 md:mb-0">
                        <Link href="/" legacyBehavior>
                            <a className="flex items-center justify-center sm:justify-start">
                                <Image
                                    src="/logo.png"
                                    alt="Mr. Pig Logo"
                                    width={32}
                                    height={32}
                                    className="h-8 mr-3"
                                />
                                <span className="self-center text-2xl font-semibold whitespace-nowrap">
                                    Mr. Pig Korean BBQ
                                </span>
                            </a>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-15">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase">Resources</h2>
                            <ul className="font-medium">
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
                            <h2 className="mb-6 text-sm font-semibold uppercase">Follow us</h2>
                            <ul className="font-medium">
                                <li className="mb-4">
                                    <Link href="#" legacyBehavior>
                                        <a className="hover:underline">PLACEHOLDER</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" legacyBehavior>
                                        <a className="hover:underline">PLACEHOLDER</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 sm:mx-auto lg:my-8 border-white" />
            </div>
        </footer>
    );
}
