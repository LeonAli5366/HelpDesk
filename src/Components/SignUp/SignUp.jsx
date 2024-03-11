/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  // all state
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // all ref
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const handleSubmit = (e) => {
    setError("");
    e.preventDefault();
    const user = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    setLoading(true);
    fetch("https://tms-server-hzd8.onrender.com/api/v1/user/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          toast.success("User created successfully");
          setLoading(false);
          navigate("/login");
        } else {
          setLoading(false);
          setError(data?.error);
        }
      });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-[700px] w-full mx-auto mt-10 px-5 flex flex-col items-center gap-2"
    >
      <span className="text-3xl text-white font-semibold pb-5">Sign up</span>
      <div className="w-full flex flex-col items-start gap-1">
        <label htmlFor="name" className="text-white text-lg">
          Name
        </label>
        <input
          ref={nameRef}
          type="text"
          name=""
          id="email"
          className="w-full bg-transparent border py-3 px-3 text-white"
        />
      </div>
      <div className="w-full flex flex-col items-start gap-1">
        <label htmlFor="email" className="text-white text-lg">
          Email
        </label>
        <input
          ref={emailRef}
          type="email"
          name=""
          id="name"
          className="w-full bg-transparent border py-3 px-3 text-white"
        />
      </div>
      <div className="w-full flex flex-col items-start gap-1">
        <label htmlFor="password" className="text-white text-lg">
          Password
        </label>
        <input
          ref={passwordRef}
          type="password"
          name=""
          id="password"
          className="w-full bg-transparent border py-3 px-3 text-white"
        />
      </div>
      <h1 className="text-red-600">{error}</h1>
      <Link to={`/login`}>
        <h1 className="text-white mt-5 text-start">
          {`Don't have an account`}{" "}
          <span className="cursor-pointer ml-2 underline">Login</span>
        </h1>
      </Link>
      <button
        type="submit"
        className="bg-slate-100 hover:bg-slate-200 px-7 py-2 rounded mt-5 flex gap-1 text-black font-medium"
      >
        {loading === true ? (
          <span className="loading loading-spinner loading-md"></span>
        ) : (
          ""
        )}
        <span>Sign Up</span>
      </button>
    </form>
  );
};

export default SignUp;
