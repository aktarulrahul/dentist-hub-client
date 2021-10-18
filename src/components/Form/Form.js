import React from 'react';
import { Link } from 'react-router-dom';

const Form = ({ type, signInUsingGoogle, signInUsingGithub }) => {
  return (
    <div className="lg:w-1/3 md:w-2/3 px-2 bg-blue-50 rounded shadow-lg mx-auto pt-1">
      <h2 className="text-4xl font-bold text-center my-3 text-blue-600">
        <i className="fas fa-tooth"></i> Dentist Hub
      </h2>
      <form>
        {type === 'signin' ? (
          <></>
        ) : (
          <>
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-400 rounded p-2 bg-gray-100 w-full mb-3"
            />
            <br />
          </>
        )}
        <input
          type="text"
          placeholder="Email"
          className="border border-gray-400 rounded p-2 bg-gray-100 w-full mb-3"
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          className="border border-gray-400 rounded p-2 bg-gray-100 w-full mb-3"
        />
        <br />
        <button
          type="submit"
          className="border border-blue-400 rounded p-2 bg-blue-600 w-full mb-3 text-white"
        >
          {type === 'signin' ? <>Signin</> : <>Registration</>}
        </button>
      </form>
      <p className="text-center text-gray-500 mx-auto mb-3">or</p>
      <div className=" flex justify-between ">
        <button
          onClick={signInUsingGoogle}
          className="w-2/3 mr-2 border border-red-500 rounded p-1 bg-red-500 mb-3 text-white "
        >
          <i className="fab fa-google text-xl px-1 "></i> Google Sign In
        </button>
        <button
          onClick={signInUsingGithub}
          className="w-2/3 ml-2 border border-gray-600 rounded p-1 bg-gray-600 mb-3 text-white "
        >
          <i className="fab fa-github text-xl px-1 "></i> Github Sign In
        </button>
      </div>
      <p className="text-center text-gray-500 mx-auto mb-3">
        {type === 'signin' ? (
          <>New to Dentist Hub</>
        ) : (
          <>Already Have a Account</>
        )}
      </p>
      <div className="">
        <Link to={type === 'signin' ? '/signup' : '/signin'}>
          <button
            type="submit"
            className="border border-blue-400 rounded p-2 bg-blue-600 w-full mb-3 text-white"
          >
            {type === 'signin' ? <>Registration</> : <>Login</>}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Form;
