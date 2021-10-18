import React from 'react';

const ServiceCard = ({ service, handleDetails, btn }) => {
  const { name, img, price, description } = service;
  return (
    <div className="m-2 p-3 border border-gray-100 rounded shadow-lg ransition duration-500 ease-in-out transform hover:scale-105">
      <img className="rounded shadow" src={img} alt="" />
      <h2 className="text-center text-xl text-blue-600 font-bold my-2">
        {name}
      </h2>
      <p className="text-center text-xl bg-blue-400 rounded text-white my-3">
        Treatment Description
      </p>
      <p className="mb-2">{description}</p>
      <hr className="my-3" />
      <div className="flex justify-between items-center">
        <p className="text-blue-600 bg-gray-50 px-4 py-2 rounded-full text-medium text-xl">
          <span className="text-2xl text-purple-500">$</span>
          {price}
        </p>
        <button
          onClick={handleDetails}
          className="text-white bg-blue-500 px-4 py-2 rounded-full"
        >
          <i className="fas fa-tooth"></i> {btn} {name}
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
