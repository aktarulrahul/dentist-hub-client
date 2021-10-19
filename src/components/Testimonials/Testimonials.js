import { useEffect, useState } from 'react';
import TestimonialCard from '../TestimonialCard/TestimonialCard';

const Testimonials = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  useEffect(() => {
    fetch('testimonialsData.json')
      .then((res) => res.json())
      .then((data) => setFeedbacks(data));
  }, []);
  return (
    <div className="m-3 px-4 py-5 border rounded bg-blue-400 shadow-lg">
      <h2 className="text-center text-4xl text-white font-bold my-5">
        Our Patients Talk About Their Experience!!
      </h2>
      <div className="md:grid grid-cols-3 gap-4 ">
        {feedbacks.map((feedback) => (
          <TestimonialCard key={feedback.id} feedback={feedback} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
