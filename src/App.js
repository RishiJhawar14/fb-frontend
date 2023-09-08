import React, { useEffect } from "react";

import { Switch, BrowserRouter as Router } from "react-router-dom";

import { publicRoutes } from "./routes/PublicRoute";
import { privateRoutes } from "./routes/PrivateRoute";
import NonAuthMiddleware from "./routes/NonAuthMiddleware";
import AuthenticatedRedirects from "./routes/AuthenticatedRedirects";
import ConnectPage from "./pages/ConnectPage";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          {publicRoutes.map((route, idx) => (
            <NonAuthMiddleware
              path={route.path}
              component={route.component}
              key={idx}
            />
          ))}

          {privateRoutes.map((route, idx) => (
            <AuthenticatedRedirects
              route={route}
              path={route.path}
              component={route.component}
              key={idx}
            />
          ))}
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
