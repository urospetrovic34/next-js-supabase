import styles from "./styles.module.css";

import ReusableButton from "components/reusable/button";

interface CardImageProps {
  background?: string;
}

const CardImage = ({ background = "red" }: CardImageProps) => {
  return (
    <div className={styles.card_container}>
      <div
        className={styles.card_background}
        style={{ background: background }}
      ></div>
      <div className={styles.card_button_container}>
        <div className={styles.card_button}>
          <ReusableButton text="Button" type="red" />
        </div>
      </div>
    </div>
  );
};

export default CardImage;
