import React from 'react';
import Hero from '../components/Hero';
import MissionVision from '../components/MissionVision';
import Stats from '../components/Stats';
import About from '../components/About';

const Home = () => {
  return (
    <>
      <Hero />
      <MissionVision />
      <Stats />
      <About />
    </>
  );
};

export default Home;