"use client";

import React from "react";
import Image from "next/image";

export default function ItalyPage() {
  const doItems = [
    { icon: "😄👍", text: "Say 'Buongiorno' till afternoon – polite start!" },
    { icon: "😄👍", text: "Enjoy long meals – food is love language." },
    { icon: "😄👍", text: "Dress stylish – Italians appreciate fashion." },
    { icon: "😄👍", text: "Order espresso at bar – standing is authentic!" },
    { icon: "😄👍", text: "Kiss cheeks greeting – left first!" },
    { icon: "😄👍", text: "Try regional dishes – pasta heaven varies!" },
    { icon: "😄👍", text: "Visit churches respectfully – cover shoulders." },
    { icon: "😄👍", text: "Say 'Grazie' often – thank you charm." },
    { icon: "😄👍", text: "Enjoy aperitivo – pre-dinner drinks tradition." },
    { icon: "😄👍", text: "Walk after dinner – passeggiata is lovely." },
    { icon: "😄👍", text: "Appreciate art – even if you pretend!" },
    { icon: "😄👍", text: "Sip cappuccino only morning – rule!" },
  ];

  const dontItems = [
    { icon: "🙃👎", text: "Don't order cappuccino after 11am – Italians gasp!" },
    { icon: "🙃👎", text: "Don't put pineapple on pizza – sacrilege!" },
    { icon: "🙃👎", text: "Don't rush meals – slow food is life." },
    { icon: "🙃👎", text: "Don't wear beachwear in cities – save for beach." },
    { icon: "🙃👎", text: "Don't cut spaghetti – twirl like pro." },
    { icon: "🙃👎", text: "Don't ask for parmesan on seafood pasta." },
    { icon: "🙃👎", text: "Don't be loud in churches – respect silence." },
    { icon: "🙃👎", text: "Don't tip excessively – service included." },
    { icon: "🙃👎", text: "Don't skip 'Ciao' hello/goodbye." },
    { icon: "🙃👎", text: "Don't queue jump – manners matter." },
    { icon: "🙃👎", text: "Don't expect dinner before 8pm." },
    { icon: "🙃👎", text: "Don't forget 'Prego' you're welcome!" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-red-50">
      <div className="relative h-96 overflow-hidden">
        <Image
          src="/images/italy-header.jpg"
          alt="Colosseum, Italy"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white text-center">Italy Etiquette & Taboos</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-xl text-center text-gray-700 mb-12">
          Live la dolce vita with these Italian tips – eat, love, and enjoy!
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
