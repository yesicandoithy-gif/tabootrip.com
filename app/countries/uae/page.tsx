import React from "react";

export default function UAEPage() {
  return (
    <div className="max-container py-16 px-6">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">UAE Travel Etiquette & Taboos</h1>
      <p className="text-center text-lg text-gray-600 mb-12">Essential Do's and Don'ts in the United Arab Emirates</p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Do's */}
        <div className="bg-green-50 rounded-xl p-8 border border-green-200">
          <h2 className="text-3xl font-bold text-green-800 mb-6">✓ Do's</h2>
          <ul className="space-y-4 text-lg">
            <li className="flex items-start"><span className="text-green-600 font-bold mr-3">•</span> Dress modestly in public (cover shoulders and knees)</li>
            <li className="flex items-start"><span className="text-green-600 font-bold mr-3">•</span> Use right hand for eating and greeting</li>
            <li className="flex items-start"><span className="text-green-600 font-bold mr-3">•</span> Accept offered tea/coffee as hospitality</li>
            <li className="flex items-start"><span className="text-green-600 font-bold mr-3">•</span> Ask permission before photographing people</li>
            <li className="flex items-start"><span className="text-green-600 font-bold mr-3">•</span> Respect prayer times</li>
          </ul>
        </div>

        {/* Don'ts */}
        <div className="bg-red-50 rounded-xl p-8 border border-red-200">
          <h2 className="text-3xl font-bold text-red-800 mb-6">✗ Don'ts</h2>
          <ul className="space-y-4 text-lg">
            <li className="flex items-start"><span className="text-red-600 font-bold mr-3">•</span> No public displays of affection</li>
            <li className="flex items-start"><span className="text-red-600 font-bold mr-3">•</span> Don't drink alcohol in public (except licensed venues)</li>
            <li className="flex items-start"><span className="text-red-600 font-bold mr-3">•</span> Don't swear or make rude gestures</li>
            <li className="flex items-start"><span className="text-red-600 font-bold mr-3">•</span> Don't eat/drink in public during Ramadan daylight</li>
            <li className="flex items-start"><span className="text-red-600 font-bold mr-3">•</span> Don't point soles of feet at people</li>
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
