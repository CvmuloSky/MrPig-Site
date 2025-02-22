"use client";

import Image from "next/image";
import Link from "next/link";
import {useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-white text-black min-h-screen font-sans">
      {/* Hero Section */}
      
      <section className="relative w-full h-[700px]">
        <Image
          src="/Outside.jpg"
          alt="Mr. Pig Korean BBQ"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center px-4">
          <h1 className="text-7xl font-bold text-white" data-aos="fade-up">
            Mr. Pig Korean BBQ
          </h1>
          <p
            className="mt-4 text-2xl text-white"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Premium Korean BBQ in Philadelphia
          </p>
          <Link href="/menu" legacyBehavior>
            <a
              className="mt-8 px-8 py-4 bg-red-600 text-xl font-semibold rounded-full hover:bg-red-700 transition-all text-white shadow-lg"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              View Full Menu
            </a>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center" data-aos="fade-up">
          <h2 className="text-5xl font-bold mb-12">About Us</h2>
          <p className="text-xl leading-relaxed">
            Mr. Pig Korean BBQ offers an authentic, immersive dining experience
            with premium meats and fresh ingredients served in a stylish, modern
            atmosphere. Join us for a memorable meal that celebrates the best
            of Korean BBQ.
          </p>
        </div>
      </section>
    </div>
  );
}
