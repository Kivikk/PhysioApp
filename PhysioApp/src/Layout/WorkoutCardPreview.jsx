import React from 'react';
import { useNavigate } from 'react-router-dom';

const WorkoutCardPreview = ({
  image = "https://via.placeholder.com/150",
  title = "Placeholder Title",
  route = "/"
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  };

  return (
    <div
      onClick={handleClick}
      className="relative group cursor-pointer w-64 h-80 overflow-hidden rounded m-8"
    >
      <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
      <div className="bg-stone-100 w-full h-full p-2">
        <img className="w-full h-4/5 object-contain" src={image} alt={title} />
        <div className="px-6 py-4 h-1/5 flex items-center">
          <h2 className="font-bold text-xl mb-2 break-words">{title}</h2>
        </div>
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default WorkoutCardPreview;