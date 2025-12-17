import React from "react";

export default function ItalyPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Italy Travel Etiquette & Taboos</h1>
      <p className="text-center text-lg text-gray-600 mb-12">Essential Do's and Don'ts for enjoying la dolce vita</p>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-green-50 rounded-xl p-8 border border-green-200">
          <h2 className="text-3xl font-bold text-green-800 mb-6">✓ Do's</h2>
          <ul className="space-y-4 text-lg">
            <li className="flex items-start"><span className="text-green-600 font-bold mr-3">•</span> Greet with "Buongiorno" or "Buonasera"</li>
            <li className="flex items-start"><span className="text-green-600 font-bold mr-3">•</span> Dress stylishly and appropriately for churches</li>
            <li className="flex items-start"><span className="text-green-600 font-bold mr-3">•</span> Enjoy meals slowly – food is social</li>
            <li className="flex items-start"><span className="text-green-600 font-bold mr-3">•</span> Tip modestly (service often included)</li>
            <li className="flex items-start"><span className="text-green-600 font-bold mr-3">•</span> Use formal "Lei" with strangers</li>
            <li className="flex items-start"><span className="text-green-600 font-bold mr-3">•</span> Compliment the chef – appreciated!</li>
          </ul>
        </div>

        <div className="bg-red-50 rounded-xl p-8 border border-red-200">
          <h2 className="text-3xl font-bold text-red-800 mb-6">✗ Don'ts</h2>
          <ul className="space-y-4 text-lg">
            <li className="flex items-start"><span className="text-red-600 font-bold mr-3">•</span> Don't order cappuccino after 11am</li>
            <li className="flex items-start"><span className="text-red-600 font-bold mr-3">•</span> Don't cut pasta with knife</li>
            <li className="flex items-start"><span className="text-red-600 font-bold mr-3">•</span> Don't wear shorts/tank tops in churches</li>
            <li className="flex items-start"><span className="text-red-600 font-bold mr-3">•</span> Don't rush meals – it's disrespectful</li>
            <li className="flex items-start"><span className="text-red-600 font-bold mr-3">•</span> Don't put cheese on seafood pasta</li>
            <li className="flex items-start"><span className="text-red-600 font-bold mr-3">•</span> Don't expect dinner before 8pm</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center">
        <a href="/" className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 inline-block">
          Back to Home
        </a>
      </div>
    </div>
  );
}
