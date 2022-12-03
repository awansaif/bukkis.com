"use client";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";

const SignInForm = () => {
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    setErrorMessage("");
    setMessage("");

    const res = await signIn("credentials", {
      redirect: false,
      username: data.username,
      password: data.password,
    });
    if (res.error) {
      setErrorMessage(res.error);
      // redirect user to dashboard
      setLoading(false);
    } else {
      window.location.replace("/user/dashboard");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="pt-8 pb-8 flex flex-col w-96 mx-auto bg-white pl-8 pr-8 rounded-lg shadow-sm  border border-gray-200"
    >
      <h1 className="text-2xl font-bold mb-8 text-center">Sign In</h1>
      {errorMessage && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
          role="alert"
        >
          <strong className="font-bold block">Error!</strong>
          <span className="block sm:inline">{errorMessage}</span>
        </div>
      )}
      <label className="flex flex-col">
        <span className="text-sm font-medium mb-1">Username</span>
        <input
          type="text"
          {...register("username", { required: true, maxLength: 20 })}
          className="mt-1 w-full px-2 py-1 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </label>
      {errors?.username && (
        <p className="text-red-400 py-4">This field is required</p>
      )}
      <label className="mt-5">
        <span className="text-sm font-medium mb-1 block">Password</span>
        <input
          type="password"
          {...register("password", { required: true, maxLength: 20 })}
          className="mt-1 w-full px-2 py-1 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </label>
      {errors?.password && (
        <p className="text-red-400 py-4">This field is required</p>
      )}
      <button
        type="submit"
        className="bg-black text-white px-4 py-2 shadow hover:opacity-80 mt-4 rounded-lg w-fit"
      >
        {loading ? <span className="animate-spin">Loading...</span> : "Sign In"}
      </button>
      {/* create an account */}
      <p className="mt-4 text-sm">
        Dont have an account?{" "}
        <Link
          className="text-blue-500 hover:underline cursor-pointer"
          href="/auth/signup"
        >
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default SignInForm;
