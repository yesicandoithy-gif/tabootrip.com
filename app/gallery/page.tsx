import React from "react";

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 bg-gray-50 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Trip Gallery</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Beautiful moments from travelers around the world. Share your stunning photos and inspire others!
        </p>
        <p className="text-lg text-gray-600 mt-4">
          (Photo upload feature coming soon — stay tuned!)
        </p>
      </div>

      {/* 临时占位相册网格，后期换真实照片 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-gray-200 rounded-xl overflow-hidden shadow-lg h-64 flex items-center justify-center">
            <p className="text-gray-500 text-xl">Beautiful Photo {i}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a href="/" className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 inline-block">
          Back to Home
        </a>
      </div>
    </div>
  );
}
