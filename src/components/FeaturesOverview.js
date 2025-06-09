"use client";
import React from "react";
import Image from "next/image";

const features = [
  {
    title: "Mentorship Program",
    description:
      "Connect with experts and mentors to guide your personal and professional growth.",
    image: "/images/img2.png",
  },
  {
    title: "Smart Resources",
    description:
      "Access educational materials, funding opportunities, and career guides tailored for you.",
    image: "/images/img3.png",
  },
  {
    title: "AI-powered Assistance",
    description:
      "Get personalized recommendations and support with our AI chatbot.",
    image: "/images/img4.png",
  },
  {
    title: "Impact Stories",
    description:
      "Read real testimonials from mentors and youth who have benefited from Lumos.",
    image: "/images/img1.png",
  },
];

export default function FeaturesOverview() {
  return (
    <section
      id="learn-more"
      className="py-20 px-8 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
    >
      <h2 className="text-3xl font-bold mb-12 text-center">Features Overview</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-12">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow hover:shadow-lg transition flex flex-col items-center"
          >
            <Image
              src={feature.image}
              alt={feature.title}
              width={200}
              height={120}
              className="mb-4 rounded"
              priority
            />
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 text-center">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
