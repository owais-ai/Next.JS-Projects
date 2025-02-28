"use client";
import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { addProduct } from "../store/slices/product";
import { addcart } from "../store/slices/cart";

const ProductLists = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const products = useAppSelector((state) => state.productArray);
  const carts = useAppSelector((state) => state.cartArray);
  const dispatch = useAppDispatch();

console.log("carts:", carts);


  return (
    <div className="text-center">
      <form onSubmit={(e) => e.preventDefault()} 
      className="text-center flex gap-3 justify-center flex-col mx-64">
        <input
          id="name"
          type="text"
          placeholder="Enter you product Name"
          className="bg-slate-300 p-3 rounded-md"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          id="category"
          type="text"
          placeholder="Enter Category"
          className="bg-slate-300 p-3 rounded-md"
          value={category}
          required
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          id="quantity"
          type="number"
          placeholder="Enter Quantity"
          className="bg-slate-300 p-3 rounded-md"
          required
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button type="submit"
          className="bg-red-700 rounded-md border-red-900 border-2 p-2 text-white"
          onClick={() =>
            dispatch(
              addProduct({ name: name, category: category, quantity: quantity })
            )
          }
        >
          Add Item
        </button>
      </form>
      <p className="mt-6">ProductLists</p> <br />
      <div className="flex gap-10 flex-wrap justify-center">
        {products.map((item, i) => {
          return (
            <div
              key={i}
              className="flex flex-col gap-10 border-2 border-gray-600 p-10 bg-slate-200 rounded-lg"
            >
              <p>Name: {item.name}</p>
              <p>Catergory: {item.category}</p>
              <p>Quantity:{item.quantity}</p>
              <button
                onClick={() =>
                  dispatch(
                    addcart({
                      name: item.name,  //can also be written only item
                      category: item.category,
                      quantity: item.quantity,
                    })
                  )
                }
                className="bg-red-700 p-2 text-white rounded-md"
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductLists;
