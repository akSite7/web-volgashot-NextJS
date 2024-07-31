"use client"
import React from "react";
import styles from './styles.module.css';
import MapUi from "@/components/ui/MapUi/MapUi";

const Map = () => {
  return (
    <section className={styles.map}>
      <div className={styles.mapContainer}>
        <div className={styles.mapContent}>
          <MapUi/>
        </div>
      </div>
    </section>
  )
}
export default Map;