import React from "react";

export default function USAPage() {
  return (
    <div className="max-container py-16 px-6">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">USA Travel Etiquette & Taboos</h1>
      <p className="text-center text-lg text-gray-600 mb-12">Essential Do's and Don'ts for a smooth American experience</p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Do's */}
        <div className="bg-green-50 rounded-xl p-8 border border-green-200">
          <h2 className="text-3xl font-bold text-green-800 mb-6">✓ Do's</h2>
          <ul className="space-y-4 text-lg">
            <li className="flex items-start"><span className="text-green-600 font-bold mr-3">•</span> Smile and make small talk – friendliness appreciated</li>
            <li className="flex items-start"><span className="text-green-600 font-bold mr-3">•</span> Tip 15-20% in restaurants and services</li>
            <li className="flex items-start"><span className="text-green-600 font-bold mr-3">•</span> Respect personal space (arm's length)</li>
            <li className="flex items-start"><span className="text-green-600 font-bold mr-3">•</span> Be punctual for appointments</li>
            <li className="flex items-start"><span className="text-green-600 font-bold mr-3">•</span> Say "please" and "thank you" often</li>
            <li className="flex items-start"><span className="text-green-600 font-bold mr-3">•</span> Engage in casual conversation</li>
          </ul>
        </div>

        {/* Don'ts */}
        <div className="bg-red-50 rounded-xl p-8 border border-red-200">
          <h2 className="text-3xl font-bold text-red-800 mb-6">✗ Don'ts</h2>
          <ul className="space-y-4 text-lg">
            <li className="flex items-start"><span className="text-red-600 font-bold mr-3">•</span> Don't forget to tip service workers</li>
            <li className="flex items-start"><span className="text-red-600 font-bold mr-3">•</span> Don't discuss politics/religion unless invited</li>
            <li className="flex items-start"><span className="text-red-600 font-bold mr-3">•</span> Don't invade personal space</li>
            <li className="flex items-start"><span className="text-red-600 font-bold mr-3">•</span> Don't smoke in non-smoking areas</li>
            <li className="flex items-start"><span className="text-red-600 font-bold mr-3">•</span> Don't be late without notice</li>
            <li className="flex items-start"><span className="text-red-600 font-bold mr-3">•</span> Don't assume everyone shares your views</li>
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
