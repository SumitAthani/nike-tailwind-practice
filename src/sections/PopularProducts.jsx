import React from "react";
import { products } from "../constants";
import { star } from "../assets/icons";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red"> Popular </span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>
      <div className="mt-16 grid gap-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {products.map((product) => {
          return (
            <div className="flex flex-col gap-4 mt-2">
              <img src={product.imgURL} alt="" />
              <div className="flex items-center justify-start gap-2 mt-10">
                <img src={star} alt="" className="w-6 h-6" />
                <span className="font-montserrat text-slate-gray text-xl">
                  {"(4.5)"}
                </span>
              </div>
              <div className="font-palanquin font-semibold text-2xl">
                {product.name}
              </div>
              <div className="font-palanquin font-bold text-2xl text-coral-red">
                {product.price}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PopularProducts;
