import React from 'react';
import exercises from '../data/exercises.json';
import WorkoutCard from '../Layout/WorkoutCard';
import Mainlayout from '../Layout/Mainlayout';
import { images as imageImports } from "../utils/imageImports.js";

const HipExercises = () => {
  const getImage = (imageName) => {
    if (!imageImports[imageName]) {
      console.warn(`Image not found: ${imageName}`);
      return "https://via.placeholder.com/150";
    }
    return imageImports[imageName];
  };

  const hipExercises = exercises.filter(exercise => exercise.category === 'Hip');

  return (
    <Mainlayout>
      <div>
        <h2 className="text-stone-600 text-xs p-4">
          Start | Hip Exercises
        </h2>
        <div className="flex flex-wrap justify-center">
          {hipExercises.map((exercise, index) => (
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

export default HipExercises;