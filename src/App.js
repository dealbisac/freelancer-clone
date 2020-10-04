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
import Footer from './Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Login';
import Signup from './Signup';
import Dashboard from './admin/Dashboard';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <VideoBanner />
            <Brands />
            <Features />
            <Content />
            <Projects />
            <Category />
            <Portfolio />
            <JobCategory />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
