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

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Send us a message</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
            <input type="text" id="name" name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
            <textarea id="message" name="message" rows="5" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
          </div>
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-700 transition duration-300">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;