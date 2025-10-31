import React from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="container mx-auto p-4">
        <div className="flex flex-col lg:flex-row w-full lg:w-10/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center" style={{backgroundImage: `url('/FarmerImage/f3.png')`}}>
            <h1 className="text-white text-4xl font-bold mb-3">Connecting Fields and Hands</h1>
            <div>
              <p className="text-white text-lg">Your trusted partner in agriculture. Find the right workers or the right work, all in one place.</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 py-16 px-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Choose Your Role</h2>
            <p className="text-gray-600 mb-8">Are you here to offer your skills or to find skilled workers for your farm?</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link to="/login/worker" className="transform hover:scale-105 transition duration-300">
                <div className="p-8 bg-green-100 rounded-lg shadow-md text-center">
                  <h3 className="text-2xl font-bold text-green-800 mb-2">I am a Worker</h3>
                  <p className="text-gray-700">Find job opportunities and showcase your skills to farm owners.</p>
                </div>
              </Link>
              <Link to="/login/owner" className="transform hover:scale-105 transition duration-300">
                <div className="p-8 bg-blue-100 rounded-lg shadow-md text-center">
                  <h3 className="text-2xl font-bold text-blue-800 mb-2">I am an Owner</h3>
                  <p className="text-gray-700">Find and hire skilled workers for your farm and manage your workforce.</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;