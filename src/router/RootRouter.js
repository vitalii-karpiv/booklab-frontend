import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import AppLayout from "../components/layouts/AppLayout";
import AuthLayout from "../components/layouts/AuthLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import paths from "./paths";

const AppRoutes = [
  {
    path: paths.home,
    exact: true,
    Component: Home,
  },
  {
    path: paths.profile,
    exact: true,
    Component: <h1>Profile</h1>,
  },
];

const AuthRoutes = [
  {
    path: paths.login,
    exact: true,
    Component: Login,
  },
  {
    path: paths.signup,
    exact: true,
    Component: SignUp,
  },
];

export default function RootRouter() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onLogin = () => {
    setIsLoggedIn(true);
  };
  const onLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
      {isLoggedIn ? (
        <AppLayout onLogout={onLogout}>
          <Switch>
            {AppRoutes.map(({ path, Component, exact }) => {
              return (
                <Route
                  key={path}
                  path={path}
                  exact={exact}
                  component={Component}
                />
              );
            })}
            <Redirect to={paths.home} />
          </Switch>
        </AppLayout>
      ) : (
        <AuthLayout onLogin={onLogin}>
          <Switch>
            {AuthRoutes.map(({ path, Component, exact }) => {
              return (
                <Route
                  key={path}
                  path={path}
                  exact={exact}
                  component={Component}
                />
              );
            })}
            <Redirect to={paths.login} />
          </Switch>
        </AuthLayout>
      )}
    </BrowserRouter>
  );
}
