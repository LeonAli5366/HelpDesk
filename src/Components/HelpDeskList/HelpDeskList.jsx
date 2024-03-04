import UserList from "./UserList";

const HelpDeskList = () => {
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
    {
      firstName: "leon",
      lastName: "ali",
      email: "leonali@gmail.com",
      issue: "i don't know",
      description: "it is what it is",
    },
  ];
  return (
    <div className="w-full h-full flex flex-col items-center mt-10 gap-5">
      <span className="text-3xl text-white pb-5">Report List</span>
      <div className="w-full h-full grid gap-5 px-10 overflow-y-scroll mb-10 hidden-scrollbar">
        {data?.map((d, id) => (
          <UserList key={id} d={d} />
        ))}
      </div>
    </div>
  );
};

export default HelpDeskList;
