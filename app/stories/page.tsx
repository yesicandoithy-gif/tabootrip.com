import React from "react";

export default function StoriesPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 bg-gray-50 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Share Your Trip Story</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Have a funny, touching, or eye-opening travel moment? Share your cultural experiences, 
          mishaps you avoided (thanks to TabooTrip!), or tips you've learned on the road. 
          Your story could help fellow travelers smile more and stress less!
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-white rounded-xl p-8 shadow-lg">
        <form className="space-y-6">
          <div>
            <label className="block text-lg font-semibold mb-2">Your Name (or nickname)</label>
            <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500" placeholder="e.g. Wanderlust Jane" />
          </div>

          <div>
            <label className="block text-lg font-semibold mb-2">Country/Place of Your Story</label>
            <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500" placeholder="e.g. Thailand, Japan" />
          </div>

          <div>
            <label className="block text-lg font-semibold mb-2">Your Story</label>
            <textarea rows={8} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500" placeholder="Tell us your experience..."></textarea>
          </div>

          <div>
            <label className="block text-lg font-semibold mb-2">Email (optional, for featured stories)</label>
            <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500" placeholder="your@email.com" />
          </div>

          <div className="text-center">
            <button type="submit" className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600">
              Submit Your Story
            </button>
          </div>
        </form>

        <p className="text-center text-gray-600 mt-8">
          We may feature the best stories on the site (with your permission)! Thank you for making TabooTrip a community.
        </p>
      </div>

      <div className="mt-12 text-center">
        <a href="/" className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 inline-block">
          Back to Home
        </a>
      </div>
    </div>
  );
}
