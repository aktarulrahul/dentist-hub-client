import React from 'react';

const DentistCard = ({ dentist }) => {
  const { name, role, experience, img } = dentist;
  return (
    <div className=" transition duration-500 ease-in-out transform hover:scale-105 rounded shadow mb-2 rounded overflow-hidden">
      <img src={img} className="w-full" alt={name} />
      <div className="h-2/3 ">
        <h5 className="text-center my-2 text-xl">{name}</h5>
        <table className="table-fixed mx-2 my-3">
          <tbody>
            <tr className="w-1/2">
              <td className=" font-bold">Role</td>
              <td>{role}</td>
            </tr>
            <tr className="w-1/2">
              <td className=" font-bold">Experiences</td>
              <td>{experience}+</td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-center text-blue-500 my-3 text-3xl">
          <i className="fab fa-facebook mx-2"></i>
          <i className="fab fa-instagram-square mx-2"></i>
          <i className="fab fa-youtube mx-2"></i>
          <i className="fab fa-pinterest mx-2"></i>
          <i className="fab fa-twitter-square mx-2"></i>
        </div>
      </div>
    </div>
  );
};

export default DentistCard;
