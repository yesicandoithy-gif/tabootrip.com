"use client";

import React from "react";

export default function DynamicCountryPage({ params }: { params: { country: string } }) {
  const countryName = decodeURIComponent(params.country).replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      {/* Header - 默认占位美图 */}
      <div className="relative h-96 overflow-hidden bg-gray-200 flex items-center justify-center">
        <div className="text-center">
          <p className="text-3xl text-gray-600 mb-4">Coming Soon</p>
          <p className="text-xl text-gray-500">Beautiful header image for {countryName}</p>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white text-center">
            {countryName} Etiquette & Taboos
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <div className="bg-white rounded-xl shadow-lg p-12 mb-16">
          <h2 className="text-4xl font-bold text-orange-600 mb-6">Coming Soon! 🚀</h2>
          <p className="text-xl text-gray-700 mb-8">
            We're working hard to add detailed etiquette and taboos for <strong>{countryName}</strong>!
          </p>
          <p className="text-lg text-gray-600 mb-8">
            General tips: Be respectful, smile, learn "hello" and "thank you" in local language, and observe local customs.
          </p>
          <p className="text-lg text-gray-600">
            Have experience in {countryName}? Share your story to help us build this page!
          </p>
        </div>

        <a
          href="/stories"
          className="inline-block bg-green-500 text-white px-10 py-5 rounded-full text-xl font-semibold hover:bg-green-600 transition shadow-lg"
        >
          Share Your {countryName} Story
        </a>

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
