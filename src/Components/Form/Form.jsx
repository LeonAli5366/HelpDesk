import { useRef } from "react";

export const Form = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const issueRef = useRef();
  const desRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name: nameRef.current.value,
      email: emailRef.current.value,
      issue: issueRef.current.value,
      description: desRef.current.value,
    });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-1/2 h-1/2 mx-auto mt-10 flex flex-col items-center gap-2"
    >
      <span className="text-3xl text-white font-semibold pb-5">Help Desk</span>

      <div className="w-full flex flex-col items-start gap-1">
        <label htmlFor="name" className="text-white text-lg">
          Name
        </label>
        <input
          ref={nameRef}
          type="text"
          name=""
          id="name"
          className="w-full bg-transparent border py-3 px-3 text-white"
        />
      </div>
      <div className="w-full flex flex-col items-start gap-1">
        <label htmlFor="email" className="text-white text-lg">
          Email
        </label>
        <input
          ref={emailRef}
          type="text"
          name=""
          id="email"
          className="w-full bg-transparent border py-3 px-3 text-white"
        />
      </div>
      <div className="w-full flex flex-col items-start gap-1">
        <label htmlFor="issue" className="text-white text-lg">
          Issue
        </label>
        <input
          ref={issueRef}
          type="text"
          name=""
          id="issue"
          className="w-full bg-transparent border py-3 px-3 text-white"
        />
      </div>
      <div className="w-full flex flex-col items-start gap-1">
        <label htmlFor="des" className="text-white text-lg">
          Description
        </label>
        <textarea
          ref={desRef}
          type="text"
          name=""
          id="des"
          className="w-full bg-transparent border py-3 px-3 text-white"
        />
      </div>
      <button
        type="submit"
        className="bg-slate-100 hover:bg-slate-200 px-7 py-2 rounded mt-5"
      >
        Send
      </button>
    </form>
  );
};
