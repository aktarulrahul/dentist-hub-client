import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner/Banner';
import DentistCard from '../../components/DentistCard/MemberCard';
import img from '../../images/dh-7.png';

const About = () => {
  const [dentists, setDentists] = useState([]);
  useEffect(() => {
    fetch('dentists.json')
      .then((res) => res.json())
      .then((data) => setDentists(data));
  }, []);
  return (
    <div>
      <Banner
        sub="Dedicated to excellence. Dedicated to your smile."
        title="About Us"
        img={img}
        link="/services"
        btn="Our All Services"
        additionalStyle="pt-16 lg:h-screen md:h-full"
      />
      <div className="my-4 md:flex justify-between items-center mx-4 px-2 shadow-lg rounded border py-2">
        <img
          src="https://images.unsplash.com/photo-1588776814546-daab30f310ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGVudGlzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
          alt=""
          className="rounded-lg m-2 shadow-lg md:w-1/3 mr-4 mx-auto sm:my-3"
        />
        <div className="mx-1 md:ml-4">
          <h2 className="text-5xl italic my-8 text-blue-500 font-bold">
            Who We Are?
          </h2>
          <p>
            <strong className="text-2xl text-blue-600">Dentist Hub</strong> is a
            dental home where we focus on the latest techniques and quality of
            treatment for our patients. Our priority is to provide high quality,
            minimally invasive dental care to each individual patient respecting
            their individual needs.
          </p>
          <br />
          <hr className="my-2" />
          <blockquote>
            <q className="text-xl italic">
              Our goal at your first visit is to establish a sense of trust. We
              understand that you may be anxious about the process of receiving
              dental care; therefore, we make it a point to carefully listen to
              you, respect your concerns and explain you proposed treatment plan
              in detail. Only then will we take you through your treatment with
              the utmost of care.
            </q>
            <hr className="my-2" />
            <p className="mt-3">
              Whether you seek routine family care or major restorative
              dentistry such as a smile makeover or implants, we recommend only
              the best treatments and highest quality dental products tailored
              to fit your personal situation. From white fillings and
              all-ceramic crowns to cosmetic treatments like veneers and teeth
              whitening, we provide a full array of dental procedures designed
              to restore, maintain, and transform your smile into the best that
              it can be.
            </p>
          </blockquote>
        </div>
      </div>
      {/* Show Dentist */}
      <div className="my-3 mx-4 p-2 border rounded shadow-lg">
        <h3 className="text-center text-5xl italic my-8 text-blue-500 font-bold">
          Meet Our Dentists
        </h3>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mx-3 py-3">
          {dentists.map((dentist) => (
            <DentistCard key={dentist.id} dentist={dentist} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
