import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Abul Kalam',
    location: 'Dhaka',
    quote: 'কৃষক লাগবে has been a game-changer for my farm. I found reliable workers in just a few hours. Highly recommended!',
    image: 'https://randomuser.me/api/portraits/men/10.jpg',
  },
  {
    id: 2,
    name: 'Bibu Kaka',
    location: 'Chittagong',
    quote: 'প্ল্যাটফর্মটি ব্যবহার করা খুবই সহজ, এবং কর্মীদের মানও চমৎকার। আমি অবশ্যই পরবর্তী ফসল কাটার মৌসুমে এটি আবার ব্যবহার করব।',
    image: 'https://randomuser.me/api/portraits/women/11.jpg',
  },
  {
    id: 3,
    name: 'Rahim Ali',
    location: 'Sylhet',
    quote: 'I was struggling to find workers for my tea garden, but কৃষক লাগবে connected me with a great team. Thank you!',
    image: 'https://randomuser.me/api/portraits/men/12.jpg',
  },
];

function TestimonialSection() {
  return (
    <div className="bg-green-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="p-8">
                <p className="text-gray-600 text-lg italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full border-4 border-green-200" />
                  <div className="ml-4">
                    <p className="font-bold text-xl text-gray-800">{testimonial.name}</p>
                    <p className="text-md text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TestimonialSection;
