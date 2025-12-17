import React, { useState } from "react";
import Link from "next/link";

const countries = [
  { name: "Japan", href: "/countries/japan", enName: "Japan", cnName: "日本" },
  { name: "Thailand", href: "/countries/thailand", enName: "Thailand", cnName: "泰国" },
  { name: "France", href: "/countries/france", enName: "France", cnName: "法国" },
  { name: "UAE", href: "/countries/uae", enName: "UAE", cnName: "阿联酋" },
  { name: "India", href: "/countries/india", enName: "India", cnName: "印度" },
  { name: "Italy", href: "/countries/italy", enName: "Italy", cnName: "意大利" },
  { name: "USA", href: "/countries/usa", enName: "USA", cnName: "美国" },
  { name: "Saudi Arabia", href: "/countries/saudi-arabia", enName: "Saudi Arabia", cnName: "沙特阿拉伯" },
];

export default function Home() {
  const [language, setLanguage] = useState<"en" | "cn">("en");
  const [searchTerm, setSearchTerm] = useState("");

  const t = (en: string, cn: string) => (language === "en" ? en : cn);

  const filteredCountries = countries.filter(country =>
    country.enName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    country.cnName.includes(searchTerm)
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (filteredCountries.length > 0) {
      window.location.href = filteredCountries[0].href;
    }
  };

  return (
    <>
      <Hero />

      {/* 语言切换按钮 */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setLanguage(language === "en" ? "cn" : "en")}
          className="bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition font-semibold"
        >
          {language === "en" ? "中文" : "English"}
        </button>
      </div>

      {/* 搜索框 + 热门国家 */}
      <section className="py-16 bg-gray-50">
        <div className="max-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            {t("Search for Country Etiquette", "搜索国家礼仪禁忌")}
          </h2>

          {/* 优化搜索框 */}
          <form onSubmit={handleSearch} className="flex justify-center mb-12 max-w-2xl mx-auto">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={t("Search Countries...", "搜索国家...")}
              className="w-full px-6 py-4 text-lg rounded-l-full border border-gray-300 focus:outline-none focus:border-green-500"
            />
            <button
              type="submit"
              className="bg-green-500 text-white px-8 py-4 rounded-r-full font-semibold hover:bg-green-600 transition"
            >
              {t("Search", "搜索")}
            </button>
          </form>

          <h3 className="text-2xl md:text-3xl font-semibold mb-8">
            {t("Popular Destinations", "热门目的地")}
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {countries.map((country) => (
              <Link key={country.name} href={country.href}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition cursor-pointer">
                  <img
                    src={country.name === "Japan" ? "https://images.unsplash.com/photo-1540959733332-1f0b6e5e3e0e?w=800" :
                         country.name === "Thailand" ? "https://images.unsplash.com/photo-1535461412892-2d3d7e9a0d0e?w=800" :
                         country.name === "France" ? "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800" :
                         country.name === "UAE" ? "https://images.unsplash.com/photo-1512453979798-5ea449e8a2e4?w=800" :
                         country.name === "India" ? "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800" :
                         country.name === "Italy" ? "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800" :
                         country.name === "USA" ? "https://images.unsplash.com/photo-1501594907352-04cda37ebc9b?w=800" :
                         "https://images.unsplash.com/photo-1512453979798-5ea449e8a2e4?w=800"}
                    alt={country.enName}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h4 className="text-xl font-bold">
                      {language === "en" ? country.enName : country.cnName}
                    </h4>
                    <p className="text-gray-600">
                      {t("Etiquette & Taboos", "礼仪与禁忌")}
                    </p>
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
