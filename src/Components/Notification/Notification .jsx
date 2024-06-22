import styles from "../Notification/Notification.module.css";

export default function Notification({ message }) {
  return <p className={styles.notificationContainer}>{message}</p>;
}
