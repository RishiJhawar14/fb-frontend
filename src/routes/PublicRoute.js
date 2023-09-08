import { Redirect } from "react-router-dom";
import Login from "../pages/Login";
import IntegratedPage from "../pages/IntegratedPage";
import SignUp from "../pages/SignUp"
import ConnectPage from "../pages/ConnectPage";

const publicRoutes = [
  // Authentication
  {
    path: "/signup",
    component: () =>
      localStorage.getItem("token") ? <ConnectPage /> : <SignUp />,
  },
  {
    path: "/login",
    component: () =>
      localStorage.getItem("token") ? <ConnectPage /> : <Login />,
  },
];

export { publicRoutes };
