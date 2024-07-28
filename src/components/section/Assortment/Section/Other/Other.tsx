"use client"

import React from "react";
import styles from './styles.module.css';
import Image from "next/image";
import useOthers from "@/hooks/useOther";
import ButtonBuy from "@/components/ui/ButtonBuy/ButtonBuy";

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

const Other = () => {

  const getOther = useOthers()

  return (
    <section className={styles.assortment}>
      <div className={styles.assortmentContainer}>
        <h2 className={styles.assortmentTitle}>Прочее</h2>
        <p className={styles.assortmentText}>Прочие товары у нас в наличии</p>
        <div className={styles.assortmentContent}>
          {getOther.filter((item: Shot) => item.attributes.tag === 'Прочее').map((item: Shot, index) => (
              <>
                <div key={index}>
                  <Image className={styles.assortmentImageCard} width={700} height={0} src={process.env.NEXT_PUBLIC_STRAPI_API_URL + (item?.attributes?.image?.data.attributes?.url ?? '')} alt=""/>
                  <div className={styles.assortmentTitleCard}>{item.attributes?.title}</div>
                  <div className={styles.assortmentTextCard}>{item.attributes?.description}</div>
                  <div className={styles.assortmentPriceCard}>{item.attributes?.price}</div>
                  <ButtonBuy />
                </div>
              </>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Other;