import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import head from "next/head";

const inter = Inter(
  { subsets: ["cyrillic"] }
);

export const metadata: Metadata = {
  title: "VSHOT - Продажа охотничьей дроби и картечи от производителя",
  description: "Специализированный онлайн магазин, который предлагает ассортимент дроби и картечи высокого качества для охотников, спортсменов и любителей стрелкового дела. На нашем сайте вы найдете разнообразные виды дроби и картечи. Мы гарантируем только оригинальную продукцию, которая отличается надежностью, точностью и безопасностью использования. Доверьтесь опыту и надежности VSHOT и наслаждайтесь покупками без лишних хлопот!",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>)   {
  return (
    <html lang="ru">
      <head>
        <meta name="yandex-verification" content="b4c10d78210ffc04" />
        <meta name="keywords" content="Дробь, Картечь, Охотничья от производителя, Охота"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="VSHOT - Продажа охотничьей дроби и картечи от производителя"/>
        <meta property="og:description" content="Специализированный онлайн магазин, который предлагает ассортимент дроби и картечи высокого качества для охотников, спортсменов и любителей стрелкового дела. На нашем сайте вы найдете разнообразные виды дроби и картечи. Мы гарантируем только оригинальную продукцию, которая отличается надежностью, точностью и безопасностью использования. Доверьтесь опыту и надежности VSHOT и наслаждайтесь покупками без лишних хлопот!"/>
        <meta property="og:url" content="https://volgashot.ru/"/>
      </head>
      <body className={inter.className + ' bg-background text-gray-400 text-base overflow-x-hidden'}>
        <div className="__next">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
