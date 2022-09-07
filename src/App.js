import React from 'react';
import { About, Footer, Header, Skills, Testimonial, Work, Gallery } from './Home';
import { Navbar, Technologies } from './Components';
import './App.scss';

const App = () => {
  return (
    <div className="app">

      <Navbar />
      <Header />
      <About />
      <Work />
      <Gallery />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  )
}



export default App;
