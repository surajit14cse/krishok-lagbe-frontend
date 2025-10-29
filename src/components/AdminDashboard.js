import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('isLoggedIn')) {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="container mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>
        <p className="text-gray-600">Welcome to the Admin Dashboard. Here you can manage workers, bookings, and discounts.</p>
        {/* Placeholder for admin functionalities */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-blue-100 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-blue-800 mb-2">Manage Workers</h2>
            <p className="text-blue-700">Add, edit, or delete worker profiles.</p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-green-800 mb-2">View Bookings</h2>
            <p className="text-green-700">Monitor and manage all booking requests.</p>
          </div>
          <div className="bg-yellow-100 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-yellow-800 mb-2">Manage Discounts</h2>
            <p className="text-yellow-700">Create and update promotional discounts.</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="mt-8 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default AdminDashboard;