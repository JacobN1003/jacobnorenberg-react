import React, { Component } from 'react'
import '../css/workexperience.css'

export default class WorkExperience extends Component {
    render() {
        return (
            <div id="work-exp-container">
                <div id="jobs-container">
                    <h1>My Work Experience</h1>
                    <hr/><br/>
                    <div id="nwic">
                        <div id="nwic-icon"/>
                        <div id="nwic-info">
                            <h4 id="nwic-title">Active Intern (August 2019 - Present)</h4> 
                            <br/>
                            <p id="nwic-description">
                                Starting with a basic knowledge of HTML, CSS, and some basic programming I had learned 
                                in school I began my internship working on two separate projects using a React.js, Python 
                                Flask, Node.js and MongoDB stack. 
                             </p>
                             <p>   
                                I worked my way up to being able to create, modify, and improve front-end functionality,
                                displays, and animations using React.js. Similarily I was able to complete more complex back-end data 
                                handling and functionality including; email authentication, login/registration authentication, and 
                                modification of user data. 
                            </p>
                        </div>
                    </div>
                    <br/>
                    <div id="usmc">
                        <div id="usmc-icon"/>
                        <div id="usmc-info">
                            <h4 id="usmc-title">Mortarman 0341 (January 2010 - January 2015)</h4> 
                            <br/>
                            <p id="usmc-description">
                                Through my five years of active duty serving as a mortarman I went through two deployments
                                and worked my way up from a team member to a squad leader. As a squad leader I managed a tight 
                                knit team of five to six Marines with a focus on personal development and communicating together
                                as a team. 
                            </p>   
                            <p>
                                I eventually became a mortarman instructor and taught classrooms of up to thirty five
                                students using formal lectures, guided discussions, and practical applications. Through multiple 
                                weeks of course work and hands on training, my students eventually conducted live fire mortar 
                                ranges successfully together. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
