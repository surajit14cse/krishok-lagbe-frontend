import React from 'react';
import { useLocation } from 'react-router-dom';
import WorkerCard from './WorkerCard';
import { allWorkers } from '../App';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchResultsPage() {
  const query = useQuery();
  const searchTerm = query.get('q');
  const filteredWorkers = allWorkers.filter(worker =>
    worker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    worker.occupation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Search Results for "{searchTerm}"</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredWorkers.length > 0 ? (
          filteredWorkers.map(worker => (
            <WorkerCard key={worker.id} worker={worker} />
          ))
        ) : (
          <p>No workers found for your search.</p>
        )}
      </div>
    </div>
  );
}

export default SearchResultsPage;