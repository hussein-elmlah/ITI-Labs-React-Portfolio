import React from 'react';
// import cv pdf
import cvFile from '../../assets/pdf/Hussein-Elmlah-Resume-v5.pdf'

const About = () => {
  const myCv = cvFile;
  return (
    <section id="about" className="bg-body-secondary text-black">
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 col-sm-12 text-center pt-5">
            <h2>ABOUT ME</h2>
          </div>
          <div className="col-md-6 col-sm-12">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only
              five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with
              the release of Letraset sheets containing Lorem Ipsum passages.
            </p>
            <a className="btn btn-dark p-3" href={myCv} download>DOWNLOAD CV</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
