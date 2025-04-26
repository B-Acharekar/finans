"use client";

import { useState } from "react";
import "./login.css"; // Make sure this file exists or remove if unnecessary

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("login submitted:", { email, password });
    // You can add your login API call here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black-100 dark:bg-black-700 py-4 px-4 sm:px-6 lg:px-8">
      <div className="flex w-full max-w-4xl overflow-hidden bg-white rounded-2xl shadow-xl dark:bg-gray-800">
        <div
          className="hidden bg-cover lg:block lg:w-1/2"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80')",
          }}
        ></div>

        <div className="w-full px-8 py-6 md:px-10 lg:w-1/2">
          <div className="flex justify-center mx-auto">
            <img
              className="w-auto h-16 sm:h-20 md:h-22 lg:h-28"
              src="/Logo.svg"
              alt="Finans Logo"
            />
          </div>

          <h2 className="mt-6 text-2xl font-bold text-center text-gray-700 dark:text-gray-200">
            Welcome back
          </h2>

          <p className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
            Sign in to access your account
          </p>

          <div className="mt-6">
            <a
              href="#"
              className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 transition-all"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 40 40">
                {/* SVG Paths */}
              </svg>
              Sign in with Google
            </a>
          </div>

          <div className="flex items-center justify-between mt-6">
            <span className="w-1/5 border-b dark:border-gray-600"></span>
            <span className="text-xs text-gray-400 uppercase">or</span>
            <span className="w-1/5 border-b dark:border-gray-600"></span>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 dark:focus:border-pink-400 focus:outline-none"
              />
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Password
                </label>
                <a href="#" className="text-xs text-pink-500 hover:underline">
                  Forgot password?
                </a>
              </div>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 dark:focus:border-pink-400 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-3 text-sm font-semibold text-white bg-pink-600 rounded-lg hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all"
            >
              Sign In
            </button>
          </form>

          <p className="mt-6 text-xs text-center text-gray-400">
            Don’t have an account yet?
            <a href="/signup" className="ml-1 text-pink-500 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>

  );
}
