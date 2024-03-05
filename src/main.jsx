import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import UserContex from "./ContextApi/UserContex.jsx";
import TicketContextProvider from "./ContextApi/TicketContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Toaster></Toaster>
    <UserContex>
      <TicketContextProvider>
        <App />
      </TicketContextProvider>
    </UserContex>
  </BrowserRouter>
);
