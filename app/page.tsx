import React from "react";
import Link from "next/link";

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

const translations = {
  en: {
    heroTitle: "Avoid Cultural Taboos Abroad",
    heroSubtitle: "Your Guide to Travel Etiquette & Cultural Tips Worldwide",
    searchPlaceholder: "Search Countries...",
    searchBtn: "Search",
    popular: "Popular Destinations",
    cardSubtitle: "Etiquette & Taboos",
  },
  cn: {
    heroTitle: "避免国外文化禁忌",
    heroSubtitle: "全球旅行礼仪与文化提示指南",
    searchPlaceholder: "搜索国家...",
    searchBtn: "搜索",
    popular: "热门目的地",
    cardSubtitle: "礼仪与禁忌",
  },
};

export default function Home({ params: { lang = "en" } }: { params?: { lang: "en" | "cn" } }) {
  const currentLang = lang === "cn" ? "cn" : "en";
  const t = translations[currentLang];

  return (
    <>
      {/* Hero 区 - 标题切换 */}
      <section className="relative h-screen">
        {/* 背景视频保持不变 */}
        <div className="absolute inset-0">
          {/* 你的 Video 组件或背景 */}
        </div>

        <div className="relative z-10 flex flex-col items-start justify-center h-full max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            {t.heroTitle}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl">
            {t.heroSubtitle}
          </p>
          <button className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600">
            {t.searchBtn}
          </button>
        </div>

        {/* 语言切换按钮 */}
        <div className="fixed top-4 right-4 z-50">
          <Link href={currentLang === "en" ? "/cn" : "/"}>
            <button className="bg-white text-gray-800 px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition font-semibold">
              {currentLang === "en" ? "中文" : "English"}
            </button>
          </Link>
        </div>
      </section>

      {/* 搜索框 + 卡片 */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 text-center">
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

          <h3 className="text-3xl font-bold mb-8">
            {t.popular}
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {countries.map((country) => (
              <Link key={country.href} href={country.href}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition cursor-pointer">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48" />
                  <div className="p-4 text-center">
                    <h4 className="text-xl font-bold">
                      {currentLang === "en" ? country.en : country.cn}
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
