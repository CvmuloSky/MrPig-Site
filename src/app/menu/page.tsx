"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const menuData = [
    {
        category: "Appetizers",
        items: [
            {
                name: "Kimchi Pancakes",
                description: "Crispy pancakes with spicy kimchi and scallions.",
                price: "$8.99",
                imgSrc:
                    "https://s3-media0.fl.yelpcdn.com/bphoto/kimchi-pancakes.jpg",
            },
            {
                name: "Korean Fried Chicken Wings",
                description: "Double-fried wings with a spicy-sweet glaze.",
                price: "$10.99",
                imgSrc:
                    "https://s3-media0.fl.yelpcdn.com/bphoto/chicken-wings.jpg",
            },
            {
                name: "Cheese Tteokbokki",
                description: "Spicy rice cakes with melted cheese.",
                price: "$9.99",
                imgSrc:
                    "https://s3-media0.fl.yelpcdn.com/bphoto/cheese-tteokbokki.jpg",
            },
            {
                name: "Toppokki",
                description: "Fusion twist on tteokbokki with crunchy toppings.",
                price: "$10.99",
                imgSrc:
                    "https://s3-media0.fl.yelpcdn.com/bphoto/toppokki.jpg",
            },
        ],
    },
    {
        category: "Combos",
        items: [
            {
                name: "Meat Combo",
                description:
                    "A mix of our best meats for a hearty BBQ experience.",
                price: "$25.99",
                imgSrc:
                    "https://s3-media0.fl.yelpcdn.com/bphoto/meat-combo.jpg",
            },
            {
                name: "BBQ Combos",
                description: "Assorted BBQ combos to share with friends.",
                price: "$29.99",
                imgSrc:
                    "https://s3-media0.fl.yelpcdn.com/bphoto/bbq-combos.jpg",
            },
        ],
    },
    {
        category: "Main Dishes",
        items: [
            {
                name: "Sliced Pork Belly",
                description:
                    "Tender pork belly with our signature marinade.",
                price: "$18.99",
                imgSrc:
                    "https://s3-media0.fl.yelpcdn.com/bphoto/sliced-pork-belly.jpg",
            },
            {
                name: "Spicy Beef Short Ribs",
                description:
                    "Grilled short ribs with a bold gochujang sauce.",
                price: "$21.99",
                imgSrc:
                    "https://s3-media0.fl.yelpcdn.com/bphoto/spicy-beef-short-ribs.jpg",
            },
            {
                name: "Bulgogi",
                description:
                    "Marinated thinly sliced beef grilled to perfection.",
                price: "$19.99",
                imgSrc:
                    "https://s3-media0.fl.yelpcdn.com/bphoto/bulgogi.jpg",
            },
            {
                name: "Ribeye",
                description: "Juicy ribeye steak cooked to your liking.",
                price: "$24.99",
                imgSrc:
                    "https://s3-media0.fl.yelpcdn.com/bphoto/ribeye.jpg",
            },
        ],
    },
    {
        category: "Noodles",
        items: [
            {
                name: "Cold Noodles",
                description:
                    "Refreshing cold noodles served with a tangy sauce.",
                price: "$12.99",
                imgSrc:
                    "https://s3-media0.fl.yelpcdn.com/bphoto/cold-noodles.jpg",
            },
        ],
    },
    {
        category: "Soups",
        items: [
            {
                name: "Soft Tofu Soup",
                description: "Silky tofu in a savory broth.",
                price: "$11.99",
                imgSrc:
                    "https://s3-media0.fl.yelpcdn.com/bphoto/soft-tofu-soup.jpg",
            },
            {
                name: "Soybean Soup",
                description: "Rich and hearty soybean soup.",
                price: "$10.99",
                imgSrc:
                    "https://s3-media0.fl.yelpcdn.com/bphoto/soybean-soup.jpg",
            },
        ],
    },
    {
        category: "Sides",
        items: [
            {
                name: "Steamed Egg",
                description: "Fluffy, savory steamed egg custard.",
                price: "$5.99",
                imgSrc:
                    "https://s3-media0.fl.yelpcdn.com/bphoto/steamed-egg.jpg",
            },
            {
                name: "Kimchi",
                description: "Traditional fermented spicy cabbage.",
                price: "$3.99",
                imgSrc:
                    "https://s3-media0.fl.yelpcdn.com/bphoto/kimchi.jpg",
            },
            {
                name: "Steamed Rice",
                description: "Perfectly steamed white rice.",
                price: "$2.99",
                imgSrc:
                    "https://s3-media0.fl.yelpcdn.com/bphoto/steamed-rice.jpg",
            },
        ],
    },
    {
        category: "Desserts",
        items: [
            {
                name: "Bingsu",
                description: "Shaved ice with sweet toppings.",
                price: "$7.99",
                imgSrc:
                    "https://s3-media0.fl.yelpcdn.com/bphoto/bingsu.jpg",
            },
            {
                name: "Mochi Ice Cream",
                description:
                    "Assorted flavors of mochi-wrapped ice cream.",
                price: "$4.99",
                imgSrc:
                    "https://s3-media0.fl.yelpcdn.com/bphoto/mochi-ice-cream.jpg",
            },
        ],
    },
    {
        category: "Drinks",
        items: [
            {
                name: "Soju",
                description: "Traditional Korean spirit.",
                price: "$6.99",
                imgSrc:
                    "https://s3-media0.fl.yelpcdn.com/bphoto/soju.jpg",
            },
            {
                name: "Korean Rice Wine",
                description:
                    "Sweet and tangy traditional rice wine.",
                price: "$5.99",
                imgSrc:
                    "https://s3-media0.fl.yelpcdn.com/bphoto/korean-rice-wine.jpg",
            },
            {
                name: "Soft Drinks",
                description: "Assorted sodas and iced teas.",
                price: "$2.99",
                imgSrc:
                    "https://s3-media0.fl.yelpcdn.com/bphoto/soft-drinks.jpg",
            },
        ],
    },
];
export default function Home() {
    useEffect(() => {
        AOS.init({ once: true, duration: 1250 });
    }, []);

    return (
        
        <div className="bg-black min-h-screen font-sans text-white">
            <main className="max-w-5xl mx-auto px-6 py-10">
                <div className="fixed top-0 left-0 w-full h-screen -z-10">
                    <Image
                        src="/placeholder.jpg"
                        alt="Mr. Pig Korean BBQ"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <br />
                <br />
                <br />
                <h1 className="text-5xl font-bold mb-8 text-center">Our Menu</h1>
                {menuData.map((category, idx) => (
                    <div key={idx} className="mb-10">
                        <h2 className="text-3xl font-semibold mb-4 border-b-2 border-red-600 inline-block" data-aos="fade-up">
                            {category.category}
                        </h2>
                        <div className="mt-4 space-y-6">
                            {category.items.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col md:flex-row md:items-center border-b border-gray-300 pb-4"
                                >
                                    <div className="w-full md:w-1/4">
                                    </div>
                                    <div className="mt-4 md:mt-0 md:ml-6 flex-1">
                                        <h3 className="text-xl font-bold" data-aos="fade-up">{item.name}</h3>
                                        <p className="text-white" data-aos="fade-up">{item.description}</p>
                                    </div>
                                    <div className="mt-4 md:mt-0">
                                        <p className="text-xl font-semibold" data-aos="fade-up">{item.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </main>
        </div>
    );
}
