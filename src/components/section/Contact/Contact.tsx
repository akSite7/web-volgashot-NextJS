"use client"

import Badge from "@/components/ui/Badge/Badge";
import React from "react";
import styles from "./styles.module.css";

const Contact = () => {
  return (
    <section itemscope itemtype="https://www.volgashot.ru/contacts" className={styles.contact}>
      <div className={styles.contactContainer}>
        <Badge>📞 Связь с нами</Badge>
        <div className={styles.contactContent}>
          <h1 className={styles.contactTitle}>Способ связи и юридическая информация</h1>
          <div >
            <h2 className={styles.contactTitleUr}>Общество с ограниченной ответственностью «VOLGASHOT»</h2>
            <h3 itemprop="name" className={styles.contactTitleUr}>ООО ПК «ВОЛГА ШОТ-М»</h3>
            <ul className={styles.contactUr}>
              <li className={styles.contactItem}>
                <span className={styles.contactSpan}>Юридический адрес: </span>
                <span itemprop="streetAddress">400079, Волгоградская Область, г.о. Город-герой Волгоград, г Волгоград, ул Самарская, влд. 1, офис 1</span>
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactSpan}>Почтовый адрес: </span>
                400079, Волгоградская Область, г.о. Город-герой Волгоград, г Волгоград, ул Самарская, влд. 1, офис 1
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactSpan}>ИНН: </span>
                3435127495
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactSpan}>КПП: </span>
                346101001
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactSpan}>ОГРН/ОГРНИП: </span>
                1163443076785
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactSpan}>ОКПО: </span>
                04674310
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactSpan}>ОКВЭД: </span>
                25.99
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactSpan}>ОКТМО: </span>
                18701000001
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactSpan}>Директор: </span>
                Бондаренко Алексей Вениаминович
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactSpan}>Главный бухгалтер: </span>
                <span itemprop="telephone">+7 978 588-906-48</span>, 
                <span itemprop="faxNumber">+7 961 685-32-12</span>
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactSpan}>Email: </span>
                <span itemprop="email">arsavva@mail.ru</span>
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactSpan}>Время работы </span>
                <span itemprop="openingHours" datetime="Mo-Su 10:00−20:00">Ежедневно с 9:00 до 20:00</span>
              </li>
            </ul>
            <div>
          <iframe className={styles.informMap} src="https://yandex.ru/map-widget/v1/?um=constructor%3A92b6eaf7aeeef7a05e46dab06fba460a19fa79c3730e02b7c9ff151b84ec4583&amp;source=constructor" width="1440" height="360"></iframe>
        </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;