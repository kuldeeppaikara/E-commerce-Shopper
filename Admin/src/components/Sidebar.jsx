import React from "react";
import { Link } from "react-router-dom";
import add_product_icon from "../assets/Product_Cart.svg";
import product_list_icon from "../assets/Product_list_icon.svg";
function Sidebar() {
  return (
    <div className="flex lg:flex-col py-8 gap-5 w-full max-w-none h-auto md:flex-row justify-center lg:justify-start lg:max-w-64 lg:h-[88.7vh] bg-blue-300 px-5">
      <Link to={"/addproduct"}>
        <div className="flex items-center justify-center my-0 mx-0 gap-2.5 py-1.5 px-5 rounded-md bg-[#dadada] md:m-0">
          <img src={add_product_icon} alt="" />
          <p>Add Product</p>
        </div>
      </Link>
      <Link to={"/listproduct"}>
        <div className="flex items-center justify-center my-0 gap-2.5 mx-0 py-1.5 px-5 rounded-md bg-[#dadada] md:m-0">
          <img src={product_list_icon} alt="" />
          <p>Product List</p>
        </div>
      </Link>
    </div>
  );
}

export default Sidebar;
