import React from 'react';
import './Skills.css';

const Skills = () => {
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
            <div className="col-md-6 text-center">
              <h3>Angular</h3>
            </div>
            <div className="col-md-6 text-center">
              <progress
                style={{ width: '80%', height: '30px' }}
                max="100"
                value="95"
              ></progress>
            </div>

            <div className="col-md-6 text-center">
              <h3>MongoDB</h3>
            </div>
            <div className="col-md-6 text-center">
              <progress
                style={{ width: '80%', height: '30px' }}
                max="100"
                value="95"
              ></progress>
            </div>

            <div className="col-md-6 text-center">
              <h3>Node.js</h3>
            </div>
            <div className="col-md-6 text-center">
              <progress
                style={{ width: '80%', height: '30px' }}
                max="100"
                value="90"
              ></progress>
            </div>

            <div className="col-md-6 text-center">
              <h3>Express.js</h3>
            </div>
            <div className="col-md-6 text-center">
              <progress
                style={{ width: '80%', height: '30px' }}
                max="100"
                value="90"
              ></progress>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
