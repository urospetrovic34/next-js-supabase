"use client";

import Link from "next/link";

import styles from "./styles.module.css";

export default function Error() {
  return (
    <div className={styles.center_container}>
      <h1>Oops! The Page You&apos;re Looking for Cannot Be Found</h1>
      <p className={styles.error_text}>
        It seems you&apos;ve taken a wrong turn or stumbled upon a page that no
        longer exists. Don&apos;t worry, though; we&apos;re here to help you get
        back on track.
      </p>
      <Link href="/">
        <button>Go Back to Start</button>
      </Link>
    </div>
  );
}
