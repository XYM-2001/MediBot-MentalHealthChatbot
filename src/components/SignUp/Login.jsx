import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "/src/styles/Login.css";


function Login() {
  const handleSignUpClick = () => {
    window.location.href = "/auth/signup";
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState(null);

  const onSubmit = async (data) => {
    setSubmitting(true);
    try {
      // Replace 'YOUR_API_ENDPOINT' with your actual endpoint
      const response = await axios.post("YOUR_API_ENDPOINT", data);
      console.log(response.data);
    } catch (error) {
      setFormError("Invalid credentials. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="section-container3">
        <style>
        {`
          body {
            background: linear-gradient(-45deg,#F0FFFF, #ADD8E6, #0000FF, #F0FFFF);
            background-size: 400% 400%;
            animation: gradient 15s ease infinite;
            height: 100vh;
          }

          @keyframes gradient {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
      </style>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-300 to-green-600">
      <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="px-6 py-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">
            Log On to Your Personal MediBot!
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="text"
                {...register("email", { required: true })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                placeholder="Enter your email address"
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
                id="password"
                name="password"
                type="password"
                {...register("password", { required: true })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                placeholder="Enter your password"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                {submitting ? "Logging in..." : "Login"}
              </button>
            </div>
          </form>
          {formError && (
            <p className="text-red-500 text-center mt-4">{formError}</p>
          )}
          <p className="text-sm text-center mt-4">
            Don't have an account?{" "}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={handleSignUpClick}
            >
              Register here!
            </span>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Login;
