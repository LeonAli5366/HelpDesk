/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const AuthContex = createContext();

const UserContex = ({ children }) => {
  const [user, setUser] = useState({});
  const [count, setCount] = useState(1);

  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("token");
    setCount(count + 1);
    setUser({});
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("https://tms-server-hzd8.onrender.com/api/v1/user/getuser", {
      method: "GET",
      headers: {
        authorization: `brarer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setUser(data?.userData);
        } else {
          navigate("/login");
        }
      });
  }, [count]);
  const contextValue = {
    user,
    setUser,
    count,
    setCount,
    logOut,
  };
  return (
    <AuthContex.Provider value={contextValue}>{children}</AuthContex.Provider>
  );
};

export default UserContex;
