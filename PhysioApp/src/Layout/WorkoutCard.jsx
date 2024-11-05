import React from 'react';

const WorkoutCard = ({ image, title, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={image} alt={title} />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <h3 className="text-gray-700 text-base">{description}</h3>
      </div>
    </div>
  );
};

export default WorkoutCard;