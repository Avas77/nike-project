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
  const isProductsLoaded = products?.length > 0;
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
          {isProductsLoaded ? (
            <ProductsGroup products={products} />
          ) : (
            <div className="text-center w-full">Loading Please wait...</div>
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Products;
