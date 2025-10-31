import React, { useState, useEffect } from 'react';
import axios from 'axios';

function OwnerBidsPage() {
  const [bids, setBids] = useState([]);
  const ownerId = 1; // Assuming ownerId is 1 for now

  useEffect(() => {
    const fetchBids = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/bids/owner/${ownerId}`);
        setBids(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchBids();
  }, [ownerId]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">My Bids</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {bids.length > 0 ? (
          bids.map(bid => (
            <div key={bid.id} className="bg-white rounded-lg shadow-md p-4">
              <p className="text-lg font-bold">Worker ID: {bid.workerId}</p>
              <p className="text-lg">Bid Amount: {bid.bidAmount}</p>
            </div>
          ))
        ) : (
          <p>No bids found.</p>
        )}
      </div>
    </div>
  );
}

export default OwnerBidsPage;
