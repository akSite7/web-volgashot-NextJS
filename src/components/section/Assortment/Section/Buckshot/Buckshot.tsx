"use client"

import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import useBuckshots from "@/hooks/useBuckshot";
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

const Buckshot = () => {

  const getBuckshot = useBuckshots()

  return (
    <section className={styles.assortment}>
      <div className={styles.assortmentContainer}>
        <h2 className={styles.assortmentTitle}>Картечь</h2>
        <p className={styles.assortmentText}> 
          Возможность заказа от 2 килограмм.
        </p>
        <div className={styles.assortmentContent}>
          {getBuckshot.filter((item: Shot) => item.attributes?.tag === 'Картечь').map((item: Shot, index) => (
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

export default Buckshot;