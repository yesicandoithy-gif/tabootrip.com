"use client";

import React from "react";
import Image from "next/image";

export default function IndiaPage() {
  const doItems = [
    { icon: "😄👍", text: "Say 'Namaste' with hands together – warm welcome!" },
    { icon: "😄👍", text: "Remove shoes before entering temples/homes." },
    { icon: "😄👍", text: "Try street chaat – spicy delicious chaos! 🌶️" },
    { icon: "😄👍", text: "Respect elders – touch feet for blessings." },
    { icon: "😄👍", text: "Use right hand for eating/giving – left is no-go." },
    { icon: "😄👍", text: "Bargain at markets – part of the fun!" },
    { icon: "😄👍", text: "Dress modestly at religious sites." },
    { icon: "😄👍", text: "Enjoy festivals – colors and joy everywhere!" },
    { icon: "😄👍", text: "Try vegetarian food – incredible variety!" },
    { icon: "😄👍", text: "Be patient – 'Indian time' is flexible." },
    { icon: "😄👍", text: "Accept chai offers – hospitality supreme." },
    { icon: "😄👍", text: "Head wobble means yes – learn it!" },
  ];

  const dontItems = [
    { icon: "🙃👎", text: "Don't use left hand for eating/giving – cultural taboo!" },
    { icon: "🙃👎", text: "Don't point feet at people – very disrespectful." },
    { icon: "🙃👎", text: "Don't touch head casually – sacred part." },
    { icon: "🙃👎", text: "Don't photograph without permission, especially women." },
    { icon: "🙃👎", text: "Don't eat beef in many places – sacred animal." },
    { icon: "🙃👎", text: "Don't wear shoes in temples – big offense." },
    { icon: "🙃👎", text: "Don't PDA excessively – keep it private." },
    { icon: "🙃👎", text: "Don't refuse food too strongly – hosts insist!" },
    { icon: "🙃👎", text: "Don't be loud in sacred places." },
    { icon: "🙃👎", text: "Don't litter – keep incredible India clean." },
    { icon: "🙃👎", text: "Don't assume one culture – India is diverse!" },
    { icon: "🙃👎", text: "Don't skip 'Dhanyavaad' thank you!" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-pink-50">
      <div className="relative h-96 overflow-hidden">
        <Image
          src="/images/india-header.jpg"
          alt="Taj Mahal, India"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white text-center">India Etiquette & Taboos</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-xl text-center text-gray-700 mb-12">
          Discover incredible India with these colorful tips – embrace the diversity and magic!
        </p>

        <div className="mb-16">
          <h2 className="text-4xl font-bold text-green-700 text-center mb-8">Do's 😄👍</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doItems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
                <p className="text-4xl mb-4 text-center">{item.icon}</p>
                <p className="text-lg text-gray-800 text-center">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-bold text-red-700 text-center mb-8">Don'ts 🙃👎</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dontItems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
                <p className="text-4xl mb-4 text-center">{item.icon}</p>
                <p className="text-lg text-gray-800 text-center">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => window.location.href = "/"}
            className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition shadow-lg"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
