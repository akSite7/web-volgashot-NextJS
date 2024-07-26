"use client"

import Badge from "@/components/ui/Badge/Badge";
import styles from "./styles.module.css";
import GlobalApi from "@/utils/GlobalApi";
import React, { useEffect, useState } from "react"

const Feedback = () => {

  const [ name,  setName ] = useState('');
  const [ tel,  setTel ] = useState('');
  const [ comment,  setComment ] = useState('');
  const [ formField, setFormField ] = useState(false);

  useEffect(() => {
    if ( name && tel ) {
        setFormField(true);
    } else {
        setFormField(false);
    }
}, [ name, tel ]);

  const saveFields = () => {
    const data = {
      data: {
        name: name,
        tel: tel,
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
    <section className={styles.feedback}>
      <div className={styles.feedbackContainer}>
        <Badge>📞 Заказывайте сегодня</Badge>
        <h3 className={styles.feedbackTitle}>Есть вопросы?</h3>
        <div className={styles.feedbackContent}>
          <span className={styles.feedbackWarning}>
            *Мы никому не передаем ваши данные. 
            <br />И не сохраняем ваш номер в базу.
          </span>
          <input className={styles.feedbackInput} type="text" onChange={(e) => setName(e.target.value)} placeholder="Ваше имя"/>
          <input className={styles.feedbackInput} type="tel" onChange={(e) => setTel(e.target.value)} placeholder="Ваш телефон"/>
          <textarea className={styles.feedbackInputArea} rows="2" type="text" onChange={(e) => setComment(e.target.value)} placeholder="Комментарий"/>
          <button disabled={!formField} className={styles.feedbackButton} onClick={() => saveFields()} >Отправить</button>
        </div>
      </div>
    </section>
  )
}

export default Feedback;