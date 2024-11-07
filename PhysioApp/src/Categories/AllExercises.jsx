import React from 'react';
import exercises from '../data/exercises.json';
import WorkoutCard from '../Layout/WorkoutCard';

const AllExercises = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {exercises.map((exercise, index) => (
        <WorkoutCard
          key={index}
          image={exercise.image}
          title={exercise.title}
          startingPosition={exercise.startingPosition}
          execution={exercise.execution}
          endPosition={exercise.endPosition}
          repetitions={exercise.repetitions}
          note={exercise.note}
        />
      ))}
    </div>
  );
};

export default AllExercises;