import React from 'react';

function BookingPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="container mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Book a Worker</h1>
        <p className="text-gray-600">Select a worker, date, and hours to book their service.</p>
        {/* Placeholder for booking form */}
        <div className="mt-8">
          <div className="mb-4">
            <label htmlFor="worker" className="block text-gray-700 text-sm font-bold mb-2">Worker</label>
            <select id="worker" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              <option value="">Select a Worker</option>
              {/* Dummy workers */}
              <option value="1">John Doe (Mason)</option>
              <option value="2">Jane Smith (Helper)</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">Date</label>
            <input type="date" id="date" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-6">
            <label htmlFor="hours" className="block text-gray-700 text-sm font-bold mb-2">Hours</label>
            <input type="number" id="hours" min="1" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Number of hours" />
          </div>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookingPage;