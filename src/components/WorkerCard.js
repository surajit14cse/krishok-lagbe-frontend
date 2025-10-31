import React from 'react';
import { Link } from 'react-router-dom';

function WorkerCard({ worker }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition duration-300 ease-in-out m-2">
      <Link to={`/worker/${worker.id}`}>
        <img src={worker.image} alt={worker.name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-bold text-gray-800">{worker.name}</h3>
          <p className="text-gray-600">{worker.occupation}</p>
          <p className="text-gray-500 text-sm">{worker.location}</p>
          <div className="flex items-center mt-2">
            <span className="text-yellow-500">{'★'.repeat(Math.round(worker.rating))}</span>
            <span className="text-gray-600 ml-2">({worker.rating})</span>
          </div>
          <p className="text-gray-600">Price: {worker.price}</p>
        </div>
      </Link>
      <div className="p-4 bg-gray-50 text-center">
        <Link to={`/worker/${worker.id}`} className="text-green-600 hover:text-green-800 font-semibold">View Profile</Link>
      </div>
    </div>
  );
}

export default WorkerCard;