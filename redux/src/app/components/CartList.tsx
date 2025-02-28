"use client";
import { addcart, removeCart } from "../store/slices/cart";
import { useAppSelector, useAppDispatch } from "../store/hooks";


const CartList = () => {
  const cart = useAppSelector((state) => state.cartArray);
  const dispatch = useAppDispatch();
  return (
    <div>
      {cart.map((val, i) => {
        return (
          <div key={i} className="grid grid-cols-4 gap-4 py-4">
            <div>Name:{val.name}</div>
            <div>Category:{val.category}</div>
            <div>Quantity:{val.quantity}</div>
            <div>
              <button
                onClick={() =>
                  dispatch(
                  removeCart(val.name)
                  )
                }
                className="bg-red-700 p-2 text-white rounded-md"
              >
                Remove Item
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartList;
