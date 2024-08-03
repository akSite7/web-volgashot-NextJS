"use client";
import React from "react";
import styles from './styles.module.css';
import Image from "next/image";
import useOthers from "@/hooks/useOthers";
import ButtonBuy from "@/components/ui/ButtonBuy/ButtonBuy";
import { Shot } from '@/components/ui/Interfaces/shot.interface';

const Other = () => {
  const getOther = useOthers()
  return (
    <section className={styles.assortment}>
      <div className={styles.assortmentContainer}>
        <h2 className={styles.assortmentTitle}>Прочее</h2>
        <p className={styles.assortmentDescription}>Прочие товары у нас в наличии</p>
        <div className={styles.assortmentCard}>
          {getOther.filter((item: Shot) => item.attributes.tag === 'Прочее').map((item: Shot, index) => (
            <div key={index}>
              <Image className={styles.assortmentCardImage} width={700} height={0} src={process.env.NEXT_PUBLIC_STRAPI_API_URL + (item?.attributes?.image?.data.attributes?.url ?? '')} alt=""/>
              <div className={styles.assortmentCardTitle}>{item.attributes?.title}</div>
              <div className={styles.assortmentCardDescription}>{item.attributes?.description}</div>
              <div className={styles.assortmentCardPrice}>{item.attributes?.price}</div>
              <ButtonBuy />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Other;