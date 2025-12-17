import React from "react";

export default function SaudiArabiaPage() {
  return (
    <div className="max-container py-16 px-6">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Saudi Arabia Travel Etiquette & Taboos</h1>
      <p className="text-center text-lg text-gray-600 mb-12">Essential Do's and Don'ts for a respectful visit</p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Do's */}
        <div className="bg-green-50 rounded-xl p-8 border border-green-200">
          <h2 className="text-3xl font-bold text-green-800 mb-6">✓ Do's</h2>
          <ul className="space-y-4 text-lg">
            <li className="flex items-start"><span className="text-green-600 font-bold mr-3">•</span> Dress modestly (abaya for women in public)</li>
            <li className="flex items-start"><span className="text-green-600 font-bold mr-3">•</span> Use right hand for eating and greeting</li>
            <li className="flex items-start"><span className="text-green-600 font-bold mr-3">•</span> Accept offered coffee/dates as hospitality</li>
            <li className="flex items-start"><span className="text-green-600 font-bold mr-3">•</span> Respect prayer times (businesses close)</li>
            <li className="flex items-start"><span className="text-green-600 font-bold mr-3">•</span> Greet with "As-salamu alaykum"</li>
          </ul>
        </div>

        {/* Don'ts */}
        <div className="bg-red-50 rounded-xl p-8 border border-red-200">
          <h2 className="text-3xl font-bold text-red-800 mb-6">✗ Don'ts</h2>
          <ul className="space-y-4 text-lg">
            <li className="flex items-start"><span className="text-red-600 font-bold mr-3">•</span> No public displays of affection</li>
            <li className="flex items-start"><span className="text-red-600 font-bold mr-3">•</span> Don't consume alcohol or pork</li>
            <li className="flex items-start"><span className="text-red-600 font-bold mr-3">•</span> Don't photograph people (especially women) without permission</li>
            <li className="flex items-start"><span className="text-red-600 font-bold mr-3">•</span> Don't criticize religion or royal family</li>
            <li className="flex items-start"><span className="text-red-600 font-bold mr-3">•</span> Women: Don't drive in some areas (check current laws)</li>
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
