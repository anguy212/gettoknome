import React from 'react';
import Icon from './ToolBarIcon'


export default function Contact({image, title}){
    const Icons = {
        aboutMe: require('../Assets/AboutMeIcon.png'),
        projects: require('../Assets/IdeaIcon.png'),
        resume: require('../Assets/ResumeIcon.png'),
        contact: require('../Assets/ContactIcon.png')
      }    
    return (
        <div>
            <h1 style={{textAlign:"center", fontFamily: "Andale Mono", color: "#9EAABF", fontSize: 70, 
                marginTop:18}}>Contact</h1>
            <h1 style={{textAlign:"center", marginTop:-120, fontSize: 60, fontFamily: "Andale Mono", marginBottom: 20}}>Contact</h1>
            <div className = "ContactInfo">
                <h2 style= {{backgroundColor: "#D4873D", fontSize: 30}}>
                    Get In Contact With Me!
                </h2>
                <ul className = "projectList"
                style ={{fontFamily: "Andale Mono", fontSize: 24, marginTop:0, marginBottom: 0, width:800}}>
                    <li>
                        Email: nguyenalice66@gmail.com
                    </li>
                    <li>
                        Github: github.com/anguy212
                    </li>
                    <li>
                        LinkedIn: linkedin.com/in/alicenguyen212
                    </li>
                </ul>
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