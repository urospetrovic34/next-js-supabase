import Link from "next/link";

import ReusableButton from "../reusable/button";

import styles from "./styles.module.css";

const HeroBanner = () => {
  return (
    <div className={styles.hero_background}>
      <h1 className={styles.heading}>Some Useless Crap</h1>
      <p className={styles.description}>
        We wrote this so you won&apos;t have to read some faux latin. All in all
        this text serves no functional purpose but to irritate both you and me.
        Written by an author.
      </p>
      <span>
        <Link href="/about">
          <ReusableButton type="hero_banner_button" text="Learn More" />
        </Link>
      </span>
    </div>
  );
};

export default HeroBanner;
