"use client"
import Badge from "@/components/ui/Badge/Badge";
import styles from "./styles.module.css";
import FormUi from "@/components/ui/FormUi/FormUi";

const Feedback = () => {
  return (
    <section className={styles.feedback} id="feedback">
      <div className={styles.feedbackContainer}>
        <div className={styles.feedbackContent}>
          <div className={styles.feedbackInfo}>
            <h1 className={styles.feedbackTitle}>Хотите сделать заказ?</h1>
            <p className={styles.feedbackDescription}>Мы тщательно изучим ваш комментарий и перезвоним в ближайшее время для уточнения деталей и оформления дроби/картечи в нашем магазине. Благодарим за проявленный интерес к нашему ассортименту, ждем вашей заявки! </p>
          </div>
          <FormUi />
        </div>
      </div>
    </section>
  )
}
export default Feedback;