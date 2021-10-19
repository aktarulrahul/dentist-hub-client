import React from 'react';

const TestimonialCard = ({ feedback }) => {
  const { name, says, img } = feedback;
  return (
    <div className="bg-white p-4 rounded shadow-lg ransition duration-500 ease-in-out transform hover:scale-105 mb-3">
      <blockquote>
        <q className="talic">{says}</q>
      </blockquote>

      <div className="flex jusify-around items-center my-3">
        <img src={img} alt="" className="h-24 w-24 rounded-full" />
        <h3 className="text-2xl text-blue-600 my-5 mx-3"> {name}</h3>
      </div>
    </div>
  );
};

export default TestimonialCard;
