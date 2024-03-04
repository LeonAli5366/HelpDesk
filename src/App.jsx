import { NavLink, Route, Routes } from "react-router-dom";
import { Form } from "./Components/Form/Form";
import Login from "./Components/Login/Login";
import Admin from "./Components/Admin/Admin";
import Solving from "./Components/Admin/Solving";

const App = () => {
  return (
    <div className="w-screen h-screen bg-gredient">
      <nav className="w-full h-16 bg-transparent text-white flex items-center justify-between px-10">
        <NavLink to='/'>Logo</NavLink>
        <div className="flex gap-5">
          <NavLink to="/admin">Admin Panel</NavLink>
          <NavLink to="/login">Login</NavLink>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/:id" element={<Solving />} />
      </Routes>
    </div>
  );
};

export default App;
