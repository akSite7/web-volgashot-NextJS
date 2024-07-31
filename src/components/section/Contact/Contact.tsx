"use client"
import Badge from "@/components/ui/Badge/Badge";
import React from "react";
import styles from "./styles.module.css";
import ContactUi from "@/components/ui/ContactUi/ContactUi";

const Contact = () => {
  return (
    <section itemScope itemType="https://www.volgashot.ru/contacts" className={styles.contact}>
      <div className={styles.contactContainer}>
        <Badge>📞 Связь с нами</Badge>
        <div className={styles.contactContent}>
          <ContactUi />
        </div>
      </div>
    </section>
  )
}
export default Contact;