import React from "react";
import ProductsCard from "../ProductsCard";

const ProductsGroup = ({ products }) => {
  console.log({ products });
  return (
    <div className="pl-[40px] pr-[48px] grid grid-cols-3">
      {products?.map((product) => {
        return (
          <ProductsCard
            key={product.id}
            name={product.name}
            path={product.imgPath}
            category={product.category}
            price={product.price}
            quantity={product.quantity}
          />
        );
      })}
    </div>
  );
};

export default ProductsGroup;
