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
          src="/placeholder.jpg"
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
        <h1 className="text-8xl font-extrabold mb-4" data-aos="fade-up">
          Mr. Pig Korean BBQ
        </h1>
        <h1 className="text-4xl font-bold mb-4" data-aos="fade-up">
          Korean Barbecue Restaurant
        </h1>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white relative">
        <div className="max-w-5xl mx-auto px-6 text-center about" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-8">YOUR NEXT MEAL DESTINATION</h2>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto mb-6">
            Savor the classic flavors of traditional Korean BBQ in a sleek, modern setting.<br />
            Open for all holidays with normal business hours.<br /> <br />
            <span className="font-bold">***PLEASE MAKE RESERVATIONS EARLY TO SECURE YOUR TABLE***</span><br />
            Monday-Thursday: 12pm–11pm<br />
            Friday-Saturday: 12pm–12am<br />
            Sunday: 12pm–12am<br />
            Open Thanksgiving Day from 11AM-11PM<br />
            1001 Vine St, Philadelphia, PA 19107<br />
            (267) 534-5037<br />
            Please dial ext. 1 to place your order
          </p>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto">
            Mr. Pig Korean BBQ offers an authentic Korean barbecue experience with high-quality meats and attentive service. Enjoy a vibrant dining atmosphere that blends tradition with modernity, ensuring a memorable meal every time you visit.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white relative mt-[-50px] md:mt-[-100px] lg:mt-[-150px]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Location Section */}
          <div data-aos="fade-right" className="text-center md:text-center">
            <h2 id="heading" className="text-3xl font-bold mb-4">Rating</h2>
            <p id="time" className="text-lg leading-relaxed bg-gray-100 p-6 rounded-lg shadow-md inline-block">

            </p>
          </div>

          {/* Hours Section */}
          <div data-aos="fade-left" className="text-center md:text-center">
            <h2 id="heading" className="text-3xl font-bold mb-4">Reviews</h2>
            <p id="time" className="text-lg leading-relaxed bg-gray-100 p-6 rounded-lg shadow-md inline-block">

            </p>
          </div>
        </div>
      </section>

      <section id="menu" className="py-20 relative">
        <h1 className="text-5xl font-bold mb-8 text-center" data-aos="fade-up">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          Its Time to Eat!
          <br />
          <Link
            href="/menu"
            className="mt-8 px-8 py-2 bg-clip-padding bg-red-600 rounded-full text-xl font-semibold hover:bg-red-700 transition-colors"
            data-aos="fade-up"
          >
            MENU
          </Link>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </h1>
      </section>
    </div>
  );
}
