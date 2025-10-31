import React, { useState } from 'react';
import { data } from '../data';

function FilterSection({ onFilter }) {
  const [district, setDistrict] = useState('All Districts');
  const [upazila, setUpazila] = useState('All Upazilas');
  const [rating, setRating] = useState('Any Rating');

  const districts = ['All Districts', ...new Set(data.map(item => item.district))];
  const upazilas = district === 'All Districts' ? ['All Upazilas'] : ['All Upazilas', ...new Set(data.filter(item => item.district === district).flatMap(item => item.upazila))];

  const handleFilter = () => {
    onFilter({ district, upazila, rating });
  };

  return (
    <div className="bg-gray-100 p-4">
      <div className="container mx-auto flex flex-col md:flex-row md:items-center md:space-x-4">
        <h3 className="text-lg font-semibold mb-2 md:mb-0">Filter By:</h3>
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0">
          {/* District Filter */}
          <div className="relative">
            <select
              value={district}
              onChange={(e) => {
                setDistrict(e.target.value);
                setUpazila('All Upazilas');
              }}
              className="appearance-none w-full md:w-auto bg-white border border-gray-300 rounded-full px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              {districts.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>

          {/* Upazila Filter */}
          <div className="relative">
            <select
              value={upazila}
              onChange={(e) => setUpazila(e.target.value)}
              disabled={district === 'All Districts'}
              className="appearance-none w-full md:w-auto bg-white border border-gray-300 rounded-full px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-green-400 disabled:bg-gray-200"
            >
              {upazilas.map(u => <option key={u} value={u}>{u}</option>)}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>

          {/* Rating Filter */}
          <div className="relative">
            <select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="appearance-none w-full md:w-auto bg-white border border-gray-300 rounded-full px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <option>Any Rating</option>
              <option>4 Stars</option>
              <option>3 Stars</option>
              <option>2 Stars</option>
              <option>1 Star</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>

          <button
            onClick={handleFilter}
            className="w-full md:w-auto bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition duration-300"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilterSection;