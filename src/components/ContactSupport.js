"use client";
import React from "react";
import Image from "next/image";

export default function ContactSupport() {
  return (
    <section className="py-20 px-8 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100" id="contact">
      <h2 className="text-3xl font-bold mb-12 text-center">Contact and Support</h2>
      <div className="max-w-3xl mx-auto space-y-8 text-center">
        <div>
          <Image
            src="/images/img3.png"
            alt="AI Chatbot"
            width={300}
            height={180}
            className="mx-auto mb-4 rounded shadow"
            priority
          />
          <h3 className="text-xl font-semibold mb-2">AI Chatbot</h3>
          <p>Get answers to frequently asked questions with our AI-powered chatbot.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Support Team</h3>
          <p>
            Contact us via email at{" "}
            <a href="mailto:support@lumos.com" className="text-blue-600 hover:underline">
              support@lumos.com
            </a>{" "}
            or use our live chat for immediate assistance.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Feedback</h3>
          <p>
            Share your suggestions and report issues through our{" "}
            <a href="/feedback" className="text-blue-600 hover:underline">
              feedback form
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
