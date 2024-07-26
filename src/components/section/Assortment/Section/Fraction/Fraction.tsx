"use client"

import React from "react";
import styles from './styles.module.css';
import Image from "next/image";
import useFractions from "@/hooks/useFraction";

interface Shot {
  id: number;
  attributes: {
    item: any;
    tag: string;
    title: string;
    description: string;
    price: string;
    image: {
      data: {
        attributes: {
          url: string;
        }
      }
    }
  }
}

const Fraction = () => {

  const getFraction = useFractions()

  return (
    <section className={styles.assortment} id="assortment">
      <div className={styles.assortmentContainer}>
        <h2 className={styles.assortmentTitle}>Дробь</h2>
        <p className={styles.assortmentText}>Размеры соответствуют ГОСТ 7837-76 и имеют шаг 0,25 мм 
          <br />Возможность заказа от 2 килограмм.
        </p>
        <div className={styles.assortmentContent}>
          {getFraction.filter((item: Shot) => item.attributes.tag === 'Дробь').map((item: Shot, index) => (
              <>
                <div key={index}>
                  <Image className={styles.assortmentImageCard} width={700} height={0} src={process.env.NEXT_PUBLIC_STRAPI_API_URL + (item?.attributes?.image?.data.attributes?.url ?? '')} alt=""/>
                  <div className={styles.assortmentTitleCard}>{item.attributes?.title}</div>
                  <div className={styles.assortmentTextCard}>{item.attributes?.description}</div>
                  <div className={styles.assortmentPriceCard}>{item.attributes?.price}</div>
                </div>
              </>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Fraction;