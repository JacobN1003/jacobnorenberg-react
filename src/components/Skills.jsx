import React, { Component } from 'react'
import {Nav, NavItem, NavLink, TabContent, TabPane, Row, Col} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJsSquare, faReact, faPython, faHtml5, faCss3Alt, faNodeJs, faGitAlt, 
    faCuttlefish } from "@fortawesome/free-brands-svg-icons"
import { faFlask, faDatabase } from "@fortawesome/free-solid-svg-icons"
import '../css/skills.css'


export default class Skills extends Component {
    constructor(props){
        super(props)
        this.state = {
            activeTab: 'primary'
        }
    }

    render() {
        return (
            <div id="skills-container">
                <div id="sections-container">
                <h1>My Skills</h1>
                <hr/>
                    <TabContent >
                        <TabPane tabId="primary">
                            <div id="section-one">
                                <div id="first-icons">
                                    <div id="javascript-text">
                                        <FontAwesomeIcon id="javascript" icon={faJsSquare} />
                                        JavaScript
                                    </div>
                                    <div id="python-text">
                                        <FontAwesomeIcon id="python" icon={faPython} />
                                        Python
                                    </div>
                                    <div id="html-text">
                                        <FontAwesomeIcon id="html" icon={faHtml5} />
                                        HTML5
                                    </div> 
                                    <div id="css-text">
                                        <FontAwesomeIcon id="css" icon={faCss3Alt} />
                                        CSS3
                                    </div>
                                </div>

                                <div id="second-icons">
                                    <div id="react-text">
                                        <FontAwesomeIcon id="react" icon={faReact} />
                                        React
                                    </div>
                                    <div id="flask-text">
                                        <FontAwesomeIcon id="flask" icon={faFlask} />
                                        Flask
                                    </div>
                                    <div id="nodejs-text">
                                        <FontAwesomeIcon id="nodejs" icon={faNodeJs} />
                                        Node.js
                                    </div>
                                    <div id="git-text">
                                        <FontAwesomeIcon id="git" icon={faGitAlt} />
                                        Git
                                    </div>
                                </div>

                                <div id="second-icons">
                                    <div id="redux-text">
                                        <FontAwesomeIcon id="react" icon={faReact} />
                                        Redux
                                    </div>
                                    <div id="mongo-text">
                                        <FontAwesomeIcon id="flask" icon={faDatabase} />
                                        MongoDB
                                    </div>
                                    <div id="cplusplus-text">
                                        <FontAwesomeIcon id="nodejs" icon={faCuttlefish} />
                                        C++
                                    </div>
                                    <div id="csharp-text">
                                        <FontAwesomeIcon id="git" icon={faCuttlefish} />
                                        C#
                                    </div>
                                </div>
                            </div>
                        </TabPane>
                    </TabContent>
                </div>
            </div>
        )
    }
}
