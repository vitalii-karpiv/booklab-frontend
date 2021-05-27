import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import AuthManager from '../../services/AuthManager';
import paths from '../../router/paths';
import classes from '../../styles/activeLink.module.css';
import DropDown from '../UI/DropDown';

const Navbar = () => {
  const [isLoggedIn, setisLoggedIn] = useState(AuthManager.isLoggedIn());

  useEffect(() => {
    const unsubsribeFromLoginStatusChange = AuthManager.onLoginStatusChange((token) => setisLoggedIn(token));
    return unsubsribeFromLoginStatusChange();
  }, []);

  return (
    <header className="bg-white-300">
      <nav className="md:container md:mx-auto pt-3">
        <div className="flex justify-between h-full items-center">
          <span className="text-lg">BookLab</span>
          <input className="w-3/6 rounded-xl cursor-pointer p-2 bg-gray-200" placeholder="Search by book title" />
          {isLoggedIn ? (
            <div className="flex">
              <DropDown
                menuButton={
                  <i
                    className="fa fa-user-circle text-indigo-400"
                    style={{ font: 'normal normal normal 25px/1 FontAwesome' }}
                  />
                }
                items={[
                  <Link
                    key="profile"
                    to={paths.profile}
                    className="bg-indigo-400 w-full h-full rounded hover:bg-indigo-600 text-white block text-center"
                  >
                    Profile
                  </Link>,
                  <button
                    key="logout"
                    type="button"
                    onClick={() => AuthManager.logout()}
                    className="bg-indigo-400 w-full h-full rounded hover:bg-indigo-600 text-white"
                  >
                    Logout
                  </button>,
                ]}
              />
            </div>
          ) : (
            <div className="flex justify-between md:w-40 sm:w-36">
              <NavLink to={paths.login} className="bg-indigo-400 p-1 rounded px-2 text-white hover:bg-indigo-600 mr-2">
                Login
              </NavLink>
              <NavLink to={paths.signup} className="bg-indigo-400 p-1 rounded px-2 text-white hover:bg-indigo-600">
                SignUp
              </NavLink>
            </div>
          )}
        </div>
        <ul className="flex justify-center py-2">
          <NavLink exact to={paths.home} activeClassName={classes.link} className="m-5 text-gray-400">
            Home
          </NavLink>
          <NavLink exact activeClassName={classes.link} className="m-5 text-gray-400" to={paths.login}>
            Categories
          </NavLink>
          <NavLink exact to={paths.login} activeClassName={classes.link} className="m-5 text-gray-400">
            Newest
          </NavLink>
          <NavLink exact to={paths.login} activeClassName={classes.link} className="m-5 text-gray-400">
            Bestsellers
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
