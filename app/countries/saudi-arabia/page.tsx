"use client";

import React from "react";
import Image from "next/image";

export default function SaudiArabiaPage() {
  const doItems = [
    { icon: "😄👍", text: "Dress modestly – respect local culture." },
    { icon: "😄👍", text: "Say 'As-salamu alaikum' greeting – peace be upon you!" },
    { icon: "😄👍", text: "Be hospitable – Saudi generosity legendary." },
    { icon: "😄👍", text: "Use right hand for eating/giving." },
    { icon: "😄👍", text: "Respect prayer times – everything pauses." },
    { icon: "😄👍", text: "Try Arabic coffee and dates – warm welcome." },
    { icon: "😄👍", text: "Be patient – insha'Allah timing." },
    { icon: "😄👍", text: "Visit modern Riyadh and historic sites." },
    { icon: "😄👍", text: "Accept invitations – true hospitality." },
    { icon: "😄👍", text: "Learn basic Arabic phrases – appreciated." },
    { icon: "😄👍", text: "Enjoy falconry and camel experiences." },
    { icon: "😄👍", text: "Be polite and smile – kindness universal." },
  ];

  const dontItems = [
    { icon: "🙃👎", text: "Don't dress revealingly – modest attire required." },
    { icon: "🙃👎", text: "Don't photograph people without permission, especially women." },
    { icon: "🙃👎", text: "Don't use left hand for eating/giving." },
    { icon: "🙃👎", text: "Don't drink alcohol – prohibited." },
    { icon: "🙃👎", text: "Don't display affection publicly." },
    { icon: "🙃👎", text: "Don't criticize religion or royalty." },
    { icon: "🙃👎", text: "Don't enter mosques if non-Muslim (some exceptions)." },
    { icon: "🙃👎", text: "Don't eat/drink in public during Ramadan daylight." },
    { icon: "🙃👎", text: "Don't point soles of feet at people." },
    { icon: "🙃👎", text: "Don't rush business – relationships first." },
    { icon: "🙃👎", text: "Don't assume gender mixing – segregated often." },
    { icon: "🙃👎", text: "Don't forget 'Shukran' thank you!" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50">
      <div className="relative h-96 overflow-hidden">
        <Image
          src="/images/saudi-header.jpg"
          alt="Kingdom Centre Tower, Saudi Arabia"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white text-center">Saudi Arabia Etiquette & Taboos</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-xl text-center text-gray-700 mb-12">
          Discover Saudi Arabia with respect and wonder – hospitality awaits!
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
