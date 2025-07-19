import React, { useContext, useEffect, useState } from "react";
import remove_icon from "../components/assets/cart_cross_icon.png";
import { ShopContext } from "../context/Context";
function CartItems() {
  const { all_product, cartItems, removeFromCart, getToatalCartAmount } =
    useContext(ShopContext);
   
  return (
    <div className="my-44 mx-20  ">
      <div className="grid grid-cols-12 place-items-center  ">
        <div>
          <p>Products</p>
        </div>
        <div className="col-span-3">
          <p>Title</p>
        </div>
        <div className="col-span-2 col-start-5">
          <p>Price</p>
        </div>
        <div className="col-span-2 col-start-7">
          <p>Quantity</p>
        </div>

        <div className="col-span-2 col-start-9">
          <p>Total</p>
        </div>
        <div className="col-span-2 col-start-11">
          <p>Remove</p>
        </div>
      </div>
      <hr className="h-1 rounded-sm bg-[#e2e2e2] border-0 " />
      {all_product.map((item) => {
        if (cartItems[item.id] > 0) {
          return (
            <div className="flex flex-col gap-5 pt-5" key={item.id}>
              <div className="cartitem-format grid grid-cols-12 place-items-center  ">
                <img className="cartitem-img " src={`${import.meta.env.VITE_API_URL}${item.image}`} alt="" />

                <p className="col-span-3 p-2">{item.name}</p>

                <p className="col-span-2 col-start-5">${item.new_price}</p>
                <button className="w-16 h-12 border-2 border-[#cbc9c9] col-span-2 col-start-7">
                  {cartItems[item.id]}
                </button>
                <p className="col-span-2 col-start-9">
                  ${item.new_price * cartItems[item.id]}
                </p>
                <img
                  className="col-span-2 col-start-11"
                  src={remove_icon}
                  onClick={() => removeFromCart(item.id)}
                  alt=""
                />
              </div>
              <hr className="h-1 rounded-sm bg-[#e2e2e2] border-0 " />
            </div>
          );
        }
        return null;
      })}
      <div className="flex mx-0 my-24">
        <div className="flex-1 flex flex-col mr-96 gap-10">
          <h1>Cart Total</h1>
          <div>
            <div className="flex justify-between px-0 py-4">
              <p>Subtotal</p>
              <p>$ {getToatalCartAmount()}</p>
            </div>
            <hr />
            <div className="flex justify-between px-0 py-4">
              <p>Shipping fee</p>
              <p>free</p>
            </div>
            <hr />
            <div className="flex justify-between px-0 py-4">
              <h3>Total</h3>
              <h3>$ {getToatalCartAmount()}</h3>
            </div>
          </div>
          <button className="w-72 h-14 rounded-4xl bg-[#ff4141] text-white text-xl font-semibold mx-auto cursor-pointer">
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="flex-1 text-lg font-medium  ">
          <p className="text-xl">Enter your Promo code here</p>
          <div className="w-96 mt-5 h-16 border-none px-5 pr-0 bg-[#e2e2e2] flex items-center justify-between">
            <input
              className="w-2/3 border-none outline-none"
              type="text"
              name=""
              placeholder="PROMO CODE"
              id=""
            />
            <button className="w-1/3 h-full cursor-pointer bg-[#111] text-white">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
