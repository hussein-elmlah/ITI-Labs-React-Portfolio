import React, { useState } from 'react';
import SkillItem from '../../reusableComponents/SkillItem/SkillItem';

const Skills = () => {
  const [skillItems] = useState([
    {skillName: 'Angular', progress: 95},
    {skillName: 'MongoDB', progress: 95},
    {skillName: 'Node.js', progress: 90},
    {skillName: 'Express.js', progress: 90},
  ])
  return (
    <section id="sectionSkills" className="text-white bg-dark">
      <div className="skillsdiv text-center">
        <div className="container row justify-content-center">
          <h2>MY SKILLS</h2>
          <p className="p-5 lh-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the release
            of Letraset sheets containing Lorem specimen Ipsum passages Letraset .
          </p>
          <div className="row mySkillsBars">
            {skillItems.map((skillItem, index) => (
              <SkillItem key={`skillItem-${index}`} index={index} skillName={skillItem.skillName} progress={skillItem.progress} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
