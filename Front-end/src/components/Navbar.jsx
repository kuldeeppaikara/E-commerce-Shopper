import React, { use, useContext, useState } from "react";
import logo from "../components/assets/logo.png";
import cart_icon from "../components/assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/Context";

function Navbar() {
  const [menu, setmenu] = useState("shop");
  const {getTotalCartItems,state,setState} = useContext(ShopContext);
  return (
    <div className="p-1 navbar flex justify-around lg:p-4 shadow-sm  ">
      <div className="nav-logo flex items-center gap-2.5">
        <img src={logo} alt="" />
        <p className="text-[#171717] text-4xl font-semibold">SHOPPER</p>
      </div>
      <ul className=" nav-menu flex items-center justify-center  gap-12 font-medium text-[#626262] text-lg">
        <li
          onClick={() => {
            setmenu("shop");
          }}
          className="flex items-center justify-center gap-1 cursor-pointer flex-col"
        >
          <Link to="/">Shop</Link>
          {menu === "shop" ? (
            <hr className="border-none w-[80%] h-1 rounded-[20px] bg-[#ff4141]" />
          ) : (
            <></>
          )}
        </li>
        <li
          onClick={() => {
            setmenu("men");
          }}
          className="flex items-center justify-center gap-1 cursor-pointer flex-col"
        >
          <Link to="/mens">Men</Link>
          {menu === "men" ? (
            <hr className="border-none w-[80%] h-1 rounded-[20px] bg-[#ff4141]" />
          ) : (
            <></>
          )}
        </li>
        <li
          onClick={() => {
            setmenu("women");
          }}
          className="flex items-center justify-center gap-1 cursor-pointer flex-col"
        >
          <Link to="/womens">Women</Link>
          {menu === "women" ? (
            <hr className="border-none w-[80%] h-1 rounded-[20px] bg-[#ff4141]" />
          ) : (
            <></>
          )}
        </li>
        <li
          onClick={() => {
            setmenu("kids");
          }}
          className="flex items-center justify-center gap-1 cursor-pointer flex-col"
        >
          <Link to="/kids">Kids</Link>
          {menu === "kids" ? (
            <hr className="border-none w-[80%] h-1 rounded-[20px] bg-[#ff4141]" />
          ) : (
            <></>
          )}
        </li>
      </ul>
      <div className="nav-right flex items-center gap-5">
        {localStorage.getItem("authToken") ? (
          <button onClick={()=>{localStorage.removeItem("authToken");window.location.replace("/")}} className="w-40 h-14  flex items-center justify-center outline-none border-2 border-[#ff4141] rounded-4xl font-semibold text-black text-lg active:bg-[#ff4141] cursor-pointer">
            Logout
          </button>
        ) : (
          <button
            
            className="w-40 h-14  flex items-center justify-center outline-none border-2 border-[#ff4141] rounded-4xl font-semibold text-black text-lg active:bg-[#ff4141]"
          >
            <Link to={"/login"}>Login</Link>
          </button>
        )}

        <Link className="flex items-center gap-3" to={"/cart"}>
          <img src={cart_icon} alt="" />
          <div className="cart-counter w-6` h-6 flex items-center justify-center rounded-full bg-[#ff4141] text-blue mt-[-35px] ml-[-30px] p-2 text-white ">
            {getTotalCartItems()}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
