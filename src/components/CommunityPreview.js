"use client";
import React from "react";
import Image from "next/image";

const events = [
  {
    title: "Upcoming Webinars",
    description: "Join mentorship sessions and networking opportunities.",
    image: "/images/img2.png",
  },
  {
    title: "Forum Sneak Peek",
    description: "Explore select public discussions in our community forum.",
    image: "/images/img3.png",
  },
  {
    title: "Social Media Highlights",
    description: "Stay connected with Lumos on LinkedIn, Instagram, and X.",
    image: "/images/img4.png",
  },
];

export default function CommunityPreview() {
  return (
    <section className="py-20 px-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100" id="community">
      <h2 className="text-3xl font-bold mb-12 text-center">Community Preview</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12">
        {events.map((event, idx) => (
          <div
            key={idx}
            className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow hover:shadow-lg transition flex flex-col items-center"
          >
            <Image
              src={event.image}
              alt={event.title}
              width={200}
              height={120}
              className="mb-4 rounded"
              priority
            />
            <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
            <p className="text-center">{event.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
