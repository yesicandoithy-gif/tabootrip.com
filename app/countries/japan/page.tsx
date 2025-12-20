import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function JapanPage() {
  const doItems = [
    { icon: "😄👍", text: "Bow when greeting – shows respect and makes you look polite!" },
    { icon: "😄👍", text: "Remove shoes indoors – keeps everything clean and cozy." },
    { icon: "😄👍", text: "Be punctual – Japanese love timeliness, you'll fit right in!" },
    { icon: "😄👍", text: "Use both hands for gifts/cards – extra respectful vibe." },
    { icon: "😄👍", text: "Keep quiet in public transport – zen mode for everyone." },
    { icon: "😄👍", text: "Slurp noodles loudly – it's a compliment to the chef! 🍜" },
    { icon: "😄👍", text: "Carry cash – many places prefer it over cards." },
    { icon: "😄👍", text: "Try onsen (hot springs) – relaxing and cultural must-do!" },
    { icon: "😄👍", text: "Say 'Itadakimasu' before eating – grateful and cute." },
    { icon: "😄👍", text: "Queue neatly – Japanese are pros at orderly lines." },
    { icon: "😄👍", text: "Use trash bins properly – recycle like a local!" },
    { icon: "😄👍", text: "Smile and be polite – kindness goes far!" },
  ];

  const dontItems = [
    { icon: "🙃👎", text: "Don't tip – it's seen as rude, service is already top-notch!" },
    { icon: "🙃👎", text: "Don't wear shoes indoors – big no-no, oops moment!" },
    { icon: "🙃👎", text: "Don't talk loudly on trains – silent mode please." },
    { icon: "🙃👎", text: "Don't stick chopsticks upright in rice – funeral vibe, avoid!" },
    { icon: "🙃👎", text: "Don't blow nose in public – discreet tissue time." },
    { icon: "🙃👎", text: "Don't point with chopsticks – impolite gesture." },
    { icon: "🙃👎", text: "Don't eat while walking – save it for sitting." },
    { icon: "🙃👎", text: "Don't hug strangers – bowing is the way." },
    { icon: "🙃👎", text: "Don't be late – punctuality is king!" },
    { icon: "🙃👎", text: "Don't litter – Japan is spotless for a reason." },
    { icon: "🙃👎", text: "Don't take photos without permission in sacred places." },
    { icon: "🙃👎", text: "Don't skip 'Arigato' – always say thank you!" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-green-50">
      {/* Header 图片 */}
      <div className="relative h-96 overflow-hidden">
        <Image
          src="https://www.cloud-europamundo.com/img/carousel/hd/Monte%20Fuji_20210321192312.jpg"  // 富士山美图
          alt="Mount Fuji Japan"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white text-center">Japan Etiquette & Taboos</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-xl text-center text-gray-700 mb-12">
          Navigate Japan like a pro with these fun tips – respect the culture and have an amazing trip!
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
        <div>
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

        <div className="mt-16 text-center">
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
