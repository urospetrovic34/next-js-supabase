import Link from "next/link";

import styles from "./styles.module.css";

import ReusableButton from "components/reusable/button";

const HeroBanner = () => {
  return (
    <div className={styles.hero_background}>
      <h1 className={styles.heading}>Some Useless Stuff</h1>
      <p className={styles.description}>
        We wrote this so you won&apos;t have to read some faux latin. All in all
        this text serves no functional purpose but to irritate both you and me.
        Written by an author.
      </p>
      <span>
        <Link href="/product">
          <ReusableButton type="hero_banner_button" text="Learn More" />
        </Link>
      </span>
    </div>
  );
};

export default HeroBanner;
