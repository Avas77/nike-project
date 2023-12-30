import React from "react";
import Nav from "../../components/Nav";
import FiltersTab from "../../components/FiltersTab";
import Banner from "../../components/Banner";
import FilterDrawer from "../../components/FilterDrawer";

const Products = () => {
  return (
    <main>
      <Nav />
      <div className="mt-[93px]">
        <Banner />
        <FiltersTab />
        <div className="flex pl-[4rem]">
          <FilterDrawer />
        </div>
      </div>
    </main>
  );
};

export default Products;
