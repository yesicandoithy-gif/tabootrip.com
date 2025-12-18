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
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Mt_Fuji_from_Kitadake.jpg/800px-Mt_Fuji_from_Kitadake.jpg"; // 富士山经典
    case "/countries/thailand":
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Grand_Palace_Bangkok_Thailand.jpg/800px-Grand_Palace_Bangkok_Thailand.jpg"; // 曼谷大皇宫
    case "/countries/france":
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Eiffel_Tower_from_the_Tour_Eiffel_%281.jpg/800px-Eiffel_Tower_from_the_Tour_Eiffel_%281.jpg"; // 埃菲尔铁塔日景
    case "/countries/china":
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Forbidden_City_Beijing_Great_Wall_of_China.jpg/800px-Forbidden_City_Beijing_Great_Wall_of_China.jpg"; // 故宫全景
    case "/countries/india":
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Taj_Mahal_%28Edited%29.jpeg/800px-Taj_Mahal_%28Edited%29.jpeg"; // 泰姬陵晨光
    case "/countries/italy":
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Colosseum_in_Rome%2C_Italy_-_April_2007.jpg/800px-Colosseum_in_Rome%2C_Italy_-_April_2007.jpg"; // 罗马斗兽场
    case "/countries/usa":
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Statue_of_Liberty_2016.jpg/800px-Statue_of_Liberty_2016.jpg"; // 自由女神像
    case "/countries/saudi-arabia":
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Kaaba_in_Mecca_2023.jpg/800px-Kaaba_in_Mecca_2023.jpg"; // 麦加克尔白（尊重文化）
    default:
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Statue_of_Liberty_2016.jpg/800px-Statue_of_Liberty_2016.jpg";
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
