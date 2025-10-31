import React from 'react';
import { useParams } from 'react-router-dom';
import { allWorkers } from '../App';
import WorkerCard from './WorkerCard';

const categoryDetails = {
  farmer: {
    title: 'Farmer',
    description: 'Farmers are responsible for cultivating land, raising crops, and rearing animals. They are the backbone of the agricultural industry.',
  },
  'farm-labor': {
    title: 'Farm Labor',
    description: 'Farm laborers assist farmers with various tasks, including planting, harvesting, and tending to livestock. They provide essential support throughout the agricultural cycle.',
  },
  'seasonal-worker': {
    title: 'Seasonal Worker',
    description: 'Seasonal workers are employed for specific periods during the year, typically during planting or harvesting seasons. They provide crucial help during peak times.',
  },
  harvesting: {
    title: 'Harvesting',
    description: 'Harvesting workers specialize in gathering crops from the fields. They are skilled in using various harvesting tools and techniques to ensure a successful harvest.',
  },
  planting: {
    title: 'Planting',
    description: 'Planting workers are responsible for sowing seeds and transplanting seedlings. They play a vital role in the initial stages of crop production.',
  },
};

function CategoryPage() {
  const { categoryName } = useParams();
  const category = categoryDetails[categoryName];
  
  // Convert kebab-case category name from URL to a case-insensitive regex
  const categoryRegex = new RegExp(categoryName.replace('-', ' '), 'i');
  
  const workerList = allWorkers.filter(worker => categoryRegex.test(worker.occupation));

  return (
    <div className="container mx-auto p-4">
      {category && (
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">{category.title}</h2>
          <p className="text-lg text-gray-600">{category.description}</p>
        </div>
      )}
      <h2 className="text-2xl font-bold mb-4">Workers in this category</h2>
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