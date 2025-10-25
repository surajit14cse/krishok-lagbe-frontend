import React from 'react';

function ContactPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg text-gray-700">
        Have questions or need assistance? We're here to help. You can reach us through the following channels:
      </p>
      <ul className="mt-4 text-lg text-gray-700">
        <li><strong>Email:</strong> support@krishoklagbe.com</li>
        <li><strong>Phone:</strong> +880 123 456 7890</li>
        <li><strong>Address:</strong> 123 Green Road, Dhaka, Bangladesh</li>
      </ul>
      <p className="mt-4 text-lg text-gray-700">
        Our support team is available from 9 AM to 6 PM, Sunday to Thursday.
      </p>
    </div>
  );
}

export default ContactPage;