import React from 'react';
import Icon from './ToolBarIcon'


export default function Main({image, title}){
    const Icons = {
        aboutMe: require('../Assets/AboutMeIcon.png'),
        projects: require('../Assets/IdeaIcon.png'),
        resume: require('../Assets/ResumeIcon.png'),
        contact: require('../Assets/ContactIcon.png')
      }    
    return (
        <div>
        <div className = "Title">
          <h1 style ={{fontFamily: "Andale Mono", color: "#9EAABF", fontSize: 90}}> Hello&nbsp;</h1>
            <div className = "ProfilePic">
              <img src= {require("../Assets/Circle.png")} alt = "Alice Profile Pic" height = "250" width = "250"/>
            </div>
          <h1 style ={{fontFamily: "Andale Mono", color: "#9EAABF", fontSize: 90}}> World! </h1>
        </div>
        <div className="Intro">
            <h2>
            Alice Nguyen 
            </h2>
            <p style = {{fontFamily: "Andale Mono",fontSize: 16,textAlign: "center"}}>
              Welcome to my portfolio website! I am a recent college grad hoping to pursue a career 
              in software developing. Feel free to explore around and get in contact with me about any available opportunities.
            </p>
        </div>
        <div>
                <div className = "ToolBar">
                    <Icon title = "About Me" image = {Icons.aboutMe} place = "AboutMe" />
                    <Icon title = "Projects" image = {Icons.projects} place = "Project"/>
                    <Icon title = "Resume" image = {Icons.resume} place = "Resume"/>
                    <Icon title = "Contact" image = {Icons.contact} place = "Contact"/>
                </div>
        </div>
        </div>
    );
}