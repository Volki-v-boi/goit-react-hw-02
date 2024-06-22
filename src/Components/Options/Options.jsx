import styles from "../Options/Options.module.css";

export default function Options({
  handleFeedback,
  totalFeedback,
  resetFeedback,
}) {
  return (
    <div className={styles.button}>
      <button
        className={styles.feedbackButton}
        onClick={() => handleFeedback("good")}
      >
        Good
      </button>
      <button
        className={styles.feedbackButton}
        onClick={() => handleFeedback("neutral")}
      >
        Neutral
      </button>
      <button
        className={styles.feedbackButton}
        onClick={() => handleFeedback("bad")}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={styles.resetButton} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
}
