import styles from "./styles.module.css";

import CardProduct from "components/card/product";

interface ProductProps {
  id: number;
  created_at: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

async function getProducts() {
  const res = await fetch(`${process.env.API_HOST}/products`, {
    next: {
      tags: ["products"],
    },
    headers: {
      apiKey: `${process.env.API_KEY}`,
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  });
  return res.json();
}

export default async function Product() {
  const products = await getProducts();
  return (
    <div className={styles.product_container}>
      {products.map((product: ProductProps) => {
        return (
          <CardProduct
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        );
      })}
    </div>
  );
}
