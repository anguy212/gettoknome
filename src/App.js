import React from 'react';
import {useMediaQuery} from 'react-responsive'
import './App.css';
import Resume from './Components/Resume'
import AboutMe from './Components/AboutMe'
import Contact from './Components/Contact'
import Project from './Components/Project'
import Main from './Components/Main'
import * as Scroll from 'react-scroll'



const Icons = {
  aboutMe: require('./Assets/AboutMeIcon.png'),
  projects: require('./Assets/IdeaIcon.png'),
  resume: require('./Assets/ResumeIcon.png'),
  contact: require('./Assets/ContactIcon.png')
}

function App() {
  return (
    <section className = "App">
        < Scroll.Element name = "Main">
          <Main/>
        </Scroll.Element>
        <hr style = {{height:.5, color: '#79747d', backgroundColor: '#79747d', borderColor: '#79747d', 
        marginTop:20}} noshade/>
        <Scroll.Element name = "AboutMe">
          <AboutMe/>
        </Scroll.Element>
        <hr style = {{height:.5, color: '#79747d', backgroundColor: '#79747d', borderColor: '#79747d', 
        marginTop:20}} noshade/>
        <Scroll.Element name = "Project">
          <Project/>
        </Scroll.Element>
        <hr style = {{height:.5, color: '#79747d', backgroundColor: '#79747d', borderColor: '#79747d', 
        marginTop:20}} noshade/>
        <Scroll.Element name = "Resume">
          <Resume/>
        </Scroll.Element>
        <hr style = {{height:.5, color: '#79747d', backgroundColor: '#79747d', borderColor: '#79747d', 
        marginTop:20}} noshade/>
        <Scroll.Element name = "Contact">
          <Contact/>
        </Scroll.Element>
        <hr style = {{height:.5, color: '#79747d', backgroundColor: '#79747d', borderColor: '#79747d', 
        marginTop:20}} noshade/>
    </section>
  );
}

export default App;
