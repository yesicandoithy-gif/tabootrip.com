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
        <p className="text-xl mb-6">
          <strong>Email:</strong> your.email@example.com<br />
          <strong>Business Cooperation:</strong> business@tabootrip.com<br />
          <strong>WeChat:</strong> yourwechatid<br />
          <strong>Instagram:</strong> @tabootrip<br />
          <strong>Twitter/X:</strong> @tabootrip
        </p>

        <p className="text-lg text-gray-600">
          Looking forward to hearing from you!
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
