import React from 'react';

function FAQPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">Frequently Asked Questions</h1>
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold">How do I hire a worker?</h2>
          <p className="text-gray-700">You can hire a worker by browsing the categories or searching for specific skills. Once you find a suitable worker, you can view their profile and book their services directly.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">What are the payment options?</h2>
          <p className="text-gray-700">We support various payment methods, including mobile banking, credit/debit cards, and cash on delivery. All payments are processed securely.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Can I cancel a booking?</h2>
          <p className="text-gray-700">Yes, you can cancel a booking up to 24 hours before the scheduled start time. Please refer to our cancellation policy for more details.</p>
        </div>
      </div>
    </div>
  );
}

export default FAQPage;