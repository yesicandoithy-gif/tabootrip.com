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
      return "/images/countries/japan.jpg";
    case "/countries/thailand":
      return "/images/countries/thailand.jpg";
    case "/countries/france":
      return "/images/countries/france.jpg";
    case "/countries/china":
      return "/images/countries/china.jpg";
    case "/countries/india":
      return "/images/countries/india.jpg";
    case "/countries/italy":
      return "/images/countries/italy.jpg";
    case "/countries/usa":
      return "/images/countries/usa.jpg";
    case "/countries/saudi-arabia":
      return "/images/countries/saudi-arabia.jpg";
    default:
      return "/images/countries/japan.jpg";
  }
};

export default function Home() {
  const [lang, setLang] = useState<"en" | "cn">("en");

  const t = {
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
