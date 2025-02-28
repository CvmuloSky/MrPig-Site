"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  interface Review {
    user: {
      name: string;
    };
    text: string;
  }

  const [reviews, setReviews] = useState<Review[]>([]);
  const [rating, setRating] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });

    // Fetch Yelp data
    const fetchYelpData = async () => {
      try {
        const response = await fetch("/api/yelp");
        const data = await response.json();

        if (data.error) {
          console.error("Error fetching Yelp data", data.error);
          return;
        }

        // Set the reviews and rating
        setReviews(data.reviews);
        setRating(data.business.rating);
      } catch (error) {
        console.error("Error fetching Yelp data:", error);
      }
    };

    fetchYelpData();
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
      <section id="about" className="py-20 bg-black relative">
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

      {/* Reviews Section */}
      <section className="py-20 bg-black relative mt-[-50px] md:mt-[-100px] lg:mt-[-150px]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Rating Section */}
          <div data-aos="fade-right" className="text-center md:text-center">
            <h2 className="text-3xl font-bold mb-4">Rating</h2>
            <p className="text-lg leading-relaxed bg-gray-900 p-6 rounded-lg shadow-md inline-block">
              {rating ? (
                <span>Rating: {rating}</span>
              ) : (
                <span>Loading Rating...</span>
              )}
            </p>
          </div>

          {/* Reviews Section */}
          <div data-aos="fade-left" className="text-center md:text-center">
            <h2 className="text-3xl font-bold mb-4">Reviews</h2>
            {reviews.length > 0 ? (
              <div className="bg-gray-900 p-6 rounded-lg shadow-md">
                {reviews.slice(0, 3).map((review, index) => (
                  <div key={index} className="mb-4">
                    <p className="font-semibold">{review.user.name}</p>
                    <p className="text-sm">{review.text}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p>Loading Reviews...</p>
            )}
          </div>
        </div>
      </section>

      {/* Menu Section */}
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
