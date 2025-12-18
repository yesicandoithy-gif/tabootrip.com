import React from "react";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 bg-gray-50 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">About TabooTrip</h1>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* English Version */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-green-800">English</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Hey there, fellow wanderer!
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Travel is one of life’s greatest joys — those moments when you step into a new culture, taste unfamiliar flavors, and feel the pulse of a place far from home. But sometimes, a small unintentional gesture or habit can turn a beautiful experience into an awkward one. We’ve all been there, or at least feared it.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            That’s why I created TabooTrip — a little companion for curious travelers like you. Before you pack your bags, take a quick look here to discover the gentle do’s and don’ts of the places you’re about to visit. From the art of greeting in France to the respectful way to enter a temple in Thailand — we’ve gathered the essential cultural tips and taboos so you can travel with confidence and grace.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            My only wish is that you avoid those needless little embarrassments, slip more easily into local life, and come home with nothing but wonderful stories and happy memories.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-6 font-semibold">
            Safe travels, and may every journey bring you more smiles than surprises!
          </p>
          <p className="text-right text-gray-600 mt-6">
            With warm wishes,<br />
            The friend behind TabooTrip
          </p>
        </div>

        {/* Chinese Version */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-green-800">中文</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            亲爱的旅行者朋友，
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            旅行是人生最美的礼物之一——当你置身异国他乡，品尝陌生的味道，感受遥远地方的心跳，那种感觉无比美妙。可有时，一个无心的举动或习惯，却可能让这份美好瞬间变得尴尬。我们都曾担心过，或者亲身经历过那样的瞬间。
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            所以，我创建了 TabooTrip —— 一个为像你一样热爱探索的人准备的小伙伴。在收拾行囊前，来这里悄悄看一眼目的地那些温馨的“宜”与“忌”吧。从法国的优雅问候，到泰国寺庙的恭敬入门；从意大利的手势艺术，到日本的餐桌礼仪——我们收集了最实用的文化小贴士和禁忌，只为让你出行时多一份从容与自信。
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            我唯一的愿望，就是让你避开那些本可避免的小尴尬，更自然地融入当地生活，带回满满的欢笑与美好回忆，而不是遗憾。
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-6 font-semibold">
            愿每一次旅途，都多一些惊喜的笑容，少一些意外的窘迫。
          </p>
          <p className="text-right text-gray-600 mt-6">
            一路平安，愿你的旅程永远快乐！<br />
            TabooTrip 的朋友<br />
            温暖问好
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <a href="/" className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 inline-block">
          Back to Home
        </a>
      </div>
    </div>
  );
}
