
import React from 'react';

const services = [
  {
    icon: '🌾',
    title: 'Harvest Labour',
    description: 'Skilled workers for crop harvesting.',
  },
  {
    icon: '👨‍🌾',
    title: 'Plantation Labour',
    description: 'Helpers for planting and seedling setup.',
  },
  {
    icon: '💧',
    title: 'Irrigation Team',
    description: 'Labour for water management and equipment setup.',
  },
  {
    icon: '🚜',
    title: 'Transport & Loading',
    description: 'Helpers for goods loading and unloading.',
  },
  {
    icon: '🌱',
    title: 'Land Preparation',
    description: 'Tractor drivers and land tilling support.',
  },
  {
    icon: '🔧',
    title: 'Maintenance Support',
    description: 'Ongoing crop care and maintenance workers.',
  },
];

function Services() {
  return (
    <section id="services" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Our Services</h2>
          <p className="text-lg text-gray-600 mt-2">
            Connecting you with the right farm labour for every need.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-8 text-center transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
