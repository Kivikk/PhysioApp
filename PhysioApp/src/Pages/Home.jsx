import React from "react";
import WorkoutCard from "../Layout/WorkoutCard";

const Home = () => {
  return (
    <div>
      <h2 className="text-stone-600 text-xs p-4">Start |</h2>
      <div className="flex flex-wrap justify-center">
        <WorkoutCard
          image="https://via.placeholder.com/150"
          title="Workout 1"
          description="This is a description for Workout 1."
        />
        <WorkoutCard
          image="https://via.placeholder.com/150"
          title="Workout 2"
          description="This is a description for Workout 2."
        />
      </div>
    </div>
  );
};





export default Home;
