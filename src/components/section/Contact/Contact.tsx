"use client";
import Badge from "@/components/ui/Badge/Badge";
import React from "react";
import styles from "./styles.module.css";
import ContactList from "@/collections/ContactList";

const Contact = () => {
  return (
    <section itemScope itemType="https://www.volgashot.ru/contacts" className={styles.contact}>
      <div className={styles.contactContainer}>
        <Badge>📞 Связь с нами</Badge>
        <div className={styles.contactContent}>
          <h1 className={styles.contactTitle}>Способ связи и юридическая информация</h1>
          <h2 className={styles.contactTitleUr}>Общество с ограниченной ответственностью «VOLGASHOT»</h2>
          <h3 itemProp="name" className={styles.contactTitleUr}>ООО ПК «ВОЛГА ШОТ-М»</h3>
          <ul className={styles.contactItems}>
            <li className={styles.contactItem}>
              <span className={styles.contactSpan}>Расположение: </span>
              <span itemProp="streetAddress">400079, Волгоградская Область, г.о. Город-герой Волгоград, г Волгоград, ул Самарская, влд. 1, офис 1</span>
            </li>
            {ContactList.map(( item, index ) => {
              return (
                <li key={index} className={styles.contactItem}>
                  <span className={styles.contactSpan}>{item.title}</span>{item.value}
                </li>
              )
            })}
            <li className={styles.contactItem}>
              <span className={styles.contactSpan}>Способы связи: </span>
              <span itemProp="telephone">+7 978 588-06-48, </span>
              <span itemProp="faxNumber">+7 961 685-32-12</span>
            </li>
            <li className={styles.contactItem}>
              <span className={styles.contactSpan}>Email: </span>
              <span itemProp="email">arsavva@mail.ru</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
export default Contact;
