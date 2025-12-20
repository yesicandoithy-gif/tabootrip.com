"use client";

import React from "react";
import Image from "next/image";

export default function ThailandPage() {
  const doItems = [
    { icon: "😄👍", text: "Wai greeting with smile – instant Thai charm!" },
    { icon: "😄👍", text: "Remove shoes indoors – keep it clean and respectful." },
    { icon: "😄👍", text: "Try street food – pad thai and mango sticky rice heaven! 🍲" },
    { icon: "😄👍", text: "Be polite and soft-spoken – 'krab/ka' goes far!" },
    { icon: "😄👍", text: "Visit temples respectfully – cover shoulders/knees." },
    { icon: "😄👍", text: "Bargain with smile at markets – fun game!" },
    { icon: "😄👍", text: "Enjoy Thai massage – relaxing must-do!" },
    { icon: "😄👍", text: "Say 'Sawasdee' hello/goodbye – easy win hearts." },
    { icon: "😄👍", text: "Ride tuk-tuk – adventurous and iconic!" },
    { icon: "😄👍", text: "Try spicy food challenge – but have milk ready! 🌶️" },
    { icon: "😄👍", text: "Respect monks – don't touch or photo close." },
    { icon: "😄👍", text: "Smile always – land of smiles for a reason!" },
  ];

  const dontItems = [
    { icon: "🙃👎", text: "Don't touch head – it's sacred, big no-no!" },
    { icon: "🙃👎", text: "Don't point feet at people/Buddha – super rude." },
    { icon: "🙃👎", text: "Don't badmouth monarchy – serious offense." },
    { icon: "🙃👎", text: "Don't lose temper – 'jai yen' cool heart please." },
    { icon: "🙃👎", text: "Don't hug monks (if female) – keep distance." },
    { icon: "🙃👎", text: "Don't wear shoes in temples/homes – oops moment!" },
    { icon: "🙃👎", text: "Don't over-bargain aggressively – keep it friendly." },
    { icon: "🙃👎", text: "Don't litter beaches – paradise stays perfect." },
    { icon: "🙃👎", text: "Don't feed elephants at unethical places." },
    { icon: "🙃👎", text: "Don't ignore wai – return it politely." },
    { icon: "🙃👎", text: "Don't rush – Thai time is relaxed!" },
    { icon: "🙃👎", text: "Don't skip 'khob khun' thank you!" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-yellow-50">
      <div className="relative h-96 overflow-hidden">
        <Image
          src="/images/thailand-header.jpg"
          alt="Grand Palace, Thailand"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white text-center">Thailand Etiquette & Taboos</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-xl text-center text-gray-700 mb-12">
          Enjoy the Land of Smiles with these fun tips – be respectful and have an unforgettable adventure!
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
