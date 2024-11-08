import React from 'react';

const WorkoutCard = ({
  image = "https://via.placeholder.com/150",
  title = "Placeholder Title",
  startingPosition = [],
  execution = [],
  endPosition = [],
  repetitions = "N/A",
  note = "N/A"
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-8">
      <img className="w-full" src={image} alt={title} />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <h3 className="font-semibold">Starting Position:</h3>
        <ul className="list-disc list-inside">
          {startingPosition.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
        <h3 className="font-semibold">Execution:</h3>
        <ul className="list-disc list-inside">
          {execution.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
        <h3 className="font-semibold">End Position:</h3>
        <ul className="list-disc list-inside">
          {endPosition.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
        <h3 className="font-semibold">Repetitions:</h3>
        <p>{repetitions}</p>
        <h3 className="font-semibold">Note:</h3>
        <p>{note}</p>
      </div>
    </div>
  );
};

export default WorkoutCard;