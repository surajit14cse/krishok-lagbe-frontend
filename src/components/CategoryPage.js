import React from 'react';
import { useParams } from 'react-router-dom';
import { allWorkers } from '../App';
import WorkerCard from './WorkerCard';

function CategoryPage() {
  const { categoryName } = useParams();
  
  // Convert kebab-case category name from URL to a case-insensitive regex
  const categoryRegex = new RegExp(categoryName.replace('-', ' '), 'i');
  
  const workerList = allWorkers.filter(worker => categoryRegex.test(worker.occupation));

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">{categoryName.replace('-', ' ').toUpperCase()}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {workerList.length > 0 ? (
          workerList.map(worker => (
            <WorkerCard key={worker.id} worker={worker} />
          ))
        ) : (
          <p>No workers found in this category.</p>
        )}
      </div>
    </div>
  );
}

export default CategoryPage;