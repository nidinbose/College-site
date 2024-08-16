// Slider.js
import React from 'react';
import Slider from 'react-slick';
// import ''; // Create this CSS file for custom styles

const Card = ({ title, description, image }) => (
  <div className="p-4 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
    <img src={image} alt={title} className="w-full h-32 object-cover rounded-md" />
    <h3 className="mt-2 text-xl font-semibold">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const FeedBack = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const cards = [
    { title: 'Card 1', description: 'Description 1', image: 'https://via.placeholder.com/300' },
    { title: 'Card 2', description: 'Description 2', image: 'https://via.placeholder.com/300' },
    { title: 'Card 3', description: 'Description 3', image: 'https://via.placeholder.com/300' },
    { title: 'Card 4', description: 'Description 4', image: 'https://via.placeholder.com/300' },
    { title: 'Card 5', description: 'Description 5', image: 'https://via.placeholder.com/300' },
    { title: 'Card 6', description: 'Description 6', image: 'https://via.placeholder.com/300' },
    { title: 'Card 7', description: 'Description 7', image: 'https://via.placeholder.com/300' }
  ];

  return (
    <div className="p-8">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </Slider>
    </div>
  );
};

export default FeedBack;
