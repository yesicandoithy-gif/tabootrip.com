import React from "react";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 bg-gray-50 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Contact Me</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          For business inquiries, collaborations, or just to say hello!
        </p>
      </div>

      <div className="max-w-2xl mx-auto bg-white rounded-xl p-8 shadow-lg text-center">
        <p className="text-xl mb-6 space-y-4">
          <div>
            <strong>Email:</strong> <a href="mailto:cavtim@gmail.com" className="text-green-600 hover:underline">cavtim@gmail.com</a>
          </div>
          <div>
            <strong>Business Cooperation:</strong> <a href="mailto:cavtim@gmail.com" className="text-green-600 hover:underline">cavtim@gmail.com</a>
          </div>
          <div>
            <strong>Instagram:</strong> <a href="https://www.instagram.com/bobolong288" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">@bobolong288</a>
          </div>
          <div>
            <strong>Twitter/X:</strong> <a href="https://twitter.com/smartTrave29340" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">@smartTrave29340</a>
          </div>
        </p>

        <p className="text-lg text-gray-600">
          Looking forward to hearing from you!
        </p>
      </div>

      <div className="mt-12 text-center">
        <button
          onClick={() => window.location.href = "/"}
          className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 inline-block transition shadow-lg"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
