import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import VideoHeader from './components/VideoHeader';
import About from './components/About';
import Skills from './components/skill/Skills';
import ProjectBoard from './components/ProjectBoard';
import Contact from './components/Contact';


class App extends Component {
  constructor(){
    super();

    this.state = {
      skills: [
        {
          skill: 'Html',
          time: 4
        },
        {
          skill: 'Css',
          time: 4
        },
        {
          skill: 'JavaScript',
          time: 4
        },
        {
          skill: 'React.js',
          time: 1
        },
        {
          skill: 'Sass',
          time: 1
        },
        {
          skill: 'MongoDB',
          time: 1
        },
        {
          skill: 'Bootstrap',
          time: 4
        },
        {
          skill: 'Node.js',
          time: 2
        },
        {
          skill: 'Express',
          time: 0.5
        },
        {
          skill: 'RESTful Requests',
          time: 0.5
        }
      ]
    };
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <VideoHeader />
          <p>need to throw a nav bar in here somewhere?
          Add links about that will switch between APP, Story, Project Board and Other</p>
          <p>Needs to have an alert/modal that takes the persons name(Maybe color even) and personalizes the site to them</p>
          <p>Also need to make it have a daytime and nighttime css that is based of user time zone but also has a button on top corner tha they can manually adjust</p>
          <About />
          <Skills skills = {this.state.skills} />
          <p>With these skills I can help you make your website how you want it</p>
          {/* moving dives to create a fake website */}
          <p>Sofisticated or Energetic</p>
          {/* That starts white with light hints of color that scrolls to bold colors */}
          <p>Taking any quirks that make you... you! and adding them to your website to make it unique</p>
          {/* "Unique" will be further down and spider will swing down and give a heart emoji */}
          <h5>Along came a Spider?</h5>
          {/* Go to "new page for more indepth info on projects?" */}
          <ProjectBoard />
          {/* Make this seem like a new page to get conact info*/}
          <Contact />
        </header>
      </div>
    );
  }
}

export default App;
