import React from 'react';

function AboutPage() {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">About কৃষক লাগবে</h1>
          <p className="text-lg text-gray-600 mt-4">Connecting communities, empowering farmers.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">আমাদের লক্ষ্য</h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>কৃষক লাগবে</strong>-তে আপনাকে স্বাগতম, সারা বাংলাদেশে দক্ষ ও নির্ভরযোগ্য কৃষি কর্মীদের সাথে সংযোগ স্থাপনের জন্য আপনার বিশ্বস্ত প্ল্যাটফর্ম। আমাদের লক্ষ্য হল কৃষক এবং কর্মীদের মধ্যে ব্যবধান পূরণ করা, যাতে কাজের জন্য সঠিক ব্যক্তিকে খুঁজে পাওয়া সহজ হয়। আমরা আপনার কর্মশক্তি পরিচালনার জন্য একটি নির্বিঘ্ন এবং কার্যকর উপায় প্রদান করে কৃষি সম্প্রদায়কে সমর্থন করতে প্রতিশ্রুতিবদ্ধ।
            </p>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1580610447943-1bf654f46569?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Farm" className="rounded-lg shadow-lg"/>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-green-600 mb-2">Verified Workers</h3>
              <p className="text-gray-700">Access a database of skilled and background-checked agricultural workers.</p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-green-600 mb-2">Easy Search & Filter</h3>
              <p className="text-gray-700">Quickly find workers by location, skills, and ratings to match your needs.</p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-green-600 mb-2">Secure Booking</h3>
              <p className="text-gray-700">A reliable and secure system to book and manage worker schedules.</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4 shadow-md"/>
              <h3 className="text-xl font-bold text-gray-800">John Doe</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            <div className="text-center">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4 shadow-md"/>
              <h3 className="text-xl font-bold text-gray-800">Jane Smith</h3>
              <p className="text-gray-600">Head of Operations</p>
            </div>
            <div className="text-center">
              <img src="https://randomuser.me/api/portraits/men/36.jpg" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4 shadow-md"/>
              <h3 className="text-xl font-bold text-gray-800">Peter Jones</h3>
              <p className="text-gray-600">Lead Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;