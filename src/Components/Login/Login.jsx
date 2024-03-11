/* eslint-disable no-unused-vars */
import { useContext, useRef, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import setTokenToLocalStroge from "../SetTokenToLocalStroge/SetTokenToLocalStroge";
import { AuthContex } from "../../ContextApi/UserContex";
import { TicketContext } from "../../ContextApi/TicketContext";

const Login = () => {
  // context api
  const { setCount, count } = useContext(AuthContex);
  const { ticketCount, setTicketCount } = useContext(TicketContext);
  // all state
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // all ref
  const emailRef = useRef();
  const passwordRef = useRef();

  // all functions
  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    console.log(user);
    setLoading(true);
    fetch("https://tms-server-hzd8.onrender.com/api/v1/user/signin", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(true);
        if (data.status === "success") {
          toast.success("User login successfully");
          setLoading(false);
          navigate("/");
          setTokenToLocalStroge(data?.userData?.token);
          setCount(count + 1);
          setTicketCount(ticketCount + 1);
        } else {
          setLoading(false)
          setError(data?.error);
        }
      });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-[700px] w-full mx-auto mt-10 flex flex-col items-center px-5 gap-2"
    >
      <span className="text-3xl text-white font-semibold pb-5">Login</span>
      <div className="w-full flex flex-col items-start gap-1">
        <label htmlFor="email" className="text-white text-lg">
          Email
        </label>
        <input
          ref={emailRef}
          type="email"
          name=""
          id="email"
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
      <Link to={`/signup`}>
        <h1 className="text-white mt-5 text-start">
          {`Don't have an account`}{" "}
          <span className="cursor-pointer ml-2 underline">SignUp</span>
        </h1>
      </Link>

      <button
        type="submit"
        className="bg-slate-100 hover:bg-slate-200 px-7 py-2 rounded mt-5 text-black gap-1 font-medium flex"
        disabled={loading === true}
      >
        {loading === true ? (
          <span className="loading loading-spinner loading-md"></span>
        ) : (
          ""
        )}
        <span>Login</span>
      </button>
    </form>
  );
};

export default Login;
