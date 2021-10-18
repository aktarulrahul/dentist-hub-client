import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuBar = () => {
  const user = { name: 'rahul', email: 'rahul@rahul.com' };
  return (
    <div className="md:sticky top-0 z-10 bg-blue-500 mb-4 p-2 xl:px-4">
      <div className="m-2 lg:flex lg:h-14 lg:items-center lg:justify-between md:justify-around text-white text-center">
        <NavLink to="/">
          <h2 className="text-4xl font-bold">
            <i className="fas fa-tooth"></i> Dentist Hub
          </h2>
        </NavLink>
        <div className="flex md:justify-center justify-around items-center my-2">
          <div className="px-2">
            <NavLink
              to="/home"
              activeStyle={{
                fontWeight: 'bold',
                backgroundColor: '#3043B8',
                color: '#fff',
                borderRadius: '20px',
                padding: '4px 10px',
              }}
            >
              Home
            </NavLink>
          </div>
          <div className="px-2">
            <NavLink
              to="/about"
              activeStyle={{
                fontWeight: 'bold',
                backgroundColor: '#3043B8',
                color: '#fff',
                borderRadius: '20px',
                padding: '4px 10px',
              }}
            >
              About
            </NavLink>
          </div>
          <div className="px-2">
            <NavLink
              to="/services"
              activeStyle={{
                fontWeight: 'bold',
                backgroundColor: '#3043B8',
                color: '#fff',
                borderRadius: '20px',
                padding: '4px 10px',
              }}
            >
              All Services
            </NavLink>
          </div>
          <div className="px-2">
            <NavLink
              to="/contact"
              activeStyle={{
                fontWeight: 'bold',
                backgroundColor: '#3043B8',
                color: '#fff',
                borderRadius: '20px',
                padding: '4px 10px',
              }}
            >
              Contact
            </NavLink>
          </div>
        </div>
        <div className="flex md:justify-between my-2 justify-around">
          <div className="flex items-center text-white mr-1">
            {user?.email ? (
              <div className="flex items-center justify-between">
                <p>{user.name}</p>
                <button className="text-blue-500 px-4 py-2 rounded-full bg-white ml-2">
                  Logout
                </button>
              </div>
            ) : (
              <NavLink
                to="/signin"
                activeStyle={{
                  fontWeight: 'bold',
                  backgroundColor: '#3043B8',
                  color: '#fff',
                  borderRadius: '20px',
                  padding: '4px 10px',
                }}
              >
                Login
              </NavLink>
            )}
          </div>
          <div className="text-blue-500 px-4 py-2 rounded-full bg-white ml-2">
            <NavLink
              to="/signup"
              activeStyle={{
                fontWeight: 'bold',
              }}
            >
              Sign Up
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
