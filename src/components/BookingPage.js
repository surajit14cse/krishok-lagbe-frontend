import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { allWorkers } from '../App';
import axios from 'axios';

function BookingPage() {
  const { id } = useParams();
  const worker = allWorkers.find(w => w.id === parseInt(id));

  const [bidAmount, setBidAmount] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    if (worker) {
      setLocation(worker.location);
    }
  }, [worker]);

  if (!worker) {
    return <div>Worker not found</div>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/bids', { 
        workerId: worker.id,
        ownerId: 1, // Assuming ownerId is 1 for now
        bidAmount: parseFloat(bidAmount)
      });
      if (response.status === 201) {
        alert('Bid placed successfully!');
      }
    } catch (err) {
      console.error(err);
      alert('Failed to place bid.');
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-4">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-8">
            <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">Place a Bid on {worker.name}</h1>
            <h2 className="text-xl md:text-2xl font-bold text-center mb-8">Bidding Details</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="bidAmount" className="block text-gray-700 font-bold mb-2">Bid Amount (per day)</label>
                <input type="number" id="bidAmount" value={bidAmount} onChange={(e) => setBidAmount(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your bid amount" />
              </div>
              <div className="mb-4">
                <label htmlFor="location" className="block text-gray-700 font-bold mb-2">Location</label>
                <input type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter location" />
              </div>
              <div className="text-center mt-8">
                <button type="submit" className="bg-green-600 text-white font-bold px-8 py-4 rounded-full hover:bg-green-700 transition duration-300 transform hover:scale-105">Place Bid</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingPage;
