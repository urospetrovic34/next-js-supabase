import styles from "./styles.module.css";

import NavigationHeader from "components/navigation/header";

export default function BasicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <NavigationHeader />
      <div className={styles.basic_wrapper}>{children}</div>
    </section>
  );
}
