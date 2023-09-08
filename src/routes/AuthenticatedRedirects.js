import { Route, Redirect, withRouter } from "react-router-dom";

// Wrapper for Private Routes
const AuthenticatedRedirects = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!localStorage.getItem("token")) {
          return (
            <Redirect
              to={{
                pathname: "/signup",
                state: { from: props.location },
              }}
            />
          );
        }

        return (
          <>
            <Component {...props} />
          </>
        );
      }}
    />
  );
};

export default withRouter(AuthenticatedRedirects);
