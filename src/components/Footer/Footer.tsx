"use client";
import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";

const Footer = () => {
  const date = new Date();
  const currentDate = date.getFullYear();
  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <Link href={'/'} className={styles.footerLogo}>
              VOLGASHOT
            </Link>
            <p className={styles.footerDesc}>Мы надеемся что после приобретения нашей продукции у вас останутся только положительные эмоции. Мы работаем над тем, чтобы наши товары были высокого качества. В случае каких-либо проблем или вопросов, пожалуйста, не стесняйтесь обращаться к нам.</p>
          </div>
          <div className={styles.footerPages}>
            <div className={styles.footerPagesContent}>
              <h3 className={styles.footerPagesTitle}>Основные разделы</h3>
              <ul className={styles.footerPagesItems}>
                <li>
                    <Link href={'/fractions'} className={styles.footerPagesLink}>Дробь</Link>
                </li>
                <li>
                    <Link href={'/buckshots'} className={styles.footerPagesLink}>Картечь</Link>
                </li>
                <li>
                    <Link href={'/contacts'} className={styles.footerPagesLink}>Контакты</Link>
                </li>
              </ul>
            </div>
            <div className={styles.footerPagesContent}>
              <h3 className={styles.footerPagesTitle}>Дополнительно</h3>
              <ul className={styles.footerPagesItems}>
                <li>
                    <Link target="blank" href={'https://www.ozon.ru/seller/volgashot-2290576/'} className={styles.footerPagesLink}>OZON</Link>
                </li>
                <li>
                    <Link target="blank" href={'https://www.wildberries.ru/seller/4306216#c287942850'} className={styles.footerPagesLink}>Wildberries</Link>
                </li>
                <li>
                    <Link target="blank" href={'https://market.yandex.ru/business--volgashot/157927988'} className={styles.footerPagesLink}>Яндекс Маркет</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-between gap-2 flex-col md:flex-row">
          <p className="text-sm text-gray-500">&copy; {currentDate} VOLGASHOT</p>
        </div>
      </div>
    </footer>
  )
}
export default Footer;
