import React from "react";

export default function JapanPage() {
  return (
    <div className="max-container py-16 px-6">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Japan Travel Etiquette & Taboos</h1>
      <p className="text-center text-lg text-gray-600 mb-12">Essential Do's and Don'ts for a respectful and enjoyable trip</p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Do's - 绿色卡片 */}
        <div className="bg-green-50 rounded-xl p-8 border border-green-200">
          <h2 className="text-3xl font-bold text-green-800 mb-6">✓ Do's</h2>
          <ul className="space-y-4 text-lg">
            <li className="flex items-start"><span className="text-green-600 font-bold mr-3">•</span> Bow when greeting – a sign of respect</li>
            <li className="flex items-start"><span className="text-green-600 font-bold mr-3">•</span> Remove shoes before entering homes, ryokans, and some temples</li>
            <li className="flex items-start"><span className="text-green-600 font-bold mr-3">•</span> Be punctual – Japanese culture values time</li>
            <li className="flex items-start"><span className="text-green-600 font-bold mr-3">•</span> Use both hands when giving/receiving business cards or items</li>
            <li className="flex items-start"><span className="text-green-600 font-bold mr-3">•</span> Keep public spaces clean and quiet</li>
            <li className="flex items-start"><span className="text-green-600 font-bold mr-3">•</span> Slurp noodles – it's a compliment to the chef!</li>
          </ul>
        </div>

        {/* Don'ts - 红色卡片 */}
        <div className="bg-red-50 rounded-xl p-8 border border-red-200">
          <h2 className="text-3xl font-bold text-red-800 mb-6">✗ Don'ts</h2>
          <ul className="space-y-4 text-lg">
            <li className="flex items-start"><span className="text-red-600 font-bold mr-3">•</span> Don't tip – it's considered rude</li>
            <li className="flex items-start"><span className="text-red-600 font-bold mr-3">•</span> Don't wear shoes indoors</li>
            <li className="flex items-start"><span className="text-red-600 font-bold mr-3">•</span> Don't talk loudly on public transport</li>
            <li className="flex items-start"><span className="text-red-600 font-bold mr-3">•</span> Don't stick chopsticks upright in rice (funeral symbol)</li>
            <li className="flex items-start"><span className="text-red-600 font-bold mr-3">•</span> Don't blow your nose in public</li>
            <li className="flex items-start"><span className="text-red-600 font-bold mr-3">•</span> Don't point or gesture with chopsticks</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center">
        <a href="/" className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600">
          Back to Home
        </a>
      </div>
    </div>
  );
}
