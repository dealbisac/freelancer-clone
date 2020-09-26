import React from 'react';
import './App.css';
import Header from './Header';
import VideoBanner from './VideoBanner';
import Brands from './Brands';
import Features from './Features';
import Content from './Content';
import Projects from './Projects';
import Category from './Category';
import Portfolio from './Portfolio';
import JobCategory from './JobCategory';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />

      {/* Video Banner */}
      <VideoBanner />

      {/* Brands */}
      <Brands />

      {/* Features */}
      <Features />

      {/* Content Info */}
      <Content />

      {/* Popular Projects */}
      <Projects />

      {/* Work Category */}
      <Category />

      {/* Portfolio */}
      <Portfolio />

      {/* Job Categories */}
      <JobCategory />

      {/* Footer */}



    </div>
  );
}

export default App;
