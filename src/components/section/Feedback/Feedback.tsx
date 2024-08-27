"use client";
import styles from "./styles.module.css";
import Form from "@/components/ui/Form/Form";

const Feedback = () => {
  return (
    <section className={styles.feedback} id="feedback">
      <div className={styles.feedbackContainer}>
        <div className={styles.feedbackContent}>
          <div className={styles.feedbackInfo}>
            <h1 className={styles.feedbackTitle}>Хотите сделать заказ?</h1>
            <p className={styles.feedbackDescription}>Мы тщательно изучим ваш комментарий и перезвоним в ближайшее время для уточнения деталей и оформления заказа для приобретения и доставки дроби/картечи в нашем магазине. Благодарим за проявленный интерес к нашему ассортименту, ждем вашей заявки! </p>
          </div>
          <Form />
        </div>
      </div>
    </section>
  )
}
export default Feedback;
