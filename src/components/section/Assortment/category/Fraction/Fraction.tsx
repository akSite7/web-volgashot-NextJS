"use client";
import React from "react";
import styles from './styles.module.css';
import Image from "next/image";
import useFractions from "@/hooks/useFractions";
import ButtonBuy from "@/components/ui/ButtonBuy/ButtonBuy";
import { Shot } from '@/components/ui/Interfaces/shot.interface';

const Fraction = () => {
  const getFraction = useFractions()
  return (
    <section className={styles.assortment}>
      <div className={styles.assortmentContainer}>
        <h2 className={styles.assortmentTitle}>Дробь</h2>
        <p className={styles.assortmentDescription}>Размеры соответствуют ГОСТ 7837-76 и имеют шаг 0,25 мм <br />Возможность заказа от 2 килограмм.</p>
        <div className={styles.assortmentCard}>
          {getFraction.filter((item: Shot) => item.attributes.tag === 'Дробь').map((item: Shot, index) => (
            <div key={index}>
              <Image className={styles.assortmentCardImage} width={700} height={0} src={process.env.NEXT_PUBLIC_STRAPI_API_URL + (item?.attributes?.image?.data.attributes?.url ?? '')} alt=""/>
              <div className={styles.assortmentCardTitle}>{item.attributes?.title}</div>
              <div className={styles.assortmentCardDescription}>{item.attributes?.description}</div>
              <div className={styles.assortmentCardPrice}>{item.attributes?.price}<span className={styles.assortmentInfoPrice}> за 1кг</span></div>
              <ButtonBuy />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Fraction;