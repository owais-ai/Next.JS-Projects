"use client";
import React from "react";
import { useAppSelector } from "../store/hooks";

const ProductLists = () => {
  const products = useAppSelector((state) => (state.productArray));
  console.log(products);

  return (
    <div className="text-center">
      ProductLists <br />
      <div className="flex gap-10 my-8">
        {products.map((items, i) => {
        return (
          <div key={i} className="flex flex-col gap-10 border-2 border-red-600 p-10 bg-slate-200">
            <p>Name: {items.name}</p>
            <p>Catergory: {items.Category}</p>
            <p>Quantity:{items.quanity}</p>
          </div>
        );
      })}</div>
    </div>
  );
};

export default ProductLists;
