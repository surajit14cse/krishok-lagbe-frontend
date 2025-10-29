import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { allWorkers } from '../App';

function WorkerProfilePage() {
  const { id } = useParams();
  const worker = allWorkers.find(w => w.id === parseInt(id));

  if (!worker) {
    return <div>Worker not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img src={worker.image} alt={worker.name} className="h-48 w-full object-cover md:w-48" />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{worker.occupation}</div>
            <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">{worker.name}</h1>
            <p className="mt-4 max-w-2xl text-xl text-gray-500">{worker.location}</p>
            <p className="mt-2 text-xl text-gray-500">{worker.phone}</p>
            <div className="flex items-center mt-2">
              <span className="text-yellow-500">{'★'.repeat(Math.round(worker.rating))}</span>
              <span className="text-gray-600 ml-2">({worker.rating})</span>
            </div>
            <p className="mt-6 text-gray-600">{worker.description}</p>
            <div className="mt-8">
              <Link to={`/booking/${worker.id}`}>
                <button className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition duration-300">Book Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkerProfilePage;