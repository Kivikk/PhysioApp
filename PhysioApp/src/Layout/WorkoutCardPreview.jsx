import React from 'react';

const WorkoutCardPreview = ({
  image = "https://via.placeholder.com/150",
  title = "Placeholder Title",
  description = "This is a placeholder description."
}) => {
  return (
    <div className=" w-64 h-80 rounded overflow-hidden shadow-lg m-4">
      <img className="w-full h-4/5 object-contain" src={image} alt={title} />
      <div className="px-6 py-4 h-1/5 flex items-center">
        <h2 className="font-bold text-xl mb-2 break-words">{title}</h2>
      </div>
    </div>
  );
};



export default WorkoutCardPreview;