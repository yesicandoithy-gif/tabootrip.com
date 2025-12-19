"use client";

import React, { useState } from "react";

export default function StoriesPage() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const submitForm = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const form = ev.target as HTMLFormElement;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();

    xhr.open("POST", "https://formspree.io/f/xlgrdwdr");  // 你的 Formspree endpoint
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    };
    xhr.send(data);
  };

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
        {/* 提交成功消息 */}
        {status === "success" && (
          <div className="text-center mb-8 p-8 bg-green-100 rounded-lg border border-green-300">
            <p className="text-3xl font-bold text-green-800 mb-4">Thank you! 🎉</p>
            <p className="text-xl text-green-700">Your story has been submitted successfully.<br />We'll review it soon and may feature it on TabooTrip!</p>
          </div>
        )}

        {/* 提交失败消息 */}
        {status === "error" && (
          <div className="text-center mb-8 p-8 bg-red-100 rounded-lg border border-red-300">
            <p className="text-2xl font-bold text-red-800 mb-4">Oops! Something went wrong.</p>
            <p className="text-lg text-red-700">Please try again later or contact us directly.</p>
          </div>
        )}

        {/* 表单（仅在未提交时显示） */}
        {status === "idle" && (
          <form onSubmit={submitForm} className="space-y-6">
            <div>
              <label className="block text-lg font-semibold mb-2">Your Name (or nickname) *</label>
              <input
                name="name"
                type="text"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                placeholder="e.g. Wanderlust Jane"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold mb-2">Country/Place of Your Story *</label>
              <input
                name="country"
                type="text"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                placeholder="e.g. Thailand, Paris"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold mb-2">Your Story *</label>
              <textarea
                name="story"
                rows={8}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                placeholder="Tell us your experience in detail..."
              />
            </div>

            <div>
              <label className="block text-lg font-semibold mb-2">Email (optional, for featured stories)</label>
              <input
                name="email"
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                placeholder="your@email.com"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-green-500 text-white px-10 py-4 rounded-full font-bold text-xl hover:bg-green-600 transition shadow-lg"
              >
                Submit Your Story
              </button>
            </div>
          </form>
        )}

        <p className="text-center text-gray-600 mt-8">
          We may feature the best stories on the site (with your permission)! Thank you for making TabooTrip a community.
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
