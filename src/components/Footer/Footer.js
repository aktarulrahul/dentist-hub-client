import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="dh-footer-bg text-white text-center mt-10">
      <div className="md:flex justify-around my-10">
        <div className="m-2">
          <h2 className="text-3xl my-3">Opening hours</h2>
          <p className="text-xl my-2 font-bold text-blue-300">
            Monday - Friday
          </p>
          <p className="text-xl my-2">8:00 AM - 10:00 PM</p>
          <p className="text-xl my-2 font-bold text-blue-300">Saturday</p>
          <p className="text-xl my-2">10:00 AM - 10:00 PM</p>
        </div>
        <div className="m-2">
          <h2 className="text-4xl font-bold mb-8">
            <i className="fas fa-tooth"></i> Dentist Hub
          </h2>
          <p className="text-2xl my-2">Call Us</p>
          <p className="text-xl my-2 font-bold text-blue-300">
            +14 2 3465 8754
          </p>
          <p className="text-2xl my-2">Write a Message</p>
          <p className="text-xl my-2 font-bold text-blue-300">
            noreply@dentisthub.com
          </p>
        </div>
        <div className="m-2">
          <h2 className="text-3xl my-3">Address</h2>
          <p className="text-xl my-2 font-bold text-blue-300">USA</p>
          <p className=" my-2 ">13B</p>
          <p className=" my-2 ">John Street</p>
          <p className=" my-2 ">Portland</p>
        </div>
      </div>
      <hr />
      <div className="text-center mx-2 font-medium text-xl my-4">
        <p>&copy; 2021 | All Rights Reserved | Powered by Dentist Hub</p>
      </div>
    </div>
  );
};

export default Footer;
