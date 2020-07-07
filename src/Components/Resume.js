import React from 'react';
import Icon from './ToolBarIcon'


export default function Resume({image, title}){
    const Icons = {
        aboutMe: require('../Assets/AboutMeIcon.png'),
        projects: require('../Assets/IdeaIcon.png'),
        resume: require('../Assets/ResumeIcon.png'),
        contact: require('../Assets/ContactIcon.png')
      }    
    return (
        <div>
            <h1 style={{textAlign:"center", fontFamily: "Andale Mono", color: "#9EAABF", fontSize: 70, 
                marginTop:18}}>Resume</h1>
            <h1 style={{textAlign:"center", marginTop:-120, fontSize: 60, fontFamily: "Andale Mono", marginBottom: 20}}>Resume</h1>
            <div className = "ResumeInsert">
                <embed src={require('../Assets/NguyenAliceResume.pdf')} width = "700" height = "452"/>
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