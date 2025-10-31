import React from 'react';
import { Link } from 'react-router-dom';
import WorkerCard from './WorkerCard';

function WorkerCardsSection({ workers }) {
  const workingImages = [
    '/FarmerImage/f1.png',
    '/FarmerImage/f2.png',
    '/FarmerImage/f3.png',
    '/FarmerImage/f4.png',
    '/FarmerImage/f5.png',
  ];

  return (
    <>
      <section className="py-12 bg-green-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">আমাদের দক্ষ কর্মী</h2>
          <div className="flex flex-col md:flex-row justify-start">
            {/* Left Side Category Panel */}
            <div className="hidden md:block w-full md:w-1/6 bg-white p-4 rounded-lg shadow-md mr-1">
              <h3 className="text-xl font-bold mb-4">Categories</h3>
              <ul>
                <li className="mb-2">
                  <Link to="/category/farmer" className="block bg-green-500 text-white px-4 py-2 rounded-md text-center hover:bg-green-600 transition duration-300">Farmer</Link>
                </li>
                <li className="mb-2">
                  <Link to="/category/farm-labor" className="block bg-green-500 text-white px-4 py-2 rounded-md text-center hover:bg-green-600 transition duration-300">Farm Labor</Link>
                </li>
                <li className="mb-2">
                  <Link to="/category/seasonal-worker" className="block bg-green-500 text-white px-4 py-2 rounded-md text-center hover:bg-green-600 transition duration-300">Seasonal Worker</Link>
                </li>
                <li className="mb-2">
                  <Link to="/category/harvesting" className="block bg-green-500 text-white px-4 py-2 rounded-md text-center hover:bg-green-600 transition duration-300">Harvesting</Link>
                </li>
                <li className="mb-2">
                  <Link to="/category/planting" className="block bg-green-500 text-white px-4 py-2 rounded-md text-center hover:bg-green-600 transition duration-300">Planting</Link>
                </li>
              </ul>
            </div>

            {/* Right Side Worker Cards */}
            <div className="w-full md:w-5/6">
              <div className="flex flex-wrap justify-center">
                {workers.map((worker) => (
                  <WorkerCard key={worker.id} worker={worker} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">কর্মরত কর্মী</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {workers.map((worker) => (
              <div key={worker.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
                <div className="bg-white rounded-lg shadow-md p-4">
                  <img src={worker.image} alt={worker.name} className="w-full h-48 object-cover rounded-t-lg" />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-gray-800">{worker.name}</h3>
                    <p className="text-gray-600">{worker.location}</p>
                    <p className="text-gray-600">{worker.occupation}</p>
                    <p className="text-gray-600">Rating: {worker.rating}</p>
                    <p className="text-gray-600">Price: {worker.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default WorkerCardsSection;