import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import AppLayout from "../components/layouts/AppLayout";
import AuthLayout from "../components/layouts/AuthLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import paths from "./paths";
import AuthManager from "../services/AuthManager";

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

export default class RootRouter extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: AuthManager.isLoggedIn(),
    };
  }

  componentDidMount() {
    this.subscriber = (token) => {
      this.setState({ isLoggedIn: !!token });
    };
    AuthManager.subscribe(this.subscriber);
  }

  componentWillUnmount() {
    AuthManager.unsubsribe(this.subscriber);
  }

  render() {
    const { isLoggedIn } = this.state;
    return (
      <BrowserRouter>
        {isLoggedIn ? (
          <AppLayout>
            <Switch>
              {AppRoutes.map(({ path, Component: c, exact }) => {
                return (
                  <Route key={path} path={path} exact={exact} component={c} />
                );
              })}
              <Redirect to={paths.home} />
            </Switch>
          </AppLayout>
        ) : (
          <AuthLayout>
            <Switch>
              {AuthRoutes.map(({ path, Component: c, exact }) => {
                return (
                  <Route key={path} path={path} exact={exact} component={c} />
                );
              })}
              <Redirect to={paths.login} />
            </Switch>
          </AuthLayout>
        )}
      </BrowserRouter>
    );
  }
}
