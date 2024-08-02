import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import head from "next/head";
import YandexMetrikaContainer from "@/components/metrika/metrika";

const inter = Inter(
  { subsets: ["cyrillic"] }
);

export const metadata: Metadata = {
  title: "VSHOT - Продажа охотничьей дроби и картечи от производителя",
  description: "Специализированный онлайн магазин, который предлагает ассортимент охотничьей дроби и картечи от производителя высокого качества для охотников, спортсменов и любителей стрелкового дела. На нашем сайте вы найдете разнообразные виды дроби и картечи. Мы гарантируем только оригинальную продукцию, которая отличается надежностью, точностью и безопасностью использования. Доверьтесь опыту и надежности VSHOT (VOLGASHOT) и наслаждайтесь покупками без лишних хлопот!",
};

const analyticsEnabled = !!(process.env.NODE_ENV === "production");

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>)   {
  return (
    <html lang="ru">
      <head>
        <meta name="yandex-verification" content="b4c10d78210ffc04" />
        <meta name="keywords" content="Дробь, Картечь, Охотничья от производителя, Охота"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://volgashot.ru/"/>
        <link rel='icon' href='https://volgashot.ru/favicon.ico' type="image/x-icon"/>
      </head>
      <body className={inter.className + ' bg-background text-gray-400 text-base overflow-x-hidden'}>
        <div className="__next">
          <Header />
            {children}
          <Footer />
        </div>
        <YandexMetrikaContainer enabled={analyticsEnabled} />
      </body>
    </html>
  );
}
