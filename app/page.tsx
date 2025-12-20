"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Hero } from "@/components/Hero/Hero";
import { useRouter } from "next/navigation";

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
      return "/images/fuji-header.jpg";
    case "/countries/thailand":
      return "/images/thailand-header.jpg";
    case "/countries/france":
      return "/images/france-header.jpg";
    case "/countries/china":
      return "/images/great-wall-header.jpg";
    case "/countries/india":
      return "/images/india-header.jpg";
    case "/countries/italy":
      return "/images/italy-header.jpg";
    case "/countries/usa":
      return "/images/usa-header.jpg";
    case "/countries/saudi-arabia":
      return "/images/saudi-header.jpg";
    default:
      return "/images/fuji-header.jpg";
  }
};

export default function Home() {
  const [lang, setLang] = useState<"en" | "cn">("en");
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const t = {
    heroTitle: lang === "en" ? "Ready for an Amazing Journey?" : "准备好开启一场奇妙旅程了吗？",
    heroSubtitle: lang === "en" ? "Your Guide to Travel Etiquette & Cultural Tips Worldwide" : "全球旅行礼仪与文化小贴士指南",
    searchPlaceholder: lang === "en" ? "Search for a country..." : "搜索国家...",
    searchBtn: lang === "en" ? "Search" : "搜索",
    popular: lang === "en" ? "Popular Destinations" : "热门目的地",
    cardSubtitle: lang === "en" ? "Etiquette & Taboos" : "礼仪与禁忌",
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchQuery.trim();
    if (!query) return;

    // 先尝试匹配已有8个国家
    const matched = countries.find(
      (c) =>
        c.en.toLowerCase() === query.toLowerCase() ||
        c.cn === query ||
        c.en.toLowerCase().includes(query.toLowerCase()) ||
        c.cn.includes(query)
    );

    if (matched) {
      // 匹配到已有国家 → 跳转专用页面
      router.push(matched.href);
    } else {
      // 未匹配 → 生成 slug 跳转动态 Coming Soon 页面
      const slug = query.toLowerCase().replace(/\s+/g, "-");
      router.push(`/countries/${slug}`);
    }
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
          {/* 搜索框 */}
          <form onSubmit={handleSearch} className="flex justify-center mb-16 max-w-2xl mx-auto">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full px-6 py-4 text-lg rounded-l-full border border-gray-300 focus:outline-none focus:border-green-500 shadow-md"
            />
            <button
              type="submit"
              className="bg-green-500 text-white px-8 py-4 rounded-r-full font-semibold hover:bg-green-600 transition shadow-md"
            >
              {t.searchBtn}
            </button>
          </form>
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
