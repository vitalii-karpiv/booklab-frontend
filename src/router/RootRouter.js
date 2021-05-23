import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import AppLayout from '../components/layouts/AppLayout';
import AuthLayout from '../components/layouts/AuthLayout';
import Home from '../pages/Home';
import BookDetails from '../pages/BookDetails';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import paths from './paths';
import AuthManager from '../services/AuthManager';

const AppRoutes = [
  {
    path: paths.home,
    exact: true,
    Component: Home,
  },
  {
    path: paths.bookDetails,
    exact: false,
    Component: BookDetails,
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
    this.unsubsribeFromLoginStatusChange = AuthManager.onLoginStatusChange((token) => {
      this.setState({ isLoggedIn: token });
    });
  }

  componentWillUnmount() {
    this.unsubsribeFromLoginStatusChange();
  }

  render() {
    const { isLoggedIn } = this.state;
    return (
      <BrowserRouter>
        {isLoggedIn ? (
          <AppLayout>
            <Switch>
              {AppRoutes.map(({ path, Component: c, exact }) => {
                return <Route key={path} path={path} exact={exact} component={c} />;
              })}
              <Redirect to={paths.home} />
            </Switch>
          </AppLayout>
        ) : (
          <AuthLayout>
            <Switch>
              {AuthRoutes.map(({ path, Component: c, exact }) => {
                return <Route key={path} path={path} exact={exact} component={c} />;
              })}
              <Redirect to={paths.login} />
            </Switch>
          </AuthLayout>
        )}
      </BrowserRouter>
    );
  }
}
