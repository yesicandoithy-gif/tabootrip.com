import React from "react";

export default function IndiaPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">India Travel Etiquette & Taboos</h1>
      <p className="text-center text-lg text-gray-600 mb-12">Essential Do's and Don'ts for a respectful journey in India</p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Do's */}
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

        {/* Don'ts */}
        <div className="bg-red-50 rounded-xl p-
