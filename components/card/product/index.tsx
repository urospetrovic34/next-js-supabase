import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.css";

interface CardProductProps {
  id: number;
  name: string;
  price: number;
  image: string;
}

const CardProduct = ({ id, name, price, image }: CardProductProps) => {
  return (
    <div className={styles.card_container}>
      <div className={styles.image_container}>
        <Link href={`/product/${id}`}>
          <Image
            src={image}
            alt={name}
            fill
            style={{
              objectFit: "cover",
            }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </Link>
      </div>
      <div className={styles.info_container}>
        <div className={styles.name}>{name}</div>
        <div className={styles.price_link_row}>
          <div className={styles.price}>{price} €</div>
          <Link href={`/product/${id}`}>
            <button>Open</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
