"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
    useEffect(() => {
        AOS.init({ once: true, duration: 1000 });
    }, []);

    return (
        <div className="text-white min-h-1/2 font-sans relative overflow-hidden">
            {/* Background Image Locked */}
            <div className="fixed top-0 left-0 w-full h-3/4">
                <Image
                    src="/EatingArea.jpg"
                    alt="Mr. Pig Korean BBQ"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Tint Overlay */}
            <div className="fixed top-0 left-0 w-full h-3/4 -z-5 bg-black opacity-50"></div>

            {/* Hero Section */}
            <section className="relative w-full h-screen flex flex-col items-center justify-center text-center px-4 mt-[-100px] md:mt-[-150px] lg:mt-[-200px]">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4" data-aos="fade-up">
                    HOURS & LOCATION
                </h1>
            </section>

            <hr />

            {/* Location & Hours Section */}
            <section className="py-20 bg-white relative mt-[-50px] md:mt-[-100px] lg:mt-[-150px]">
                <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Location Section */}
                    <div data-aos="fade-right" className="text-center md:text-left">
                        <h2 id="heading" className="text-yellow-300 text-3xl font-bold mb-4">Location</h2>
                        <div className="flex justify-center md:justify-start">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.2802072681725!2d-75.15835452401166!3d39.95748747151719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c70ff3780773%3A0xd146906cacc8648b!2sMr%20Pig%20Korean%20BBQ!5e0!3m2!1sen!2sus!4v1740261076915!5m2!1sen!2sus"
                                width="100%"
                                height="400"
                                allowFullScreen={true}
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-lg shadow-md"
                            ></iframe>
                        </div>
                    </div>

                    {/* Hours Section */}
                    <div data-aos="fade-left" className="text-center md:text-left">
                        <h2 id="heading" className="text-3xl font-bold mb-4">Hours</h2>
                        <ul id="time" className="text-lg leading-relaxed bg-gray-100 p-6 rounded-lg shadow-md inline-block">
                            <li><strong>Monday – Thursday:</strong> 11:30 AM – 10:00 PM</li>
                            <li><strong>Friday:</strong> 11:30 AM – 11:00 PM</li>
                            <li><strong>Saturday:</strong> 12:00 PM – 11:00 PM</li>
                            <li><strong>Sunday:</strong> 12:00 PM – 10:00 PM</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}
