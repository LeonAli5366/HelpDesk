import FormList from "./FormList";

const Admin = () => {
  const data = [
    {
      firstName: "leon",
      lastName: "ali",
      email: "leonali@gmail.com",
      issue: "i don't know",
      description: "it is what it is",
    },
    {
      firstName: "leon",
      lastName: "ali",
      email: "leonali@gmail.com",
      issue: "i don't know",
      description: "it is what it is",
    },
    {
      firstName: "leon",
      lastName: "ali",
      email: "leonali@gmail.com",
      issue: "i don't know",
      description: "it is what it is",
    },
    {
      firstName: "leon",
      lastName: "ali",
      email: "leonali@gmail.com",
      issue: "i don't know",
      description: "it is what it is",
    },
    {
      firstName: "leon",
      lastName: "ali",
      email: "leonali@gmail.com",
      issue: "i don't know",
      description: "it is what it is",
    },
  ];
  return (
    <div className="w-full flex flex-col items-center mt-10 gap-5 relative">
      <span className="text-3xl text-white pb-5">Report List</span>
      <div className="w-full grid grid-rows-1 gap-5 px-10">
        {data?.map((d, id) => (
          <FormList key={id} d={d} />
        ))}
      </div>
    </div>
  );
};

export default Admin;
