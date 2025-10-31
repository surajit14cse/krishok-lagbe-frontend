import React from 'react';
import { Link } from 'react-router-dom';
import BackgroundCarousel from './BackgroundCarousel';

function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <BackgroundCarousel />
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md z-10 text-center">
        <h2 className="text-2xl font-bold mb-6">Choose Your Role</h2>
        <div className="flex justify-center gap-4">
          <Link to="/login/worker">
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Login as a Worker
            </button>
          </Link>
          <Link to="/login/owner">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Login as an Owner
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;