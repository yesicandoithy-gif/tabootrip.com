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
  // ... 保持原有
};

export default function Home() {
  const [lang, setLang] = useState<"en" | "cn">("en");
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const t = {
    // ... 保持原有
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchQuery.trim();
    if (!query) return;

    // 先找已有8个国家
    const matched = countries.find(
      (c) =>
        c.en.toLowerCase() === query.toLowerCase() ||
        c.cn === query ||
        c.en.toLowerCase().includes(query.toLowerCase())
    );

    if (matched) {
      router.push(matched.href);
    } else {
      // 新国家 → 动态路由 /countries/vietnam
      const slug = query.toLowerCase().replace(/\s+/g, "-");
      router.push(`/countries/${slug}`);
    }
  };

  // ... return 部分保持不变（搜索框已可见）
}
