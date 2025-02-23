"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
    useEffect(() => {
        AOS.init({once: true, duration: 1000 });
    }, []);

    return (
        <div className="bg-gray-50 min-h-screen font-sans text-gray-900">
            <main className="max-w-5xl mx-auto px-6 py-10">
                <h1 className="text-5xl font-bold mb-8 text-center" data-aos="fade-up">Contact Us</h1>
                <h2 className="text-2xl mb-1 text-center" data-aos="fade-up">Make a Reservation or Phone in Now!</h2>
                <p className="text-lg text-center mb-8" data-aos="fade-up">Call us at (123) 456-7890 or fill out the form below.</p>
                <div className="flex justify-center mb-8" data-aos="fade-up">
                    <div className="flex">
                        <button className="bg-red-600 text-white font-semibold rounded-l px-4 py-2 hover:bg-red-700 transition-colors" type="button">
                            Reservations
                        </button>
                        <button className="bg-red-600 text-white font-semibold rounded-r px-4 py-2 hover:bg-red-700 transition-colors" type="button">
                            Takeout
                        </button>
                    </div>
                </div>
                <form className="max-w-lg mx-auto" data-aos="fade-up">
                    <label className="block mb-2 font-semibold">Name</label>
                    <input className="w-full border border-gray-300 rounded px-4 py-2 mb-4" type="text" />
                    <label className="block mb-2 font-semibold">Email</label>
                    <input className="w-full border border-gray-300 rounded px-4 py-2 mb-4" type="email" />
                    <label className="block mb-2 font-semibold">Phone Number</label>
                    <input className="w-full border border-gray-300 rounded px-4 py-2 mb-4" type="tel" />
                    <label className="block mb-2 font-semibold">Message</label>
                    <textarea className="w-full border border-gray-300 rounded px-4 py-2 mb-4" rows={4}></textarea>
                    <button className="block w-full bg-red-600 text-white font-semibold rounded px-4 py-2 hover:bg-red-700 transition-colors" type="submit">Submit</button>
                </form>
            </main>
        </div>
    );
}
