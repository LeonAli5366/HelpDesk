const AdminForm = () => {
    return (
        <form
    //   onSubmit={handleSubmit}
      className="w-1/2 h-1/2 mx-auto mt-10 flex flex-col items-center gap-2"
    >
      <span className="text-3xl text-white font-semibold pb-5">Update Admin Info</span>

      <div className="w-full flex flex-col items-start gap-1">
        <label htmlFor="name" className="text-white text-lg">
          Name
        </label>
        <input
        //   ref={nameRef}
          type="text"
        //   defaultValue={user?.name}
          name=""
          id="name"
          className="w-full bg-transparent border py-3 px-3 text-white"
          required
        />
      </div>
      <div className={`w-full flex flex-col items-start gap-1 `}>
        <label htmlFor="email" className="text-white text-lg">
          Email
        </label>
        <input
        //   ref={emailRef}
          type="email"
          name=""
        //   defaultValue={user?.email}
          id="email"
          className="w-full bg-transparent border py-3 px-3 text-white"
          required
        />
      </div>
      <div className="w-full flex flex-col items-start gap-1">
        <label htmlFor="password" className="text-white text-lg">
          Password
        </label>
        <input
        //   ref={passwordRef}
          type="password"
          name=""
          id="password"
          className="w-full bg-transparent border py-3 px-3 text-white"
          required
        />
      </div>
      {/* <h1 className="text-red-600">{error}</h1> */}
      <button
        type="submit"
        className="bg-slate-100 hover:bg-slate-200 px-7 py-2 rounded mt-5 text-black font-medium"
      >
        Update
      </button>
    </form>
    );
};

export default AdminForm;