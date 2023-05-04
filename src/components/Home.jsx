import React from 'react';
import Carousel from './Carasol';
import AboutSection from './About';
import Testimonials from './Testimonial';
import Hero from './Hero';

const Home = () => {
  return (
    <>
      <Hero />
      <Carousel />
      <AboutSection />
      <Testimonials />
    </>
  )
}

export default Home
