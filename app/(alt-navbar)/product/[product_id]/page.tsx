import Image from "next/image";

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

async function getSingleProduct(product_id: string) {
  const res = await fetch(
    `${process.env.API_HOST}/products?id=eq.${product_id}`,
    {
      next: {
        revalidate: 30,
        tags: ["single_product"],
      },
      headers: {
        apiKey: `${process.env.API_KEY}`,
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    }
  );
  
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function SingleProduct({
  params: { product_id },
}: {
  params: { product_id: string };
}) {
  const product = await getSingleProduct(product_id);
  return (
    <div>
      <Image
        src={product[0].image}
        alt={product[0].name}
        width={300}
        height={300}
      />
      <div>
        <div>{product[0].name}</div>
        <div>{product[0].description}</div>
      </div>
    </div>
  );
}
