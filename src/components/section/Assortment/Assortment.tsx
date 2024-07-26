"use client"

import Badge from "@/components/ui/Badge/Badge";
import React from "react";
import styles from './styles.module.css';
import Fraction from "./Section/Fraction/Fraction";
import Buckshot from "./Section/Buckshot/Buckshot";
import Other from "./Section/Other/Other";

const Assortment = () => {
  return (
    <section className={styles.assortment}>
      <div className={styles.assortmentContainer}>
        <Badge>🛒 Наш ассортимент</Badge>
        <div className={styles.assortmentContent}>
          <div className="tab">
            <input defaultChecked className="pointer" type="radio" name="tab-btn" id="tab-btn-1" value=""/>
            <label className="pointer mr-5" htmlFor="tab-btn-1">Дробь</label>
            /
            <input className="pointer" type="radio" name="tab-btn" id="tab-btn-2" value=""/>
            <label className="pointer ml-5 mr-5" htmlFor="tab-btn-2">Картечь</label>
            /
            <input className="pointer" type="radio" name="tab-btn" id="tab-btn-3" value=""/>
            <label className="pointer ml-5" htmlFor="tab-btn-3">Прочее</label>
            <div className="tab-content grid grid-cols-4" id="content-1">
              <Fraction />
            </div>
            <div className="tab-content" id="content-2">
              <Buckshot />
            </div>
            <div className="tab-content" id="content-3">
              <Other />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Assortment;