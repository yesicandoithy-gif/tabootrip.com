"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Hero } from "@/components/Hero/Hero";  // 改成命名导入 { Hero }

const countries = [
  { href: "/countries/japan", en: "Japan", cn: "日本" },
  { href: "/countries/thailand", en: "Thailand", cn: "泰国" },
  { href: "/countries/france", en: "France", cn: "法国" },
  { href: "/countries/uae", en: "UAE", cn: "阿联酋" },
  { href: "/countries/india", en: "India", cn: "印度" },
  { href: "/countries/italy", en: "Italy", cn: "意大利" },
  { href: "/countries/usa", en: "USA", cn: "美国" },
  { href: "/countries/saudi-arabia", en: "Saudi Arabia", cn: "沙特阿拉伯" },
];

export default function Home() {
  const [lang, setLang] = useState<"en" | "cn">("en");

  const t = {
    heroTitle: lang === "en" ? "Avoid Cultural Taboos Abroad" : "避免国外文化禁忌",
    heroSubtitle: lang === "en" ? "Your Guide to Travel Etiquette & Cultural Tips Worldwide" : "全球旅行礼仪与文化提示指南",
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

      {/* 搜索框 + 热门国家卡片 */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            {t.heroTitle}
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            {t.heroSubtitle}
          </p>

          <div className="flex justify-center mb-12 max-w-2xl mx-auto">
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              className="w-full px-6 py-4 text-lg rounded-l-full border border-gray-300 focus:outline-none focus:border-green-500"
            />
            <button className="bg-green-500 text-white px-8 py-4 rounded-r-full font-semibold hover:bg-green-600">
              {t.searchBtn}
            </button>
          </div>

          <h3 className="text-2xl md:text-3xl font-semibold mb-8">
            {t.popular}
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {countries.map((country) => (
              <Link key={country.href} href={country.href}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition cursor-pointer">
                  <div className="bg-gray-200 h-48 w-full" /> {/* 临时占位图 */}
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
