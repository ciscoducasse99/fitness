import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import Loading from "./frontend/components/Loading";
import { AuthProvider, useAuth } from "./frontend/auth-context/authContext";

// In general, render works best with functional components,
// as they do not have lifecycle methods by default,
// and component works best with class components.
const Landing = React.lazy(() => import("./frontend/pages/Landing.js"));
const Dashboard = React.lazy(() => import("./frontend/pages/Dashboard"));
const Login = React.lazy(() => import("./frontend/pages/Login"));
const Payment = React.lazy(() => import("./frontend/pages/Payment"));
const Appointment = React.lazy(() => import("./frontend/pages/Appointment"));

const PrivateRoute = ({ component: Component, ...rest }) => {
  let { user } = useAuth();
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
      <AuthProvider>
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
      </AuthProvider>
    </React.StrictMode>
  </React.Suspense>
);

ReactDOM.render(app, document.getElementById("root"));
