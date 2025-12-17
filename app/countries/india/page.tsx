import React from "react";

export default function IndiaPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">India Travel Etiquette & Taboos</h1>
      <p className="text-center text-lg text-gray-600 mb-12">Essential Do's and Don'ts for a respectful journey in India</p>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-green-50 rounded-xl p-8 border border-green-200">
          <h2 className="text-3xl font-bold text-green-800 mb-6">✓ Do's</h2>
          <ul className="space-y-4 text-lg">
            <li className="flex items-start"><span className="text-green-600 font-bold mr-3">•</span> Use "Namaste" greeting with palms together</li>
            <li className="flex items-start"><span className="text-green-600 font-bold mr-3">•</span> Remove shoes before entering homes and temples</li>
            <li className="flex items-start"><span className="text-green-600 font-bold mr-3">•</span> Dress modestly, especially at religious sites</li>
            <li className="flex items-start"><span className="text-green-600 font-bold mr-3">•</span> Use right hand for eating and giving/receiving items</li>
            <li className="flex items-start"><span className="text-green-600 font-bold mr-3">•</span> Accept offered tea or food as hospitality</li>
            <li className="flex items-start"><span className="text-green-600 font-bold mr-3">•</span> Respect elders and use titles</li>
          </ul>
        </div>

        <div className="bg-red-50 rounded-xl p-8 border border-red-200">
          <h2 className="text-3xl font-bold text-red-800 mb-6">✗ Don'ts</h2>
          <ul className="space-y-4 text-lg">
            <li className="flex items-start"><span className="text-red-600 font-bold mr-3">•</span> Don't touch anyone with feet or point soles at people</li>
            <li className="flex items-start"><span className="text-red-600 font-bold mr-3">•</span> Don't photograph people without permission</li>
            <li className="flex items-start"><span className="text-red-600 font-bold mr-3">•</span> Don't display public affection</li>
            <li className="flex items-start"><span className="text-red-600 font-bold mr-3">•</span> Don't touch sacred cows or disturb them</li>
            <li className="flex items-start"><span className="text-red-600 font-bold mr-3">•</span> Don't wear shoes inside religious places</li>
            <li className="flex items-start"><span className="text-red-600 font-bold mr-3">•</span> Don't discuss sensitive topics like caste openly</li>
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
