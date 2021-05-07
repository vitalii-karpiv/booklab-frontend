import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const inputHandler = (e) => {
    if (e.target.name === "email") setEmail(e.target.value);
    else setPassword(e.target.value);
  };

  return (
    <form className="border w-9/12 mx-auto mt-5 rounded-3xl">
      <div className="m-4">
        <h3 className="text-center mb-4">Login</h3>
        <div className="flex flex-col">
          <input
            name="email"
            className="bg-gray-100 w-9/12 border rounded-2xl mx-auto mb-4 p-2"
            placeholder="Enter email"
            value={email}
            onChange={inputHandler}
          />
          <input
            name="password"
            className="bg-gray-100 w-9/12 border rounded-2xl mx-auto mb-4 p-2"
            placeholder="Enter password"
            value={password}
            onChange={inputHandler}
          />
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            className="bg-blue-700 w-9/12 text-white rounded-2xl shadow-md hover:bg-blue-800 py-2.5 mx-auto"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
