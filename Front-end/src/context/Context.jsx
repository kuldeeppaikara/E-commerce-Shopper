import React, { createContext, useEffect, useState } from "react";
// import all_product from '../components/assets/all_product'

export const ShopContext = createContext(null);
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < 100 + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};
const ShopContextProvider = (props) => {
  const [all_product, setAll_Product] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultCart());

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/allproducts`)
      .then((response) => response.json())
      .then((data) => setAll_Product(data));

    if (localStorage.getItem("authToken")) {
      fetch(`${import.meta.env.VITE_API_URL}/getcartdata`, {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          authToken: `${localStorage.getItem("authToken")}`,
          "Content-Type": "application/json",
        },
        body: "",
      })
        .then((response) => response.json())
        .then((data) => setCartItems(data));
    }
  }, []);

  const addToCart = (id) => {
    setCartItems((prev) => ({ ...prev, [id]: prev[id] + 1 }));
    if (localStorage.getItem("authToken")) {
      fetch(`${import.meta.env.VITE_API_URL}/addtocart`, {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          authToken: `${localStorage.getItem("authToken")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
          token: localStorage.getItem("authToken"),
        }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  };
  const removeFromCart = (id) => {
    setCartItems((prev) => ({ ...prev, [id]: prev[id] - 1 }));
    if (localStorage.getItem("authToken")) {
      fetch(`${import.meta.env.VITE_API_URL}/removefromcart`, {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          authToken: `${localStorage.getItem("authToken")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
          token: localStorage.getItem("authToken"),
        }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  };
  const getToatalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id == Number(item)
        );
        totalAmount += cartItems[item] * itemInfo.new_price;
      }
    }
    return totalAmount;
  };
  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) totalItem += cartItems[item];
    }
    return totalItem;
  };
  const [state, setState] = useState("Login");

  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getToatalCartAmount,
    getTotalCartItems,
    state,
    setState,
  };
  // console.log(cartItems);
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
