import React, { useState } from 'react';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { BiHide } from "react-icons/bi";
import { BiSolidShow } from "react-icons/bi";

const LoginSignup = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center">
      <div className="bg-slate-200 p-10 rounded-lg shadow-md w-full max-w-md transform transition-all duration-500 ease-in-out hover:scale-105">
        <h2 className="text-2xl font-bold text-center mb-6">
          {isSignUp ? 'Create Account' : 'Welcome Back'}
        </h2>

        <div className="flex justify-center mb-6">
          <button
            onClick={() => setIsSignUp(false)}
            className={`px-4 py-2 rounded transition-all duration-300 ease-in-out transform ${!isSignUp ? 'bg-blue-500 text-white' : 'text-blue-500 hover:bg-blue-500 hover:text-white'}`}
          >
            Log In
          </button>
          <button
            onClick={() => setIsSignUp(true)}
            className={`ml-2 px-4 py-2 rounded transition-all duration-300 ease-in-out transform ${isSignUp ? 'bg-blue-500 text-white' : 'text-blue-500 hover:bg-blue-500 hover:text-white'}`}
          >
            Sign Up
          </button>
        </div>

        {isSignUp ? <SignUpForm showPassword={showPassword} setShowPassword={setShowPassword} /> : <LoginForm showPassword={showPassword} setShowPassword={setShowPassword} />}

        <div className="text-center mt-6">
          <button
            onClick={toggleForm}
            className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out"
          >
            {isSignUp ? 'Already have an account? Log in' : 'Don’t have an account? Sign up'}
          </button>
        </div>
      </div>
    </div>
  );
};

const LoginForm = ({ showPassword, setShowPassword }) => (
  <form>
    <div className="relative mb-4">
      <input
        type="email"
        id="login-email"
        placeholder="Enter your email"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
      />
      <label
        htmlFor="login-email"
        className="absolute top-0 left-2 text-gray-600 transition-all duration-300 transform -translate-y-3 scale-75 origin-top-left font-bold"
      >
      <MdEmail />
      </label>
    </div>

    <div className="relative mb-4">
    
      <input
        type={showPassword ? 'text' : 'password'}
        id="login-password"
        placeholder="Enter your password"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
      />
      <label
        htmlFor="login-password"
        className="absolute top-0 left-2 text-gray-600 transition-all duration-300 transform -translate-y-3 scale-75 origin-top-left font-extrabold"
      >
        <RiLockPasswordFill />
      
      </label>
      <span
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500 cursor-pointer hover:text-blue-700 transition duration-300 ease-in-out"
      >
        {showPassword ? <BiHide /> : <BiSolidShow />}
      </span>
    </div>

    <div className="text-right mb-4">
      <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
    </div>

    <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out">
      Log In
    </button>
  </form>
);

const SignUpForm = ({ showPassword, setShowPassword }) => (
  <form>
    <div className="relative mb-4">
      <input
        type="text"
        id="signup-name"
        placeholder="Enter your full name"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
      />
      <label
        htmlFor="signup-name"
        className="absolute top-0 left-3 text-gray-600  transition-all duration-300 transform -translate-y-3 scale-75 origin-top-left "
      >
        <MdDriveFileRenameOutline />
      </label>
    </div>

    <div className="relative mb-4">
      <input
        type="email"
        id="signup-email"
        placeholder="Enter your email"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
      />
      <label
        htmlFor="signup-email"
        className="absolute top-0 left-3 text-gray-600 transition-all duration-300 transform -translate-y-3 scale-75 origin-top-left font-bold"
      >
        <MdEmail />
      </label>
    </div>

    <div className="relative mb-4">
      <input
        type={showPassword ? 'text' : 'password'}
        id="signup-password"
        placeholder="Create a password"
        className="w-full px-4 py-2  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out "
      />
      <label
        htmlFor="signup-password"
        className="absolute top-0 left-3 text-gray-600 transition-all duration-300 transform -translate-y-3 scale-75 origin-top-left font-bold "
      >
         <RiLockPasswordFill />
      </label>
      <span
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500 cursor-pointer hover:text-blue-600 transition duration-300 ease-in-out "
      >
        {showPassword ? <BiHide />
 : <BiSolidShow />
}
      </span>
    </div>

    <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out ">
      Sign Up
    </button>
  </form>
);

export default LoginSignup;
