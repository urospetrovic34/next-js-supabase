import styles from "./styles.module.css";

interface ReusableButtonProps {
  size?: string;
  text: string;
  type?: string;
  transparent?: boolean;
}

const ReusableButton = ({
  size,
  text,
  type = "red",
  transparent,
}: ReusableButtonProps) => {
  return <button className={`${styles.button} ${styles[type]}`}>{text}</button>;
};

export default ReusableButton;
