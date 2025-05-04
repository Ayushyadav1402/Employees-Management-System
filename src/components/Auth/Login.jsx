import React, { useState } from 'react';

const Login = ({ handleLogin, errorMessage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    const success = handleLogin(email, password);

    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-900">
      <div className="border-2 border-emerald-600 p-20 rounded-lg">
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center justify-center space-y-4"
        >
          <input
            required
            className="text-white outline-none bg-transparent border-2 border-emerald-600 rounded-full px-5 py-3 text-xl placeholder:text-gray-400"
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            required
            className="text-white outline-none bg-transparent border-2 border-emerald-600 rounded-full px-5 py-3 text-xl placeholder:text-gray-400"
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {errorMessage && (
            <div className="text-red-500 mt-2">{errorMessage}</div>
          )}

          <button
            type="submit"
            className="mt-5 text-white bg-emerald-600 rounded-full px-5 py-3 text-xl hover:bg-emerald-700 transition"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
