import React, {useState} from 'react';
import Icon from './ToolBarIcon'


export default function Project({image, title}){
    const Icons = {
        aboutMe: require('../Assets/AboutMeIcon.png'),
        projects: require('../Assets/IdeaIcon.png'),
        resume: require('../Assets/ResumeIcon.png'),
        contact: require('../Assets/ContactIcon.png')
      }  

    const proj = [{image: require('../Assets/SafeWalk.png'), text: "Test Text", title: "Safewalk App",
                p1: "Created with React Native and Firebase",
                p2: "A mobile app which users can use to broadcast location if in danger",
                p3: "Used React Native voice-recognition, maps, and geolocation libraries"},
                {image: require('../Assets/WebCrawler.png'), text: "Test Text", title: "Web Crawler",
                p1: "Created with React and Elastic Search",
                p2: "A web application that searched through 5,000 urls from the web",
                p3: "Wrote code which thread url crawl, resulting in increasing crawl speed by 82%"},
                {image: require('../Assets/Sarcix.png'), text: "Test Text", title:     "Sarcix WebApp",
                p1: "Created with Angular and MongoDB",
                p2: "A web application which stored and analysed a school's curriculum data",
                p3: "Wrote backend HTTP requests which increased data load speed by 95%"}]  
    
    const [projNum, setProjNum] = useState(0)
    
    function BackButton(){
        if(projNum === 0){ 
            setProjNum(2)
        }
        else{
            setProjNum(projNum-1)
        }
    }

    function NextButton(e){
        if(projNum === 2){
            setProjNum(0)
        }
        else(
            setProjNum(projNum+1)
        )
    }

    return (
        <div>
            <h1 style={{textAlign:"center", fontFamily: "Andale Mono", color: "#9EAABF", fontSize: 70, 
                marginTop:0}}>Projects</h1>
            <h1 style={{textAlign:"center", marginTop:-130, fontSize: 60, fontFamily: "Andale Mono", marginBottom: 15}}>Projects</h1>
            <div className = "ProjectSlide">
                <button onClick={BackButton}>
                    <img src ={require("../Assets/arrowLeft.png")} width="50"/>
                </button>
                <div className="SlideInfo">
                    <img src = {proj[projNum].image} width = "585"/>
                    <div className="SlideText">
                        <h2 style={{ textAlign: "center", width: 240}}>{proj[projNum].title}</h2>
                        <h4 style ={{fontFamily: "Andale Mono", fontSize: 12, marginTop:30, marginBottom: 0, width:240}}>
                        <ul className = "projectList">
                            <li>{proj[projNum].p1}</li>
                            <li>{proj[projNum].p2}</li>
                            <li>{proj[projNum].p3}</li>
                        </ul>
                    </h4>
                    </div>
                </div>
                <button onClick={NextButton}>
                    <img src ={require("../Assets/arrowRight.png")} width = "50"/>
                </button>
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