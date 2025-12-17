import React from "react";

export default function FrancePage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">France Travel Etiquette & Taboos</h1>
      <p className="text-center text-lg text-gray-600 mb-12">Essential Do's and Don'ts for a pleasant French experience</p>

      <div className="grid md:grid-cols-2 gap-12">
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

        <div className="bg-red-50 rounded-xl p-8 border border-red-200">
          <h2 className="text-3xl font-bold text-red-800 mb-6">✗ Don'ts</h2>
          <ul className="space-y-4 text-lg">
            <li className="flex items
