import React from "react";
import ProductsCard from "../ProductsCard";
import { Products } from "../../constants/products";

const ProductsGroup = () => {
  return (
    <div className="pl-[40px] pr-[48px] grid grid-cols-3">
      {Products.map((product) => {
        return (
          <ProductsCard
            key={product.id}
            name={product.name}
            path={product.path}
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
