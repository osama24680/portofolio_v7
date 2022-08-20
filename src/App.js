import React from 'react';
import { About, Footer, Header, Skills, Testimonial, Work, Gallery } from './Home';
import { Navbar, Technologies } from './Components';
import './App.scss';

const App = () => (
  <div className="app">
    {/* <Technologies />   */}
    <Navbar />
    <Header />
    <About />
    <Work />
    <Gallery />
    <Skills />
    <Testimonial />
    <Footer />
  </div>
);

export default App;
