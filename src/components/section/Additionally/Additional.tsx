"use client";
import useAdditionally from "@/hooks/useAdditionally";
import Image from "next/image";
import React from "react";
import styles from './styles.module.css';
import { Info } from '@/components/ui/Interfaces/info.interface';

const Additional = () => {
  const getAdditional = useAdditionally()
  return (
    <section className={styles.inform}>
      <div className={styles.informContainer}>
        <h3 className={styles.informTitle}>Доставку осуществляем всеми транспортными <br />компаниями по согласованию.</h3>
        <p className={styles.informDescription}>Принимаем заказы от 2кг. <br />Оптовые продажи обсуждаются отдельно.</p>
        <div className={styles.informArticles}>
          <ul className={styles.informItems}>
          {getAdditional.map((item: Info, index) => (
              <li className={styles.informItem} key={index}>
                <Image className={styles.informImage} width={85} height={0} src={process.env.NEXT_PUBLIC_STRAPI_API_URL + (item?.attributes?.image?.data.attributes?.url ?? '')} alt="Информация"/>
                <div className={styles.informSubTitle}>{item.attributes?.title}</div>
                <div className={styles.informText}>{item.attributes?.text}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
export default Additional;