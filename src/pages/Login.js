import React, { useState } from 'react';
import AuthManager from '../services/AuthManager';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const inputHandler = (e) => {
    if (e.target.name === 'email') setEmail(e.target.value);
    else setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (validateEmail(email) && password.length >= 8) {
      AuthManager.login('token');
    } else console.log('Not good');
  };

  function validateEmail(mail) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(mail).toLowerCase());
  }

  return (
    <form onSubmit={submitHandler} className="border w-9/12 lg:w-1/2 mx-auto mt-5 rounded-3xl py-6">
      <div className="m-4">
        <h3 className="text-center mb-7 text-3xl">Login</h3>
        <div className="flex flex-col">
          <input
            name="email"
            className="bg-gray-100 w-full sm:w-10/12 md:w-9/12 border rounded-2xl mx-auto mb-7 p-2"
            placeholder="Enter email"
            value={email}
            onChange={inputHandler}
          />
          <input
            name="password"
            className="bg-gray-100 w-full sm:w-10/12 md:w-9/12 border rounded-2xl mx-auto mb-7 p-2"
            placeholder="Enter password"
            value={password}
            onChange={inputHandler}
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-700 w-9/12 text-white rounded-2xl shadow-md hover:bg-blue-800 py-2.5 mx-auto"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
