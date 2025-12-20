"use client";

import React from "react";
import Image from "next/image";

export default function FrancePage() {
  const doItems = [
    { icon: "😄👍", text: "Say 'Bonjour' entering shops – basic politeness magic!" },
    { icon: "😄👍", text: "Enjoy long meals – food is art, savor it!" },
    { icon: "😄👍", text: "Kiss cheeks greeting – la bise is charming." },
    { icon: "😄👍", text: "Dress stylish – French appreciate effort." },
    { icon: "😄👍", text: "Buy fresh bread daily – baguette life!" },
    { icon: "😄👍", text: "Visit museums – culture overload in best way." },
    { icon: "😄👍", text: "Say 'Merci' often – thank you is key." },
    { icon: "😄👍", text: "Enjoy wine with meals – when in France!" },
    { icon: "😄👍", text: "Walk everywhere – discover hidden gems." },
    { icon: "😄👍", text: "Try escargot or frog legs – adventurous eating!" },
    { icon: "😄👍", text: "Be romantic – Paris vibe encourages it." },
    { icon: "😄👍", text: "Appreciate art – even if you don't understand!" },
  ];

  const dontItems = [
    { icon: "🙃👎", text: "Don't skip 'Bonjour' – seen as rude!" },
    { icon: "🙃👎", text: "Don't eat on the go – sit and enjoy." },
    { icon: "🙃👎", text: "Don't speak loudly in public – keep it chic." },
    { icon: "🙃👎", text: "Don't tip excessively – service included." },
    { icon: "🙃👎", text: "Don't wear sportswear everywhere – dress up a bit." },
    { icon: "🙃👎", text: "Don't rush meals – French take time." },
    { icon: "🙃👎", text: "Don't assume everyone speaks English – try French first." },
    { icon: "🙃👎", text: "Don't take photos in shops without permission." },
    { icon: "🙃👎", text: "Don't queue jump – manners matter." },
    { icon: "🙃👎", text: "Don't be overly casual with strangers." },
    { icon: "🙃👎", text: "Don't miss café culture – it's essential!" },
    { icon: "🙃👎", text: "Don't forget 'S'il vous plaît' – please!" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-pink-50">
      <div className="relative h-96 overflow-hidden">
        <Image
          src="/images/france-header.jpg"
          alt="Eiffel Tower, France"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white text-center">France Etiquette & Taboos</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-xl text-center text-gray-700 mb-12">
          Experience France like a local with these chic tips – enjoy the romance and culture!
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
