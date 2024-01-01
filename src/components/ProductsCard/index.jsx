import React from "react";
import { Link } from "react-router-dom";

const ProductsCard = ({ path, name, category, quantity, price }) => {
  return (
    <Link to={"/products/1234"}>
      <div className="flex flex-col px-[8px] mb-2">
        <img src={path} />
        <div className="pt-3 h-[185px]">
          <div className="font-medium">{name}</div>
          <div className="text-[#707072]">{category}</div>
          <div className="text-[#707072] pb-[10px]">{quantity}</div>
          <div className="font-medium">{price}</div>
        </div>
      </div>
    </Link>
  );
};

export default ProductsCard;
