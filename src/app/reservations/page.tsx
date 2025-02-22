"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
    useEffect(() => {
        AOS.init({ once: true, duration: 1000 });
    }, []);

    return (
        <div className="text-white min-h-screen font-sans relative overflow-hidden">
            {/* Background Image Locked */}
            <div className="fixed top-0 left-0 w-full h-screen -z-10">
                <Image
                    src="/EatingArea2.jpg"
                    alt="Mr. Pig Korean BBQ"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Tint Overlay */}
            <div className="fixed top-0 left-0 w-full h-screen -z-5 bg-black opacity-50"></div>

            {/* Hero Section */}
            <section className="relative w-full h-screen flex flex-col items-center justify-center text-center px-4 mt-[-100px]">
                <h1 className="text-6xl font-extrabold mb-4" data-aos="fade-up">
                    Make Your Reservation Now!
                </h1>
                <h1 className="text-2xl font-bold mb-4" data-aos="fade-up">
                    <br />
                    As you prepare for your visit, please review the information<br />below to secure your reservation and understand the waitlist procedures.
                    <br /><br /><br /><center><button className="button" data-aos="fade-up"><span>Reserve Now </span></button><br /><br /><br /></center>
                </h1>
            </section>
            <hr />
            <section className="py-20 bg-white relative">
                <div className="max-w-5xl mx-auto px-6 about flex items-start" data-aos="fade-up">
                    <h2 className="text-3xl font-bold w-1/3">RESERVATIONS</h2>
                    <p className="text-1xl leading-relaxed w-2/3">
                        PLACEHOLDER MESSAGE
                    </p>
                </div>
            </section>
            <hr />
            <section className="py-10 bg-white relative">
                <div className="max-w-5xl mx-auto px-6 about flex items-start" data-aos="fade-up">
                    <h2 className="text-3xl font-bold w-1/3">LARGE PARTIES</h2>
                    <p className="text-1xl leading-relaxed w-2/3">
                        PLACEHOLDER MESSAGE
                    </p>
                </div>
            </section>
            <hr />
            <section className="py-20 bg-white relative">
                <div className="max-w-5xl mx-auto px-6 about flex items-start" data-aos="fade-up">
                    <h2 className="text-3xl font-bold w-1/3">WAITLIST</h2>
                    <p className="text-1xl leading-relaxed w-2/3">
                        PLACEHOLDER MESSAGE

                    </p>
                </div>
            </section>

        </div>
    );
}
