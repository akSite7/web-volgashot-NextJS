"use client"

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
                            VSHOT
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
                                    <Link href={'/other'} className={styles.footerPagesLink}>Прочее</Link>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.footerPagesContent}>
                            <h3 className={styles.footerPagesTitle}>Дополнительно</h3>
                            <ul className={styles.footerPagesItems}>
                                <li>
                                    <Link href={'/contacts'} className={styles.footerPagesLink}>Контакты</Link>
                                </li>
                                <li>
                                    <Link target="blank" href={'https://www.ozon.ru/brand/vshot-100972906/'} className={styles.footerPagesLink}>OZON</Link>
                                </li>
                                <li>
                                    <Link target="blank" href={'https://www.wildberries.ru/brands/310426872-vshot'} className={styles.footerPagesLink}>Wildberries</Link>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-full flex items-center justify-between gap-2 flex-col md:flex-row">
                    <p className="text-sm text-gray-500">&copy; {currentDate} VSHOT</p>
                </div>
            </div>
        </footer>
  )
}

export default Footer;