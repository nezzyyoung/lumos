"use client";
import React from "react";

export default function LoginSignup() {
  return (
    <section className="py-20 px-8 bg-white dark:bg-gray-900 text-center">
      <h2 className="text-3xl font-bold mb-8">Login and Sign-Up</h2>
      <div className="max-w-md mx-auto flex flex-col gap-6">
        <a
          href="/login"
          className="bg-blue-600 text-white rounded-full py-3 font-semibold hover:bg-blue-700 transition"
        >
          Login with Email/Password
        </a>
        <div className="flex justify-center gap-4">
          <a
            href="/auth/google"
            className="border border-gray-300 rounded-full px-4 py-2 hover:bg-gray-100 transition"
          >
            Google
          </a>
          <a
            href="/auth/linkedin"
            className="border border-gray-300 rounded-full px-4 py-2 hover:bg-gray-100 transition"
          >
            LinkedIn
          </a>
          <a
            href="/auth/facebook"
            className="border border-gray-300 rounded-full px-4 py-2 hover:bg-gray-100 transition"
          >
            Facebook
          </a>
        </div>
        <a
          href="/guest"
          className="mt-6 text-sm text-gray-600 dark:text-gray-400 underline hover:text-gray-800 dark:hover:text-gray-200"
        >
          Continue as Guest
        </a>
      </div>
    </section>
  );
}
