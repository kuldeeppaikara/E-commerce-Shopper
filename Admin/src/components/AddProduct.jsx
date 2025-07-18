import React, { useState } from "react";
import upload_area from "../assets/upload_area.svg";
import toast from "react-hot-toast";
function AddProduct() {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "",
    new_price: "",
    old_price: "",
  });

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const imageHandle = (e) => {
    setImage(e.target.files[0]);
  };

  const addProduct = async () => {
    // console.log(productDetails);
    console.log("Add Product Clicked");

    let responseData;
    let product = productDetails;
    let formData = new FormData();
    formData.append("product", image);
    await fetch(`${import.meta.env.VITE_API_URL}/upload`, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((resp) => resp.json())
      .then((data) => {
        responseData = data;
      });

    if (responseData.success) {
      product.image = responseData.image_url;
      // console.log(product);
      console.log("If response.succcess is true");
      await fetch(`${import.meta.env.VITE_API_URL}/addproduct`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((resp) => resp.json())
        .then((data) => {
          data.success
            ? toast.success("Product added successfully")           
            : toast.error("Something went wrong");
        });
    }
    // formData.append("product", JSON.stringify(product));
  };

  return (
    <div className="box-border w-auto p-8 m-8 lg:w-full  max-w-4xl lg:px-14 lg:py-7 lg:mx-7 lg:my-5 rounded-md bg-white">
      <div className="w-full text-[#7b7b7b] text-xl my-2.5 space-y-1.5">
        <p>Product title</p>
        <input
          value={productDetails.name}
          onChange={changeHandler}
          className="box-border w-full h-14 rounded-2xl pl-4 border-[1px] border-[#c3c3c3] outline-none text-[#7b7b7b] text-lg"
          type="text"
          name="name"
          placeholder="Type here"
        />
      </div>
      <div className="flex gap-10">
        <div className="w-full text-[#7b7b7b] text-xl my-1 space-y-1.5">
          <p>Price</p>
          <input
            value={productDetails.old_price}
            onChange={changeHandler}
            className="box-border w-full h-14 rounded-2xl pl-4 border-[1px] border-[#c3c3c3] outline-none text-[#7b7b7b] text-lg"
            type="text"
            name="old_price"
            placeholder="Type here"
          />
        </div>
        <div className="w-full text-[#7b7b7b] text-xl my-1 space-y-1.5">
          <p>Offer Price</p>
          <input
            value={productDetails.new_price}
            onChange={changeHandler}
            className="box-border w-full h-14 rounded-2xl pl-4 border-[1px] border-[#c3c3c3] outline-none text-[#7b7b7b] text-lg"
            type="text"
            name="new_price"
            placeholder="Type here"
          />
        </div>
      </div>
      <div className="w-full text-[#7b7b7b] text-xl my-1 space-y-1.5">
        <p>Category</p>
        <select
          value={productDetails.category}
          onChange={changeHandler}
          name="category"
          className="p-2.5 w-30 h-14 text-sm rounded-2xl text-[#7b7b7b] border-[1px] border-[#c3c3c3] outline-none  "
        >
          <option value="select"  selected>Select</option>
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kids</option>
        </select>
      </div>
      <div className="w-fit">
        <label htmlFor="file-input">
          <img
            src={image ? URL.createObjectURL(image) : upload_area}
            className="size-[120px] rounded-2xl object-contain my-2.5"
            alt=""
          />
        </label>
        <input
          onChange={imageHandle}
          type="file"
          name="image"
          id="file-input"
          hidden
        />
      </div>
      <button
        onClick={addProduct}
        className="w-1/2 h-14 rounded-2xl bg-[#6079ff] text-white text-xl font-semibold mt-8 cursor-pointer"
      >
        Add Product
      </button>
    </div>
  );
}

export default AddProduct;
