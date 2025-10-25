import React from 'react';
import BackgroundCarousel from './BackgroundCarousel';

function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <BackgroundCarousel />
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md z-10">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Email" />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input type="password" id="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" placeholder="********" />
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Login
            </button>
            <a href="/register" className="inline-block align-baseline font-bold text-sm text-green-600 hover:text-green-800">
              Don't have an account? Register
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;