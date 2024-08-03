"use client";
import React from "react";
import Link from "next/link";
import styles from './styles.module.css';
import MenuList from "@/collections/MenuList";

const Header = () => {
  return (
    <header className={styles.header} id='header'>
      <div className={styles.headerContainer}>
        <div className={styles.headerLeft}>
          <Link className={styles.headerBrand} href={'/'}>
            VSHOT
          </Link>
          <nav className={styles.nav}>
            <menu className={styles.navMenu}>
              {MenuList.map(( item, index ) => {
                return (
                  <li key={index} className={styles.navItem}>
                    <Link href={item.href} className={styles.navLink}>{item.label}</Link>
                  </li>
                )
              })}
            </menu>
          </nav>
        </div>
        <div className={styles.headerMarketItem}>
          <Link target="blank" href={'https://www.wildberries.ru/brands/310426872-vshot'} className={styles.headerMarketLink}>
            Wildberries
          </Link>
          <Link target="blank" href={'https://www.ozon.ru/brand/vshot-100972906/'} className={styles.headerMarketLink}>
            Ozon
          </Link>
        </div>
      </div>
    </header>
  )
}
export default Header;