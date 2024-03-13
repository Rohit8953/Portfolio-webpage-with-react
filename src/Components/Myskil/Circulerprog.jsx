import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
const Circulerprog = (props) => {
  let percentage = props.values;

  return (
    <div>
      <CircularProgressbar
        className="btn2 rounded-full flex justify-center items-center"
        value={percentage}
        
        text={`${percentage}%`}
        styles={buildStyles({
          // Rotation of path and trail, in number of turns (0-1)
          rotation: 0.25,
          
          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
          strokeLinecap: "round",

          // Text size
          textSize: "16px",
          transformOrigin: "center center",
          // How long animation takes to go from one percentage to another, in seconds
          pathTransitionDuration: 1,

          // Can specify path transition in more detail, or remove it entirely
          // pathTransition: 'none',

          // Colors
          pathColor: `rgba(225, 225, 225, 225)`,
          textColor: "white",
          trailColor: "black",
          backgroundColor: "white",
        })}
      />
    </div>
  );
};

export default Circulerprog;
