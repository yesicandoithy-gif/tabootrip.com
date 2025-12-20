"use client";  // 必须加这一行，支持 window.location

import React from "react";
import Link from "next/link";

const knownCountries = [
  "japan",
  "thailand",
  "france",
  "china",
  "india",
  "italy",
  "usa",
  "saudi-arabia",
  "saudi arabia",
];

export default function SearchPage() {
  // 从 URL 获取搜索参数 q
  const params = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
  const query = params.get("q") || "";
  const countryName = query
    ? query.charAt(0).toUpperCase() + query.slice(1).toLowerCase().replace(/-/g, " ")
    : "Unknown Country";

  const isKnown = knownCountries.some((c) => c.toLowerCase() === query.toLowerCase().replace(/\s/g, "-"));

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      {/* Header */}
      <div className="relative h-96 overflow-hidden bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
        <div className="text-center text-white z-10">
          <p className="text-4xl font-bold mb-4">Search Result</p>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white text-center">
            {countryName} Etiquette & Taboos
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        {isKnown ? (
          <div className="bg-white rounded-xl shadow-lg p-12 mb-16">
            <h2 className="text-4xl font-bold text-green-700 mb-8">We have detailed guide for {countryName}! 🎉</h2>
            <Link href={`/countries/${query.toLowerCase().replace(/\s/g, "-")}`}>
              <button className="bg-green-500 text-white px-12 py-6 rounded-full text-2xl font-bold hover:bg-green-600 transition shadow-2xl">
                View {countryName} Etiquette Guide
              </button>
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-lg p-12 mb-16">
            <h2 className="text-4xl font-bold text-orange-600 mb-6">Coming Soon! 🚀</h2>
            <p className="text-xl text-gray-700 mb-8">
              We're working hard to add detailed etiquette and taboos for <strong>{countryName}</strong>!
            </p>
            <p className="text-lg text-gray-600 mb-8">
              General tips: Be respectful, smile, learn "hello" and "thank you" in local language, and observe local customs.
            </p>
            <p className="text-lg text-gray-600">
              Have experience in {countryName}? Share your story to help us build this page faster!
            </p>
          </div>
        )}

        <button
          onClick={() => window.location.href = "/stories"}
          className="bg-green-500 text-white px-10 py-5 rounded-full text-xl font-semibold hover:bg-green-600 transition shadow-lg"
        >
          Share Your {countryName} Story
        </button>

        <div className="mt-16">
          <button
            onClick={() => window.location.href = "/"}
            className="bg-gray-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-600 transition shadow-lg"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
