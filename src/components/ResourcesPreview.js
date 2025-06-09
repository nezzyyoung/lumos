"use client";
import React from "react";
import Image from "next/image";

const resources = [
  {
    title: "Featured Articles",
    description:
      "Explore articles on career growth and personal development.",
    image: "/images/img1.png",
  },
  {
    title: "Mentor Showcase",
    description:
      "Meet our mentors with bios and areas of expertise.",
    image: "/images/img2.png",
  },
  {
    title: "Opportunity Search",
    description:
      "Discover opportunities before signing up.",
    image: "/images/img3.png",
  },
];

export default function ResourcesPreview() {
  return (
    <section className="py-20 px-8 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100" id="resources">
      <h2 className="text-3xl font-bold mb-12 text-center">Publicly Accessible Resources</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12">
        {resources.map((resource, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow hover:shadow-lg transition flex flex-col items-center"
          >
            <Image
              src={resource.image}
              alt={resource.title}
              width={200}
              height={120}
              className="mb-4 rounded"
              priority
            />
            <h3 className="text-xl font-semibold mb-3">{resource.title}</h3>
            <p className="text-center">{resource.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
