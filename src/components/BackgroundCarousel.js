import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  'https://images.unsplash.com/photo-1499529112087-3cb3b73cec95',
  'https://images.unsplash.com/photo-1560493676-04071c5f467b',
  'https://images.unsplash.com/photo-1464226184884-fa280b87c399',
  'https://images.unsplash.com/photo-1580910222256-444893959e33',
];

const BackgroundCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full z-[-1]">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <div
              className="h-screen bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BackgroundCarousel;