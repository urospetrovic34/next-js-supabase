import styles from "./styles.module.css";

import ReusableSpinner from "components/reusable/spinner";

export default function Loading() {
  return (
    <div className={styles.center_container}>
      <ReusableSpinner />
    </div>
  );
}
