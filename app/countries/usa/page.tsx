"use client";

import React from "react";
import Image from "next/image";

export default function USAPage() {
  const doItems = [
    { icon: "😄👍", text: "Be friendly and chat – small talk is normal!" },
    { icon: "😄👍", text: "Tip 15-20% at restaurants – expected custom." },
    { icon: "😄👍", text: "Try regional foods – BBQ, lobster, tacos!" },
    { icon: "😄👍", text: "Be on time – punctuality appreciated." },
    { icon: "😄👍", text: "Smile at strangers – friendly vibe." },
    { icon: "😄👍", text: "Explore national parks – nature amazing!" },
    { icon: "😄👍", text: "Say 'please' and 'thank you' – basic politeness." },
    { icon: "😄👍", text: "Embrace diversity – melting pot magic." },
    { icon: "😄👍", text: "Drive road trips – classic American adventure!" },
    { icon: "😄👍", text: "Enjoy sports events – tailgate fun!" },
    { icon: "😄👍", text: "Be direct but polite – honesty valued." },
    { icon: "😄👍", text: "Celebrate holidays big – join the fun!" },
  ];

  const dontItems = [
    { icon: "🙃👎", text: "Don't forget to tip – service workers rely on it!" },
    { icon: "🙃👎", text: "Don't discuss politics/religion casually – can get heated." },
    { icon: "🙃👎", text: "Don't litter – keep America beautiful." },
    { icon: "🙃👎", text: "Don't stand too close – personal space matters." },
    { icon: "🙃👎", text: "Don't assume one culture – huge diversity!" },
    { icon: "🙃👎", text: "Don't jaywalk in busy cities – tickets happen." },
    { icon: "🙃👎", text: "Don't be overly formal – casual is fine." },
    { icon: "🙃👎", text: "Don't skip 'excuse me' in crowds." },
    { icon: "🙃👎", text: "Don't smoke in non-smoking areas." },
    { icon: "🙃👎", text: "Don't underestimate distances – America big!" },
    { icon: "🙃👎", text: "Don't forget tax added at checkout." },
    { icon: "🙃👎", text: "Don't miss 'have a nice day'!" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-red-50">
      <div className="relative h-96 overflow-hidden">
        <Image
          src="/images/usa-header.jpg"
          alt="Statue of Liberty, USA"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white text-center">USA Etiquette & Taboos</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-xl text-center text-gray-700 mb-12">
          Experience the American dream with these friendly tips – diversity and freedom await!
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
