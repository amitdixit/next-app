// "use client"; use client component make depenedent component too as a client component so we dont have to repeat in each page
//A better alternative is to use Server Components and render the necessary chil component as "use client" so that it can be rendered on the server and Search Engine friendly

import React from "react";
import AddToCart from "../AddToCart";
// import styles from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    // <div className={styles.card}>
    //   <AddToCart />
    // </div>

    <div className="p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-500">
      <AddToCart />
    </div>
  );
};

export default ProductCard;
