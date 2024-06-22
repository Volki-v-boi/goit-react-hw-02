import styles from "./Feedback.module.css";

export default function Feedback({ feedback, positiveFeedbackPersent, total }) {
  return (
    <div className={styles.feedbackContainer}>
      <p className={styles.feedbackItem}>Good: {feedback.good}</p>
      <p className={styles.feedbackItem}>Neutral: {feedback.neutral}</p>
      <p className={styles.feedbackItem}>Bad: {feedback.bad}</p>
      <p className={styles.totalFeedback}>Total:{total}</p>
      <p className={styles.positiveFeedback}>
        Positive: {positiveFeedbackPersent()}%
      </p>
    </div>
  );
}
