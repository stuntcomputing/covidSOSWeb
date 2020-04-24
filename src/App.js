import React, { Fragment, lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Spinner } from "evergreen-ui";
const Login = lazy(() => import("./pages/auth/login/login"));
const Register = lazy(() => import("./pages/auth/register/register"));
const CustomerLayout = lazy(() => import("./components/layout/customer"));

const loading = (props) => {
  return (
    <Fragment>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Spinner />
      </div>
    </Fragment>
  );
};

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Suspense fallback={loading()}>
          <Switch>

            <Route
              exact={true}
              path={"/login"}
              name={"login"}
              render={(props) => <Login {...props} />}
            />
            <Route
              exact={true}
              path={"/register"}
              name={"Register"}
              render={(props) => <Register {...props} />}
            />
            <Route
              name={"Customer"}
              exact={false}
              path={"/customer"}
              render={(props) => <CustomerLayout {...props} />}
            />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
