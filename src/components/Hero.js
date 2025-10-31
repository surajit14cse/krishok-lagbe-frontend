import React from 'react';

function Hero() {
  return (
    <div
      className="relative bg-cover bg-center h-64 md:h-96"
      style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-3xl md:text-5xl font-bold">Find the Best Agricultural Workers</h1>
        <p className="mt-4 text-lg md:text-xl">Your one-stop solution for hiring skilled and reliable farm labor.</p>
        <a href="#services" className="mt-8 bg-green-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-green-700 transition duration-300">
          Find Worker
        </a>
      </div>
    </div>
  );
}

export default Hero;