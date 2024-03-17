import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
// importing images
import image1 from './assets/img/photos/projects/1.jpg';
import image2 from './assets/img/photos/projects/2.jpg';
import image3 from './assets/img/photos/projects/3.jpg';
import image4 from './assets/img/photos/projects/4.jpg';
import image5 from './assets/img/photos/projects/5.jpg';
import image6 from './assets/img/photos/projects/6.jpg';

const App = () => {
  // Define theimagearr array
  const theimagearr = [image1, image2, image3, image4, image5, image6];

  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects theimagearr={theimagearr} />
      <Footer />
    </div>
  );
};

export default App;
