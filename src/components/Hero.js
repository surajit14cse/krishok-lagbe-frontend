import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div
      className="relative bg-cover bg-center h-96"
      style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-5xl font-bold">Find the Best Agricultural Workers</h1>
        <p className="mt-4 text-xl">Your one-stop solution for hiring skilled and reliable farm labor.</p>
        <Link to="/register" className="mt-8 bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition duration-300">
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default Hero;