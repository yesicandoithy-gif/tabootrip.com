"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Hero } from "@/components/Hero/Hero";

const countries = [
  { href: "/countries/japan", en: "Japan", cn: "日本" },
  { href: "/countries/thailand", en: "Thailand", cn: "泰国" },
  { href: "/countries/france", en: "France", cn: "法国" },
  { href: "/countries/china", en: "China", cn: "中国" },
  { href: "/countries/india", en: "India", cn: "印度" },
  { href: "/countries/italy", en: "Italy", cn: "意大利" },
  { href: "/countries/usa", en: "USA", cn: "美国" },
  { href: "/countries/saudi-arabia", en: "Saudi Arabia", cn: "沙特阿拉伯" },
];

const getCountryImage = (href: string) => {
  switch (href) {
    case "/countries/japan":
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_most_popular_tourist_destination_in_Japan%2C_Mount_Fuji.jpg/800px-The_most_popular_tourist_destination_in_Japan%2C_Mount_Fuji.jpg"; // 富士山樱花季
    case "/countries/thailand":
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Grand_Palace_Bangkok_Thailand.jpg/800px-Grand_Palace_Bangkok_Thailand.jpg"; // 曼谷大皇宫
    case "/countries/france":
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Tour_Eiffel_%28Paris%29_-_panoramio.jpg/800px-Tour_Eiffel_%28Paris%29_-_panoramio.jpg"; // 埃菲尔铁塔日景
    case "/countries/china":
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Forbidden_City_Beijing.jpg/800px-Forbidden_City_Beijing.jpg"; // 北京故宫
    case "/countries/india":
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Taj_Mahal_%28Edited%29.jpeg/800px-Taj_Mahal_%28Edited%29.jpeg"; // 泰姬陵
    case "/countries/italy":
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Colosseum_in_Rome%2C_Italy_-_April_2007.jpg/800px-Colosseum_in_Rome%2C_Italy_-_April_2007.jpg"; // 罗马斗兽场
    case "/countries/usa":
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Statue_of_Liberty_2016.jpg/800px-Statue_of_Liberty_2016.jpg"; // 自由女神像
    case "/countries/saudi-arabia":
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Kaaba_at_night.jpg/800px-Kaaba_at_night.jpg"; // 麦加克尔白夜景
    default:
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Statue_of_Liberty_2016.jpg/800px-Statue_of_Liberty_2016.jpg";
  }
};

export default function Home() {
  const [lang, setLang] = useState<"en" | "cn">("en");

  const t = {
    heroTitle: lang === "en" ? "Ready for an Amazing Journey?" : "准备好开启一场奇妙旅程了吗？",
    heroSubtitle: lang === "en" ? "Your Guide to Travel Etiquette & Cultural Tips Worldwide" : "全球旅行礼仪与文化小贴士指南",
    searchPlaceholder: lang === "en" ? "Search Countries..." : "搜索国家...",
    searchBtn: lang === "en" ? "Search" : "搜索",
    popular: lang === "en" ? "Popular Destinations" : "热门目的地",
    cardSubtitle: lang === "en" ? "Etiquette & Taboos" : "礼仪与禁忌",
  };

  return (
    <>
      <Hero />

      {/* 语言切换按钮 */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setLang(lang === "en" ? "cn" : "en")}
          className="bg-white text-gray-800 px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition font-semibold"
        >
          {lang === "en" ? "中文" : "English"}
        </button>
      </div>

      {/* 热门国家卡片 */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold mb-8">
            {t.popular}
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {countries.map((country) => (
              <Link key={country.href} href={country.href}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition cursor-pointer">
                  <img
                    src={getCountryImage(country.href)}
                    alt={lang === "en" ? country.en : country.cn}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h4 className="text-xl font-bold">
                      {lang === "en" ? country.en : country.cn}
                    </h4>
                    <p className="text-gray-600">{t.cardSubtitle}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
