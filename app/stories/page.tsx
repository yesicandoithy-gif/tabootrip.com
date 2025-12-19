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

      <div className="max-w-5xl mx-auto bg-white rounded-xl p-8 shadow-lg">
        {/* Tally 嵌入 - 支持投稿 + 自动显示所有投稿（像评论区） */}
        <iframe
          src="https://tally.so/r/BzKGMR"
          width="100%"
          height="1800"  // 调高一点，确保表单和投稿区完整显示
          frameBorder="0"
          className="rounded-lg"
        >
          正在加载…
        </iframe>

        <p className="text-center text-gray-600 mt-8">
          All stories below are shared by real travelers like you! Thank you for making TabooTrip a community.
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
