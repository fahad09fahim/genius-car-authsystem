import React from "react";
import expert1 from "../../../Images/experts/expert-1.jpg";
import expert2 from "../../../Images/experts/expert-2.jpg";
import expert3 from "../../../Images/experts/expert-3.jpg";
import expert4 from "../../../Images/experts/expert-4.jpg";
import expert5 from "../../../Images/experts/expert-5.jpg";
import expert6 from "../../../Images/experts/expert-6.png";
import Expart from "../Expart/Expart";

const experts = [
  {
    id: 1,
    name: "William Smith",
    img: expert1,
  },
  {
    id: 2,
    name: "Cris Rock",
    img: expert2,
  },
  {
    id: 3,
    name: "Ada deniyal",
    img: expert3,
  },
  {
    id: 4,
    name: "Lavalal",
    img: expert4,
  },
  {
    id: 5,
    name: " Combo Diska",
    img: expert5,
  },
  {
    id: 6,
    name: " Etalio Costa",
    img: expert6,
  },
];
const Experts = () => {
  return (
    <div id="experts" className="container">
      <h2 className="text-primary mt-5 text-center">Our Experts</h2>
      <div className="row">
        {experts.map((expert) => (
          <Expart key={expert.id} expert={expert}></Expart>
        ))}
      </div>
    </div>
  );
};

export default Experts;
