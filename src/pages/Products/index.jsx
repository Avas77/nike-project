import React, { useEffect, useState } from "react";
import Nav from "../../components/Nav";
import FiltersTab from "../../components/FiltersTab";
import Banner from "../../components/Banner";
import FilterDrawer from "../../components/FilterDrawer";
import ProductsGroup from "../../components/ProductsGroup";
import Footer from "../../components/Footer";
import { getAllProducts } from "../../api";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then((data) => setProducts(data));
  }, []);

  return (
    <main>
      <Nav />
      <div className="mt-[93px]">
        <Banner />
        <FiltersTab />
        <div className="flex pl-[4rem]">
          <FilterDrawer />
          <ProductsGroup products={products} />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Products;
