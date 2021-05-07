import React from "react";
import { Link } from "react-router-dom";
import paths from "../../router/paths";

export default function AppLayout(props) {
  const { children, onLogout } = props;
  return (
    <>
      <header className="bg-red-300 h-16">
        <nav className="md:container md:mx-auto flex justify-between h-full items-center">
          <span className="text-lg">BookLab</span>
          <div className="flex">
            <button
              type="button"
              href="/"
              onClick={onLogout}
              className="bg-red-600 p-1 rounded px-2"
            >
              Logout
            </button>
          </div>
        </nav>
      </header>
      <div className="md:container md:mx-auto">{children}</div>
    </>
  );
}
