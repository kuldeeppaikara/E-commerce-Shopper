import React, { useContext, useState } from "react";
import { ShopContext } from "../context/Context";
import toast from "react-hot-toast";

function LoginSignup() {
  const { state, setState } = useContext(ShopContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const login = async () => {
    console.log("login chala", formData);
    try {
      let responseData;
      await fetch(`${import.meta.env.VITE_API_URL}/login`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then((response) =>
        response.json().then((data) => {
          responseData = data;
        })
      );
      if (responseData.success) {
        localStorage.setItem("authToken", responseData.authToken);
        window.location.replace("/");
        toast.success("User logged in successfully");
      } else {
        toast.error(responseData.error);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const signup = async () => {
    console.log("signup chala", formData);
    try {
      let responseData;
      await fetch(`${import.meta.env.VITE_API_URL}/register`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then(
        (response) => response.
        json().then((data) => {
          responseData = data;
        })
      );
      if (responseData.success) {
        localStorage.setItem("authToken", responseData.authToken);
        window.location.replace("/");
        toast.success("Account created successfully");
      }else{
        toast.error(responseData.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-[100vh] bg-[#fce3fe] pt-10 ">
      <div
        className={`w-xl ${
          state === "Sign up" ? "h-[90vh]" : "h-[80vh]"
        } bg-white m-auto py-10 px-16 flex flex-col items-start justify-start`}
      >
        <h1 className="my-5 mx-0 text-4xl font-semibold">{state}</h1>
        <div className="flex flex-col w-full gap-8 mb-7">
          {state === "Sign up" ? (
            <input
              name="name"
              value={formData.name}
              onChange={changeHandler}
              className="h-16 w-full pl-[20px] border-2 border-black outline-none rounded-2xl text-[#5c5c5c] text-lg"
              type="text"
              placeholder="Your name"
            />
          ) : (
            <></>
          )}

          <input
            name="email"
            value={formData.email}
            onChange={changeHandler}
            className="h-16 w-full pl-[20px] border-2 border-black outline-none rounded-2xl text-[#5c5c5c] text-lg"
            type="text"
            placeholder="E mail address"
          />
          <input
            name="password"
            value={formData.password}
            onChange={changeHandler}
            className="h-16 w-full pl-[20px] border-2 border-black outline-none rounded-2xl text-[#5c5c5c] text-lg"
            type="password"
            placeholder="Password"
          />
        </div>
        <button
          onClick={state === "Sign up" ? signup : login}
          className="w-full h-14 bg-[#ff4141] active:bg-[#ff1111] rounded-2xl text-white text-2xl font-semibold cursor-pointer"
        >
          Continue
        </button>
        {state === "Sign up" ? (
          <p className="m-auto my-10">
            Already have an account?{" "}
            <span
              onClick={() => setState(() => "Login")}
              className="cursor-pointer text-sky-600"
            >
              Login here
            </span>
          </p>
        ) : (
          <p className="m-auto my-10">
            Do not have an account?{" "}
            <span
              onClick={() => setState(() => "Sign up")}
              className="cursor-pointer text-sky-600"
            >
              Create one
            </span>
          </p>
        )}

        <div className="flex items-start my-0 gap-2">
          <input className="w-5 h-5 mt-1" type="checkbox" name="" id="" />
          <p>By continuing , I agree to the terms of use & privacy policies.</p>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
