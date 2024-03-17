import React from 'react';
import './Header.css';

// Importing images
import image1 from '../../assets/img/photos/iti-pic1.jpg';
import image2 from '../../assets/img/photos/iti-pic2.jpg';
import image3 from '../../assets/img/photos/iti-pic3.jpg';

const Header = () => {
  return (
    <header id="header" className="container-fluid bg-dark text-light">
      <div className="jumbotron text-center">
        <h1 className="myHeaderH1 display-5">Hussein's Portfolio </h1>
        <p className="lead">Hello, I am <span className="lead myName">Hussein Elmlah</span> using <span className="text-info">React</span></p>
        <div id="imageCarousel" className="container carousel slide mt-5" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              {/* Using imported image variable */}
              <img src={image1} className="d-block w-100" alt="Carousel Image 1" />
            </div>
            <div className="carousel-item">
              {/* Using imported image variable */}
              <img src={image2} className="d-block w-100" alt="Carousel Image 2" />
            </div>
            <div className="carousel-item">
              {/* Using imported image variable */}
              <img src={image3} className="d-block w-100" alt="Carousel Image 3" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#imageCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#imageCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
