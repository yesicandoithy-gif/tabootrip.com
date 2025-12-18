import type { Metadata } from "next";
import { Inter, Pacifico } from "next/font/google";  // 添加 Pacifico
import "./globals.css";
import "./../components/Gallery/gallery.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// 配置 Inter 字体（原字体）
const inter = Inter({ subsets: ["latin"] });

// 配置 Pacifico 手写体（轻松愉快风格）
const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",  // CSS 变量，用于局部应用
});

export const metadata: Metadata = {
  title: "TabooTrip - Ready for an Amazing Journey?",
  description: "Your guide to joyful travel — learn cultural tips and avoid mishaps worldwide!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden">  {/* 建议改成 en，支持英文为主，也可改 zh */}
      <body className={`${inter.className} ${pacifico.variable}`}>
        {/* inter.className 作为全局默认字体，pacifico.variable 可在组件中局部使用 font-pacifico */}
        <div className="flexCenter flex-col">
          <Navbar />
          <main className="relative overflow-x-hidden w-[100vw] lg:w-full">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
