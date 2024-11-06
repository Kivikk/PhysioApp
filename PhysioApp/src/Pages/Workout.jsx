import React from "react";
import WorkoutCard from "../Layout/WorkoutCard";
import Mainlayout from "../Layout/Mainlayout";

const Workout = () => {
  return (
    <Mainlayout>
      <div>
        <h2 className="text-stone-600 text-xs p-4">
          Start | Workout
        </h2>
        <WorkoutCard
          // image=""
          title='Workout Title'
          description='Workout Description'
        />
      </div>
    </Mainlayout>
  );
};
export default Workout;