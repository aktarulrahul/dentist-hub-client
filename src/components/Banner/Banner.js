import React from 'react';
import './Banner.css';
import { Link } from 'react-router-dom';

const Banner = ({ img, title, sub, link, btn }) => {
  return (
    <div className="m-4 hbd-banner-bg rounded-lg flex-none md:flex justify-between items-center px-6">
      <div>
        <h1 className="text-5xl mb-3 font-extrabold text-white">{title}</h1>
        <p className="text-white text-3xl mb-5">{sub}</p>
        <div className="mb-10">
          <Link to={link}>
            <button className="bg-white border border-blue-600 text-blue-600 rounded-full py-3 px-6 transition duration-500 ease-in-out transform hover:scale-110 ">
              {btn}
            </button>
          </Link>
        </div>
      </div>
      <div>
        <img
          className=" transition duration-500 ease-in-out transform  hover:-translate-y-1 hover:scale-105 lg:h-screen pt-16 h-full"
          src={img}
          alt={title}
        />
      </div>
    </div>
  );
};

export default Banner;
