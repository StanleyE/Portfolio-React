import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import VideoHeader from './components/VideoHeader';
import About from './components/About';
import Skills from './components/Skills';
import ProjectBoard from './components/ProjectBoard';
import Contact from './components/Contact';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <VideoHeader />
          <p>need to throw a nav bar in here somewhere?</p>
          <p>Needs to have an alert/modal that takes the persons name(Maybe color even) and personalizes the site to them</p>
          <p>Also need to make it have a daytime and nighttime css that is based of user time zone but also has a button on top corner tha they can manually adjust</p>
          <About />
          <Skills />
          <ProjectBoard />
          <h5>Along came a Spider?</h5>
          <Contact />
        </header>
      </div>
    );
  }
}

export default App;
