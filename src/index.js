import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Loading from "./frontend/components/Loading";

// In general, render works best with functional components,
// as they do not have lifecycle methods by default,
// and component works best with class components.
const Landing = React.lazy(() => import("./frontend/pages/Landing.js"));
const Dashboard = React.lazy(() => import("./frontend/pages/Dashboard"));

const app = (
  <React.Suspense fallback={<Loading />}>
    <React.StrictMode>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={() => <Landing />} />
          <Route path="/dashboard" exact render={() => <Dashboard />} />
        </Switch>
      </BrowserRouter>
    </React.StrictMode>
  </React.Suspense>
);

ReactDOM.render(app, document.getElementById("root"));
