import React from "react";
import WorkoutCardPreview from "../Layout/WorkoutCardPreview";
import Mainlayout from "../Layout/Mainlayout";

import allExercisesImage from "../assets/images/NackenRolle.png";
import backExercisesImage from "../assets/images/RumpfDrehungBoden.png";
import shoulderExercisesImage from "../assets/images/BandSchulterInnenDreher.png";
import hipExercisesImage from "../assets/images/HueftHebung.png";

const Home = () => {
  return (
    <Mainlayout>
      <div className="flex flex-row ">
        <h2 className="text-stone-600 text-xs p-4">Start </h2>
        <div className="flex flex-row flex-wrap place-content-center m-8">
          <WorkoutCardPreview
            image={allExercisesImage}
            title="All Exercises "
          />
          <WorkoutCardPreview
            image={backExercisesImage}
            title="Back Exercises"
          />
          <WorkoutCardPreview
            image={shoulderExercisesImage}
            title="Shoulder Exercises"
          />
          <WorkoutCardPreview
            image={hipExercisesImage}
            title="Hip Exercises"
          />
        </div>
      </div>
    </Mainlayout>
  );
};





export default Home;
