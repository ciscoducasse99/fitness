import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import Loading from "./components/Loading";
import { ContextProvider, useGlobalContext } from "./context/globalContext";

// In general, render works best with functional components,
// as they do not have lifecycle methods by default,
// and component works best with class components.
const Landing = React.lazy(() => import("./pages/Landing.js"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Login = React.lazy(() => import("./pages/Login"));
const Payment = React.lazy(() => import("./pages/Payment"));
const Appointment = React.lazy(() => import("./pages/Appointment"));

const PrivateRoute = ({ component: Component, ...rest }) => {
  let { user } = useGlobalContext();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          <Component user={user} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

const app = (
  <React.Suspense fallback={<Loading />}>
    <React.StrictMode>
      <ContextProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact render={() => <Landing />} />
            {/* <Route path="/dashboard" exact render={() => <Dashboard />} /> */}
            <Route path="/login" exact render={() => <Login />} />
            <Route path="/make-a-payment" exact render={() => <Payment />} />
            <Route
              path="/schedule-an-appointment"
              exact
              render={() => <Appointment />}
            />
            <PrivateRoute path="/dashboard" exact component={Dashboard} />
          </Switch>
        </BrowserRouter>
      </ContextProvider>
    </React.StrictMode>
  </React.Suspense>
);

ReactDOM.render(app, document.getElementById("root"));
