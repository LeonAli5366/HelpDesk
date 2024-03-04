import { useState } from "react";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const FormList = ({ d }) => {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  const redirectSolving = (e) => {
    e.preventDefault();
    navigate(`/admin/1233`);
  };
  return (
    <div
      // onClick={() => setActive(!active)}
      className={`w-full border rounded bg-transparent text-white ${
        active === false ? "h-16" : "h-auto"
      } px-5 glass border-rgb transition-all duration-300`}
    >
      {active === false ? (
        <div
          className={`w-full h-full flex items-center justify-between ${
            active === false ? "opacity-100" : "opacity-0"
          } transition-all duration-300 bg-transparent`}
        >
          <div className="flex flex-col items-center gap-1">
            <span className="text-sm">CreatedAt</span>
            <span>12/2/2024</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-sm">CreatedBy</span>
            <span>leonali@gmail.com</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-sm">Title</span>
            <span>my pc is not working</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-sm">Status</span>
            <span>In Progress</span>
          </div>
          <button
            onClick={redirectSolving}
            className="bg-transparent border-rgb px-5 py-2"
          >
            Accept
          </button>
        </div>
      ) : (
        <div className="flex flex-col w-full h-full justify-center gap-5">
          <div className="w-full flex justify-between">
            <span>Name : {d?.firstName}</span>
            <span>Email : {d?.email}</span>
            <span>Status : {d?.issue}</span>
            <button onClick={() => setActive(!active)}>View Details</button>
          </div>
          <div className="w-full">
            <span>Description : {d?.description}</span>
          </div>
          <div>
            <button className="flex items-start bg-transparent border-rgb px-5 py-2">
              Response
            </button>
            <div>
              <textarea name="" id="" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormList;
