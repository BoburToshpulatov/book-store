import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import getBaseUrl from "../utils/baseURL.js";

const AdminLogin = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post(`${getBaseUrl()}/auth/admin`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const auth = response.data;
      if (auth.token) {
        localStorage.setItem("token", auth.token);
        setTimeout(() => {
          localStorage.removeItem("token");
          alert("Token has been expired! Please login again.");
          navigate("/");
        }, 3600 * 1000);
      }

      alert("Admin Login successful");
      navigate("/dashboard");
    } catch (error) {
      setMessage("Please provide a valid email and password");
      console.error(error);
    }
  };

  return (
    <div className="h-screen max-w-screen-2xl mx-auto px-4 py-6 font-primary">
      <div className="h-[calc(100vh-120px)] flex justify-center items-center">
        <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-xl font-semibold mb-4">Admin Dashboard Login</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Username
              </label>
              <input
                {...register("username", { required: true })}
                type="text"
                name="username"
                id="username"
                placeholder="username"
                className="shadow appearance-none border rounded w-full py-2 px-3
              leading-tight focus:outline-none focus:shadow"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <input
                {...register("password", { required: true })}
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="shadow appearance-none border rounded w-full py-2 px-3
              leading-tight focus:outline-none focus:shadow"
              />
            </div>
            {message && (
              <p className="text-red-500 text-xs italic mb-3">{message}</p>
            )}
            <div className="w-full">
              <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none">
                Login
              </button>
            </div>
          </form>

          <p className="mt-5 text-center text-gray-500 text-xs">
            02025 Book Store. All rights are reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
