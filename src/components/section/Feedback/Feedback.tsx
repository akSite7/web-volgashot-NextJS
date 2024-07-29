"use client"

import Badge from "@/components/ui/Badge/Badge";
import styles from "./styles.module.css";
import GlobalApi from "@/utils/GlobalApi";
import React, { useEffect, useState } from "react"

const Feedback = () => {

  const [ name,  setName ] = useState('');
  const [ tel,  setTel ] = useState('');
  const [ email,  setEmail ] = useState('');
  const [ comment,  setComment ] = useState('');
  const [ formField, setFormField ] = useState(false);

  useEffect(() => {
    if ( name && tel && email) {
        setFormField(true);
    } else {
        setFormField(false);
    }
}, [ name, tel, email ]);

  const saveFields = () => {
    const data = {
      data: {
        name: name,
        tel: tel,
        email: email,
        comment: comment,
      }
    }
    GlobalApi.createOrder(data).then((resp: Response) => {
      console.log(resp);
      if ( resp ) {
        alert('Заявка отправлена')
      }
    })
  }

  return (
    <section className={styles.feedback} id="feedback">
      <div className={styles.feedbackContainer}>
      
        <div className={styles.feedbackContent}>
          <div className={styles.feedbackInfo}>
            <h1 className={styles.feedbackTitle}>Хотите сделать заказ?</h1>
            <p className={styles.feedbackDescription}>Мы тщательно изучим ваш комментарий и перезвоним в ближайшее время для уточнения деталей и оформления дроби/картечи в нашем магазине. Благодарим за проявленный интерес к нашему ассортименту, ждем вашей заявки! </p>
          </div>
          <div className={styles.feedbackForm}>
            <h2 className={styles.feedbackSubTitle}>Заполните форму</h2>
            <input required className={styles.feedbackInput} type="text" onChange={(e) => setName(e.target.value)} placeholder="Ваше имя" />
            <div className={styles.feedbackInputNano}>
              <input required className={styles.feedbackInputDouble} onChange={(e) => setTel(e.target.value)} type="tel" placeholder="Телефон" />
              <input className={styles.feedbackInputDouble} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Почта" />
            </div>
            <textarea className={styles.feedbackArea} onChange={(e) => setComment(e.target.value)} placeholder="Комментарий" />
            <p className={styles.feedbackPolice}>Нажимая кнопку, вы соглашаетесь на обработку персональных данных и с политикой конфиденциальности</p>
            <button disabled={!formField} className={styles.feedbackSubmit} onClick={() => saveFields()}>Отправить</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feedback;