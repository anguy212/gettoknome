import React from 'react';
import Icon from './ToolBarIcon'

export default function AboutMe({image, title}){
    const Icons = {
        aboutMe: require('../Assets/AboutMeIcon.png'),
        projects: require('../Assets/IdeaIcon.png'),
        resume: require('../Assets/ResumeIcon.png'),
        contact: require('../Assets/ContactIcon.png'),
        education: require('../Assets/Education.png'),
        interests: require('../Assets/Interests.png'),
        hobbies: require('../Assets/Hobbies.png')
      }      
    return (
        <div>
            <h1 style={{textAlign:"center", fontFamily: "Andale Mono", color: "#9EAABF", fontSize: 70, 
                marginTop:18}}>About Me</h1>
            <h1 style={{textAlign:"center", marginTop:-120, fontSize: 60, fontFamily: "Andale Mono", marginBottom: 24}}>About Me</h1>
            <div className = "AboutMeCat">
                <div className = "aboutMeSec">
                    <h2 style = {{marginBottom: 10}}>Education</h2>
                    <img src = {Icons.education} width = "350"/>
                    <h4 style ={{fontFamily: "Andale Mono", fontSize: 14, marginTop:0, marginBottom: 0, width:350}}>
                        <ul>
                            <li>Graduated April 2020 from UCR 🏫</li>
                            <li>BA in Computer Science 🎓</li>
                            <li>Developed for the Psych Department 📱 </li>
                        </ul>
                    </h4>
                </div>
                <div className = "aboutMeSec">
                    <h2 style = {{marginBottom: 10}}>Hobbies</h2>
                    <img src = {Icons.hobbies} width = "350"/>
                    <h4 style ={{fontFamily: "Andale Mono", fontSize: 14, marginTop:0, marginBottom: 0, width:350}}>
                        <ul>
                            <li>Crochet, Knitting, Sewing ❤️ </li>
                            <li>Exploring the beautiful waters  🌊</li>
                            <li>Hiking through open land ⛰️</li>
                        </ul>
                    </h4>
                </div>
                <div className = "aboutMeSec">
                    <h2 style = {{marginBottom: 10}}>Interests</h2>
                    <img src = {Icons.interests} width = "350"/>
                    <h4 style ={{fontFamily: "Andale Mono", fontSize: 14, marginTop:0, marginBottom: 0,width:350}}>
                        <ul>
                            <li>Supporting minorites in CS (WINC) ✊</li>
                            <li>Develop cross platform apps 💻</li>
                            <li>Data visualizing and Databases 📊</li>
                        </ul>
                    </h4>
                </div>
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