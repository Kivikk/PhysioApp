import React from "react";
import WorkoutCard from "../Layout/WorkoutCard";
import Mainlayout from "../Layout/Mainlayout";

const Home = () => {
  return (
    <Mainlayout>
      <div className="flex flex-row ">
        <h2 className="text-stone-600 text-xs p-4">Start </h2>
        <div className="flex flex-row flex-wrap place-content-center m-8">
          <WorkoutCard
            image="https://via.placeholder.com/150"
            title="All Exercises "
            description="This is a description for Workout 1."
          />
          <WorkoutCard
            image="https://via.placeholder.com/150"
            title="Back Exercises"
            description="This is a description for Workout 2."
          />
          <WorkoutCard
            image="https://via.placeholder.com/150"
            title="Shoulder Exercises"
            description="This is a description for Workout 2."
          />
          <WorkoutCard
            image="https://via.placeholder.com/150"
            title="Hip Exercises"
            description="This is a description for Workout 2."
          />
        </div>
      </div>
    </Mainlayout>
  );
};





export default Home;
