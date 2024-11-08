import React from "react";
import { useNavigate } from "react-router-dom";
import WorkoutCardPreview from "../Layout/WorkoutCardPreview";
import Mainlayout from "../Layout/Mainlayout";

import allExercisesImage from "../assets/images/NackenRolle.png";
import backExercisesImage from "../assets/images/RumpfDrehungBoden.png";
import shoulderExercisesImage from "../assets/images/BandSchulterInnenDreher.png";
import hipExercisesImage from "../assets/images/HueftHebung.png";

const Home = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/');
  };

  return (
    <Mainlayout>
      <div className="">
        <h2 className="text-stone-600 text-xs p-4 cursor-pointer">
          Start
        </h2>
        <div className="flex flex-row flex-wrap place-content-center">
          <WorkoutCardPreview
            image={allExercisesImage}
            title="All Exercises"
            route='/all-exercises'
          />
          <WorkoutCardPreview
            image={backExercisesImage}
            title="Back Exercises"
            route='/back-exercises'
          />
          <WorkoutCardPreview
            image={shoulderExercisesImage}
            title="Shoulder Exercises"
            route='/shoulder-exercises'
          />
          <WorkoutCardPreview
            image={hipExercisesImage}
            title="Hip Exercises"
            route='/hip-exercises'
          />
        </div>
      </div>
    </Mainlayout>
  );
};

export default Home;
