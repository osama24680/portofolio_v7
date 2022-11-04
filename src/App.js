import React from 'react';
import { About, Footer, Header, Skills, Testimonial, Work, Gallery } from './Home';
import { Navbar,SocialMedia } from './Components';
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
      <SocialMedia />
    </div>
  )
}



export default App;
