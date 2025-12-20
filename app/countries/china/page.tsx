"use client";

import React from "react";
import Image from "next/image";

export default function ChinaPage() {
  const doItems = [
    { icon: "😄👍", text: "Say 'Ni hao' with a smile – instant friend-maker!" },
    { icon: "😄👍", text: "Accept name cards with both hands – shows respect like a boss." },
    { icon: "😄👍", text: "Try street food – xiaolongbao and jianbing are life-changing! 🥟" },
    { icon: "😄👍", text: "Use WeChat Pay/Alipay – cash is so last century here." },
    { icon: "😄👍", text: "Toast with 'Ganbei!' – but sip if you can't handle baijiu!" },
    { icon: "😄👍", text: "Take photos of everything – memories and likes await!" },
    { icon: "😄👍", text: "Bargain at markets – it's expected and fun!" },
    { icon: "😄👍", text: "Remove shoes when visiting homes – keep it cozy." },
    { icon: "😄👍", text: "Be patient in queues – good things come to those who wait." },
    { icon: "😄👍", text: "Try hot pot – spicy or not, it's a social party!" },
    { icon: "😄👍", text: "Respect elders – offering seats on metro scores big points." },
    { icon: "😄👍", text: "Say 'Xie xie' often – thank you goes a long way!" },
  ];

  const dontItems = [
    { icon: "🙃👎", text: "Don't stick chopsticks upright in rice – looks like incense for the departed!" },
    { icon: "🙃👎", text: "Don't flip fish at table – bad luck for fishermen (oops!)." },
    { icon: "🙃👎", text: "Don't be late for dinners – food waits for no one!" },
    { icon: "🙃👎", text: "Don't tip – it's not custom and might confuse everyone." },
    { icon: "🙃👎", text: "Don't discuss sensitive politics – keep it light and fun." },
    { icon: "🙃👎", text: "Don't blow nose loudly in public – discreet is the way." },
    { icon: "🙃👎", text: "Don't point with feet – super impolite in Chinese culture." },
    { icon: "🙃👎", text: "Don't give clocks as gifts – sounds like 'attending funeral'!" },
    { icon: "🙃👎", text: "Don't wear shoes indoors – big cultural no-no." },
    { icon: "🙃👎", text: "Don't refuse food too many times – hosts love seeing empty plates!" },
    { icon: "🙃👎", text: "Don't split bills exactly – someone usually treats." },
    { icon: "🙃👎", text: "Don't take 'no' literally – sometimes it's polite refusal!" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-amber-50">
      {/* Header 图片 - 中国长城高清图 */}
      <div className="relative h-96 overflow-hidden">
        <Image
          src="/images/great-wall-header.jpg"  // 请上传高清长城图到 public/images/，命名 great-wall-header.jpg
          alt="Great Wall of China"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white text-center">China Etiquette & Taboos</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-xl text-center text-gray-700 mb-12">
          Explore China like a local with these fun tips – enjoy the culture and avoid awkward moments!
        </p>

        {/* Do's 卡片 */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-green-700 text-center mb-8">Do's 😄👍</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doItems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
                <p className="text-4xl mb-4 text-center">{item.icon}</p>
                <p className="text-lg text-gray-800 text-center">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Don'ts 卡片 */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-red-700 text-center mb-8">Don'ts 🙃👎</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dontItems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
                <p className="text-4xl mb-4 text-center">{item.icon}</p>
                <p className="text-lg text-gray-800 text-center">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => window.location.href = "/"}
            className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition shadow-lg"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
