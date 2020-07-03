import React from 'react';
import * as Scroll from 'react-scroll'

export default function Icon({image, title, place}){
    const Icons = {
        aboutMe: require('../Assets/AboutMeIcon.png'),
        projects: require('../Assets/IdeaIcon.png'),
        resume: require('../Assets/ResumeIcon.png'),
        contact: require('../Assets/ContactIcon.png')
      }    
    function goToMain()
    {
        console.log("Go to Main")
        console.log(place)
        Scroll.scroller.scrollTo(place)
    }
    return (
        <div className = "Icons">
            <center>
                <input type="image" src = {image} height = "55" width = "55" alt = {image} onClick ={goToMain}/>
                <br/>
                <h7>
                    {title}
                </h7>
            </center>
        </div>
    );
}