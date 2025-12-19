import React from "react";
import Link from "next/link";

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

      <div className="max-w-5xl mx-auto bg-white rounded-xl p-8 shadow-lg">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfRHfsfHLGF4N_NEjD87Os4Pf_K1Qr2C_lkiJVL6ESUKUWYNA/viewform?embedded=true"
          width="100%"
          height="1400"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          className="rounded-lg"
        >
          正在加载…
        </iframe>

        <p className="text-center text-gray-600 mt-8">
          We may feature the best stories on the site (with your permission)! Thank you for making TabooTrip a community.
        </p>
      </div>

      <div className="mt-12 text-center">
        {/* 可靠的 Back to Home 按钮：Link + legacyBehavior + a 标签 */}
        <Link href="/" legacyBehavior>
          <a className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 inline-block transition shadow-lg">
            Back to Home
          </a>
        </Link>
      </div>
    </div>
  );
}
