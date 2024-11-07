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
      className="relative group cursor-pointer w-64 h-80 overflow-hidden rounded m-4"
    >
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
      <div className="bg-stone-100 w-full h-full p-2">
        <img className="w-full h-4/5 object-contain" src={image} alt={title} />
        <div className="px-6 py-4 h-1/5 flex items-center">
          <h2 className="font-bold text-xl mb-2 break-words">{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default WorkoutCardPreview;