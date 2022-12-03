"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Link from "next/link";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const onSubmit = async (data) => {
    setLoading(true);
    setErrorMessage("");
    setMessage("");
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    if (res.status != 200) setErrorMessage(json.error);
    setMessage(json.message);
    setLoading(false);
    if (res.status == 200) reset();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="pt-8 pb-8 flex flex-col gap-2  w-96 mx-auto bg-white pl-8 pr-8 rounded-lg shadow-sm  border border-gray-200"
    >
      <h1 className="text-2xl font-bold mb-8 text-center">Sign Up</h1>
      {message && <p className="text-green-500 text-center">{message}</p>}
      {errorMessage && (
        <p className="text-red-500 text-center">{errorMessage}</p>
      )}
      {/* username */}
      <label htmlFor="username" className="flex flex-col">
        <span className="text-sm font-medium mb-1">Name</span>
        <input
          {...register("name", { required: true, maxLength: 20 })}
          className="mt-1 w-full px-2 py-1 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </label>
      {errors?.name && (
        <p className="text-red-400 py-4">This field is required</p>
      )}

      {/* username */}
      <label htmlFor="username">
        <span className="text-sm font-medium mb-1 block">Username</span>
        <input
          {...register("username", { required: true, maxLength: 20 })}
          className="mt-1 w-full px-2 py-1 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </label>
      {errors?.username && (
        <p className="text-red-500 py-2">This field is required</p>
      )}

      <label htmlFor="email">
        Email
        <input
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          className="mt-1 w-full px-2 py-1 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </label>
      {errors?.email && (
        <p className="text-red-500 px-2">This field is required</p>
      )}

      <label htmlFor="password">
        <span className="text-sm font-medium mb-1 block">Password</span>
        <input
          type="password"
          {...register("password", {
            required: true,
            minLength: 8,
            maxLength: 20,
          })}
          className="mt-1 w-full px-2 py-1 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </label>
      {errors?.password && (
        <p className="text-red-500 px-2">This field is required</p>
      )}
      <input
        type="submit"
        className="bg-black text-white px-4 py-2 shadow hover:opacity-80 mt-4 rounded-lg w-fit"
        value={loading ? "Loading..." : "Sign Up"}
      />
      {/* already have account */}
      <p className="text-center mt-4">
        Already have an account?{" "}
        <Link href="/auth/signin" className="text-blue-500 cursor-pointer">
          Login
        </Link>
      </p>
    </form>
  );
};

export default SignUpForm;
