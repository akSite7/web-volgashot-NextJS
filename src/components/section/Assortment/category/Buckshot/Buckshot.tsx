"use client"
import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import useBuckshots from "@/hooks/useBuckshots";
import ButtonBuy from "@/components/ui/ButtonBuy/ButtonBuy";
import { Shot } from '@/components/ui/Interfaces/shot.interface';

const Buckshot = () => {
  const getBuckshot = useBuckshots()
  return (
    <section className={styles.assortment}>
      <div className={styles.assortmentContainer}>
        <h2 className={styles.assortmentTitle}>Картечь</h2>
        <p className={styles.assortmentDescription}>Возможность заказа от 2 килограмм.</p>
        <div className={styles.assortmentCard}>
          {getBuckshot.filter((item: Shot) => item.attributes.tag === 'Картечь').map((item: Shot, index) => (
            <div key={index}>
              <Image className={styles.assortmentCardImage} width={700} height={0} src={process.env.NEXT_PUBLIC_STRAPI_API_URL + (item?.attributes?.image?.data.attributes?.url ?? '')} alt=""/>
              <div className={styles.assortmentCardTitle}>{item.attributes?.title}</div>
              <div className={styles.assortmentCardDescription}>{item.attributes?.description}</div>
              <div className={styles.assortmentCardPrice}>
                {item.attributes?.price}
                <span className={styles.assortmentPriceInfo}> за 1кг</span>
              </div>
              <ButtonBuy />
            </div>
            ))}
        </div>
      </div>
    </section>
  )
}
export default Buckshot;