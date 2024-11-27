"use client";
import React from "react";
import Badge from "@/components/ui/Badge/Badge";
import Link from "next/link";
import styles from './styles.module.css';
import Image from "next/image";

const Intro = () => {
  return (
    <section className={styles.intro}>
      <div className={styles.introContainer}>
        <div className={styles.introContent}>
          <ul className={styles.introList}>
            <li>
              <div className={styles.introLeft}>
                <Badge>🔨 У нас лучшее качество</Badge>
                <h1 className={styles.introTitle}>Производство и продажа оружейной Дроби, Картечи свинцовой охотничьей.</h1>
                <div className={styles.introBottom}>
                  <p className={styles.introText}>Наше производство специализируется на продаже оружейной дроби высокого качества для различных видов стрелкового оружия. Мы предлагаем широкий ассортимент дроби и картечи от производителя, что позволяет нашим клиентам выбрать подходящий вариант для своих нужд.</p>
                  <ul className={styles.introActions}>
                    <li className={styles.introActionItem}>
                      <Link href={'#assortment'} className={styles.introActionPrimary}>Посмотреть ассортимент</Link>
                    </li>
                    <li className={styles.introActionItem}> 
                      <Link target="blank" href={'https://www.ozon.ru/product/drob-ohotnichya-svintsovaya-3-shot-12kg-volgashot-1711160146/?asb2=MofHjsS1efMBm5YoIJQXxcp0n7PCx7Lj0v3tj7S47aGSM5Mo81qa5m0IS21YKgnDmeJsxj-flRrohiATbJXGzg&from_sku=1711158373&from_url=https%3A%2F%2Fwww.ozon.ru%2Fcategory%2Faksessuary-i-hranenie-oruzhiya-33147%2F%3Fcategory_was_predicted%3Dtrue%26amp%3Bdeny_category_prediction%3Dtrue%26amp%3Bfrom_global%3Dtrue%26amp%3Btext%3Dдробь+охотничья&oos_search=false&tab=reviews'} className={styles.introActionOutline}>Отзывы</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li >
              <Image  alt="Картинка оружия" className={styles.introImage} width={2000} height={0} src="/assets/img/intro/gun.svg"></Image>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Intro;
