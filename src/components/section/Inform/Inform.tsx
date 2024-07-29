"use client"

import useInforms from "@/hooks/useInforms";
import Image from "next/image";
import React from "react";
import styles from './styles.module.css';
import Badge from "@/components/ui/Badge/Badge";

interface Shot {
  id: number;
  attributes: {
    item: any;
    title: string;
    text: string;
    image: {
      data: {
        attributes: {
          url: string;
        }
      }
    }
  }
}

const Inform = (inform) => {

  const getInform = useInforms()

  return (
    <section className={styles.inform} key={inform}>
      <div className={styles.informContainer}>
        <Badge>📌 Важная информация</Badge>
        <h1 className={styles.informTitleMain}>
          Доставку осуществляем всеми транспортными
          <br />компаниями по согласованию.
        </h1>
        <p className={styles.informDescription}>
          Принимаем заказы от 1 000 рублей.
          <br />Оптовые продажи обсуждаются отдельно.
        </p>
        <div>
          <iframe className={styles.informMap} src="https://yandex.ru/map-widget/v1/?um=constructor%3A92b6eaf7aeeef7a05e46dab06fba460a19fa79c3730e02b7c9ff151b84ec4583&amp;source=constructor" width="1440" height="360"></iframe>
        </div>
        <ul className={styles.informGrid}>
          {getInform.map((item: Shot, index) => (
            <li key={index}>
              <div className={styles.informCard} >
                <Image className={styles.informImage} width={85} height={0} src={process.env.NEXT_PUBLIC_STRAPI_API_URL + (item?.attributes?.image?.data.attributes?.url ?? '')} alt=""/>
                <div className={styles.informTitle}>{item.attributes?.title}</div>
                <div className={styles.informText}>{item.attributes?.text}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Inform;