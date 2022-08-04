import React from 'react';
import {  About, Footer, Header, Skills, Testimonial, Work,Gallery } from './Container';
import { Navbar} from './Components';
import './App.scss';

const App = () => (
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
);

export default App;
