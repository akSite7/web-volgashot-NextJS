"use client";
import React from "react";
import Badge from "@/components/ui/Badge/Badge";
import Link from "next/link";
import styles from './styles.module.css';

const Intro = () => {
  return (
    <section className={styles.intro}>
      <div className={styles.introContainer}>
        <Badge>🔨 У нас лучшее качество</Badge>
        <div className={styles.introContent}>
          <div className={styles.introLeft}>
            <h1 className={styles.introTitle}>Производство и продажа оружейной Дроби, Картечи свинцовой охотничьей.</h1>
            <div className={styles.introBottom}>
              <p className={styles.introText}>Наше производство специализируется на продаже оружейной дроби высокого качества для различных видов стрелкового оружия. Мы предлагаем широкий ассортимент дроби различного от производителя, что позволяет нашим клиентам выбрать подходящий вариант для своих нужд.</p>
              <ul className={styles.introActions}>
                <li className={styles.introActionItem}>
                  <Link href={'#assortment'} className={styles.introActionPrimary}>Посмотреть ассортимент</Link>
                </li>
                <li className={styles.introActionItem}> 
                  <Link target="blank" href={'https://www.ozon.ru/product/drob-ohotnichya-svintsovaya-5-2kg-656480919/?_bctx=CAMQ6vKSMA&asb=nuYIZjlG4Gsnb%252BYe75dLrGWaysTnhSNn8Qq6AwcAYDg%253D&asb2=zcwZvtEYuYCxOe71-OEdj6W8xpR1COyqjxTzPggiCHuhP9NBoMVhZVm_9M4Qlw5n&avtc=1&avte=2&avts=1718916690&tab=reviews&reviewVuuid=0185a207-9533-e834-f6a9-13a8bd27bfb9&itemId=656518150&reviewsVariantMode=2'} className={styles.introActionOutline}>Отзывы</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Intro;