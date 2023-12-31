import React from "react";
import Nav from "../../components/Nav";
import FiltersTab from "../../components/FiltersTab";
import Banner from "../../components/Banner";
import FilterDrawer from "../../components/FilterDrawer";
import ProductsGroup from "../../components/ProductsGroup";
import Footer from "../../components/Footer";

const Products = () => {
  return (
    <main>
      <Nav />
      <div className="mt-[93px]">
        <Banner />
        <FiltersTab />
        <div className="flex pl-[4rem]">
          <FilterDrawer />
          <ProductsGroup />
        </div>
      </div>
      <section className=" bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default Products;
