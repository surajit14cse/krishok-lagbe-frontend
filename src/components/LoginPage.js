import React from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="flex flex-col md:flex-row w-full max-w-2xl min-h-[500px] bg-white rounded-lg shadow-md z-10 overflow-hidden">
        <div className="hidden md:flex w-full md:w-1/2 bg-green-500 p-8 text-white flex-col justify-center items-center text-center">
          <svg className="h-24 w-24 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M32 56V36"></path><path d="M32 36C32 24 22 16 16 8"></path><path d="M32 36c0-12 10-20 16-28"></path><path d="M40 44l-8-8"></path><path d="M24 44l8-8"></path><path d="M40 52l-8-8"></path><path d="M24 52l8-8"></path></g></svg>
          <h2 className="text-3xl font-bold">Welcome back, connect with your agricultural community.</h2>
        </div>
        <div className="w-full md:w-1/2 p-8 text-center">
          <p className="text-gray-600 mb-4">Welcome back! Please select your role to login.</p>
          <h2 className="text-2xl font-bold mb-6">Choose Your Role</h2>
          <div className="flex flex-col items-center gap-4">
            <Link to="/login/worker" className="w-full">
              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg focus:outline-none focus:shadow-outline flex items-center justify-center gap-2 transition-transform transform hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 016-6h6a6 6 0 016 6v1h-3" />
                </svg>
                Login as a Worker
              </button>
            </Link>
            <Link to="/login/owner" className="w-full">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg focus:outline-none focus:shadow-outline flex items-center justify-center gap-2 transition-transform transform hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 21h14a2 2 0 002-2v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7a2 2 0 002 2z" />
                </svg>
                Login as an Owner
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;