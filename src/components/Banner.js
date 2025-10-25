import React from 'react';

function Banner() {
  return (
    <div className="bg-green-100 p-4 text-center">
      <p className="text-green-800">
        Special offer! Get 10% off on your first booking. <a href="/book" className="underline">Book Now</a>
      </p>
    </div>
  );
}

export default Banner;