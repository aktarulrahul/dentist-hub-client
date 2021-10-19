import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import avater from '../../images/avater.png';

const MenuBar = () => {
  const { user, logOut } = useAuth();
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

        <div>
          {user?.email ? (
            <div className="flex items-center justify-center lg:justify-end pb-1">
              <img
                className="rounded-full w-1/12"
                src={user.photoURL ? user.photoURL : avater}
                alt=""
              />
              <p className="mx-2">{user.displayName}</p>
              <button
                onClick={logOut}
                className="text-blue-500 px-4 py-2 rounded-full bg-white"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="text-blue-500 px-10 py-2 rounded-full bg-white mx-auto">
              <NavLink
                to="/sign-in-up"
                activeStyle={{
                  fontWeight: 'bold',
                }}
              >
                Login
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
