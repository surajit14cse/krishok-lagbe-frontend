import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { allWorkers } from '../App';

function BookingPage() {
  const { id } = useParams();
  const worker = allWorkers.find(w => w.id === parseInt(id));

  const [date, setDate] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    if (worker) {
      setLocation(worker.location);
    }
  }, [worker]);

  if (!worker) {
    return <div>Worker not found</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle booking submission logic here
    console.log({ date, price, location });
    alert('Booking confirmed!');
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-4">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-8">
            <h1 className="text-3xl font-bold text-center mb-4">Book {worker.name}</h1>
            <h2 className="text-2xl font-bold text-center mb-8">Booking Details</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="mb-4">
                  <label htmlFor="calendar" className="block text-gray-700 font-bold mb-2">Select a Date</label>
                  <input type="date" id="calendar" value={date} onChange={(e) => setDate(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                  <label htmlFor="price" className="block text-gray-700 font-bold mb-2">Price (per day)</label>
                  <input type="text" id="price" value={price} onChange={(e) => setPrice(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter price" />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="location" className="block text-gray-700 font-bold mb-2">Location</label>
                <input type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter location" />
              </div>
              <div className="text-center mt-8">
                <button type="submit" className="bg-green-600 text-white font-bold px-8 py-4 rounded-full hover:bg-green-700 transition duration-300 transform hover:scale-105">Confirm Booking</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingPage;
