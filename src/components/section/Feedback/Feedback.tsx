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
            <p className={styles.feedbackDescription}>Оставьте свои контактные данные для связи и обязательно укажите в комментарии номера дроби или картечи, которые вас интересуют, а также город или населенный пункт, куда необходимо организовать доставку. Мы перезвоним в ближайшее время для уточнения деталей и расчета стоимости доставки. Благодарим за проявленный интерес к нашему ассортименту, ждем вашей заявки! </p>
          </div>
          <Form />
        </div>
      </div>
    </section>
  )
}
export default Feedback;
