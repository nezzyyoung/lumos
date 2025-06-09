"use client";
import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-8 text-center">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4">
        Empowering Youth, Unlocking Opportunities
      </h1>
      <p className="max-w-2xl mx-auto mb-8 text-lg sm:text-xl">
        Connect with mentors, access resources, and grow your future with Lumos.
      </p>
      <div className="flex justify-center gap-6">
        <a
          href="/signup"
          className="bg-white text-blue-700 font-semibold rounded-full px-6 py-3 hover:bg-gray-100 transition"
        >
          Join Lumos
        </a>
        <a
          href="#learn-more"
          className="border border-white rounded-full px-6 py-3 hover:bg-white hover:text-blue-700 transition"
        >
          Learn More
        </a>
      </div>
      <div className="mt-12">
        <Image
          src="/images/img1.png"
          alt="Community impact illustration"
          width={600}
          height={400}
          className="mx-auto rounded-lg shadow-lg"
          priority
        />
      </div>
    </section>
  );
}
