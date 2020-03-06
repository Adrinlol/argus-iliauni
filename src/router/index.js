import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import Loader from "react-loader-spinner";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import PrivateRoute from "./privateRoute";
import Styles from "../reusable/globalStyles";

const TemporaryFallback = () => {
  const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  };
  return (
    <Loader
      type="Triangle"
      color="rgb(108, 99, 255)"
      height={120}
      width={120}
      timeout={3000}
      style={style}
    />
  );
};

const Router = () => (
  <Suspense fallback={<TemporaryFallback />}>
    <Styles />
    <Navbar />
    <Switch>
      <Route
        exact
        path={`/`}
        component={lazy(() => import(`../pages/Authentication`))}
      />
      <PrivateRoute
        exact
        path={"/profile"}
        component={lazy(() => import(`../pages/Profile`))}
      />
    </Switch>
    <Footer />
  </Suspense>
);

export default Router;
