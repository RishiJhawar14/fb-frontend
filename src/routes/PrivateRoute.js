import { Redirect } from "react-router-dom";
import ConnectPage from "../pages/ConnectPage";
import IntegratedPage from "../pages/IntegratedPage";
import AgentPage from "../pages/AgentPage";

const privateRoutes = [
  {
    path: "/connect",
    exact: true,
    component: ConnectPage,
  },
  {
    path: "/integrate",
    exact: true,
    component: IntegratedPage,
  },
  {
    path: "/messages",
    exact: true,
    component: AgentPage,
  },
  {
    path: "/",
    exact: true,
    component: () =>
      localStorage.getItem("token") ? (
        localStorage.getItem("fb") ? (
          <Redirect to="/integrate" />
        ) : (
          <Redirect to="/connect" />
        )
      ) : (
        <Redirect to="/signIn" />
      ),
  },
];

export { privateRoutes };
