import React from "react";

export default function FrancePage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">France Travel Etiquette & Taboos</h1>
      <p className="text-center text-lg text-gray-600 mb-12">Essential Do's and Don'ts for a pleasant French experience</p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Do's */}
        <div className="bg-green-50 rounded-xl p-8 border border-green-200">
          <h2 className="text-3xl font-bold text-green-800 mb-6">✓ Do's</h2>
          <ul className="space-y-4 text-lg">
            <li className="flex items-start"><span className="text-green-600 font-bold mr-3">•</span> Say "Bonjour" when entering shops or restaurants</li>
            <li className="flex items-start"><span className="text-green-600 font-bold mr-3">•</span> Use "vous" for formal situations</li>
            <li className="flex items-start"><span className="text-green-600 font-bold mr-3">•</span> Dress elegantly, especially in cities</li>
            <li className="flex items-start"><span className="text-green-600 font-bold mr-3">•</span> Enjoy meals slowly – dining is social</li>
            <li className="flex items-start"><span className="text-green-600 font-bold mr-3">•</span> Say "s'il vous plaît" and "merci"</li>
          </ul>
        </div>

        {/* Don'ts */}
        <div className="bg-red-50 rounded-xl p-8 border border-red-200">
          <h2 className="text-3xl font-bold text-red-800 mb-6">✗ Don'ts</h2>
          <ul className="space-y-4 text-lg">
            <li className="flex items-start"><span className="text-red-600 font-bold mr-3">•</span> Don't skip greetings – it's rude</li>
            <li className="flex items-start"><span className="text-red-600 font-bold mr-3">•</span> Don't eat while walking</li>
            <li className="flex items-start"><span className="text-red-600 font-bold mr-3">•</span> Don't speak loudly in public</li>
            <li className="flex items-start"><span className="text-red-600 font-bold mr-3">•</span> Don't ask personal questions too soon</li>
            <li className="flex items-start"><span className="text-red-600 font-bold mr-3">•</span> Don't tip excessively (service included)</li>
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
