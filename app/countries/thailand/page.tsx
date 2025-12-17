import React from "react";

export default function ThailandPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Thailand Travel Etiquette & Taboos</h1>
      <p className="text-center text-lg text-gray-600 mb-12">Essential Do's and Don'ts for a respectful trip in the Land of Smiles</p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Do's */}
        <div className="bg-green-50 rounded-xl p-8 border border-green-200">
          <h2 className="text-3xl font-bold text-green-800 mb-6">✓ Do's</h2>
          <ul className="space-y-4 text-lg">
            <li className="flex items-start"><span className="text-green-600 font-bold mr-3">•</span> Wai greeting (hands together, slight bow)</li>
            <li className="flex items-start"><span className="text-green-600 font-bold mr-3">•</span> Remove shoes before entering temples and homes</li>
            <li className="flex items-start"><span className="text-green-600 font-bold mr-3">•</span> Smile – Thais value friendliness</li>
            <li className="flex items-start"><span className="text-green-600 font-bold mr-3">•</span> Dress modestly at temples (cover shoulders and knees)</li>
            <li className="flex items-start"><span className="text-green-600 font-bold mr-3">•</span> Show respect to monks (women don't touch them)</li>
          </ul>
        </div>

        {/* Don'ts */}
        <div className="bg-red-50 rounded-xl p-8 border border-red-200">
          <h2 className="text-3xl font-bold text-red-800 mb-6">✗ Don'ts</h2>
          <ul className="space-y-4 text-lg">
            <li className="flex items-start"><span className="text-red-600 font-bold mr-3">•</span> Don't touch anyone's head (sacred)</li>
            <li className="flex items-start"><span className="text-red-600 font-bold mr-3">•</span> Don't point feet at people or Buddha images</li>
            <li className="flex items-start"><span className="text-red-600 font-bold mr-3">•</span> Don't speak loudly or show anger (lose face)</li>
            <li className="flex items-start"><span className="text-red-600 font-bold mr-3">•</span> Don't criticize the royal family</li>
            <li className="flex items-start"><span className="text-red-600 font-bold mr-3">•</span> Don't step on door thresholds (spirits live there)</li>
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
