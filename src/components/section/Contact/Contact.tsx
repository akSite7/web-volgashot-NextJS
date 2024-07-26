"use client"

import Badge from "@/components/ui/Badge/Badge";
import React from "react";
import styles from "./styles.module.css";

const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.contactContainer}>
        <Badge>📞 Связь с нами</Badge>
        <div className={styles.contactContent}>
          <h1 className={styles.contactTitle}>Наши контакты для связи</h1>
          <div>
            <ul>
              <li className={styles.contactItem}>
                <span className={styles.contactSpan}>Менеджер: </span>
                +7 939 101 99 79
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactSpan}>WhatsApp: </span>
                +7 938 101 99 79
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactSpan}>Viber: </span>
                +7 938 101 99 79
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactSpan}>Email: </span>
                arsavva@mail.ru
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;