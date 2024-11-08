import React from 'react';
import exercises from '../data/exercises.json';
import WorkoutCard from '../Layout/WorkoutCard';
import Mainlayout from '../Layout/Mainlayout';
import { images as imageImports } from "../utils/imageImports.js";
import { useNavigate } from 'react-router-dom';

const AllExercises = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/');
  };

  const getImage = (imageName) => {
    if (!imageImports[imageName]) {
      console.warn(`Image not found: ${imageName}`);
      return "https://via.placeholder.com/150";
    }
    return imageImports[imageName];
  };

  return (
    <Mainlayout>
      <div>
        <div className='flex'>
          <h2 className="text-stone-600 text-xs p-4 cursor-pointer" onClick={handleStartClick}>
            Start |
          </h2>
          <h2 className="text-stone-600 text-xs p-4" >
            All Exercises
          </h2>
        </div>
        <div className="flex flex-wrap justify-center m-8">
          {exercises.map((exercise, index) => (
            <WorkoutCard
              key={index}
              image={getImage(exercise.image)}
              title={exercise.title}
              startingPosition={exercise.startingPosition}
              execution={exercise.execution}
              endPosition={exercise.endPosition}
              repetitions={exercise.repetitions}
              note={exercise.note}
            />
          ))}
        </div>
      </div>
    </Mainlayout>
  );
};

export default AllExercises;