"use client";
import React from "react";
import styles from './styles.module.css';

const Map = () => {
  return (
    <section className={styles.map}>
      <div className={styles.mapContainer}>
        <iframe className={styles.mapFrame} src="https://yandex.ru/map-widget/v1/?um=constructor%3A1fbcb60904dd405a63d45bac9d7ab781319bdff014a39996025eff759169a180&amp;source=constructor" width="1440" height="360"></iframe>
      </div>
    </section>
  )
}
export default Map;