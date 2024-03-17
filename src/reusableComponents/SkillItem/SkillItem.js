import React from "react";
import "./SkillItem.css";

const SkillItem = ({ skillName, progress }) => {
  return (
    <div className="row w-75 m-auto">
      <div className="col-md-4 text-center ps-5">
        <h3>{skillName}</h3>
      </div>
      <div className="col-md-8 text-center pe-5">
        <progress
          style={{ width: "80%", height: "30px" }}
          max="100"
          value={progress}
        ></progress>
      </div>
    </div>
  );
};

export default SkillItem;
