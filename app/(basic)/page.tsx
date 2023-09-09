import styles from "./styles.module.css";

import CardImage from "components/card/image";
import HeroBanner from "components/hero-banner";

export default function Page() {
  return (
    <div>
      <HeroBanner />
      <div className={styles.image_card_grid}>
        <CardImage background="linear-gradient(90deg, #1CB5E0 0%, #000851 100%)"/>
        <CardImage background="linear-gradient(45deg, #00C9FF 0%, #92FE9D 100%)"/>
        <CardImage background="linear-gradient(90deg, #d53369 0%, #daae51 100%)"/>
        <CardImage background="linear-gradient(71deg, #FC466B 0%, #3F5EFB 100%)"/>
        <CardImage background="linear-gradient(90deg, #4b6cb7 0%, #182848 100%)"/>
        <CardImage background="linear-gradient(1640deg, #efd5ff 0%, #515ada 100%)"/>
      </div>
    </div>
  );
}
