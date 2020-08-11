import React, { Component } from 'react'
import NavigationBar from './NavigationBar.jsx'
import {Button} from 'reactstrap'
import Typical from 'react-typical'
import Sky from 'react-sky';
import '../css/homepage.css'
import circle from '../img/circle.png'
import dotcircle from '../img/dotted-circle.png'
import circle1 from '../img/modcircle1.png'
import circle3 from '../img/modcircle3.png'
import Skills from './Skills.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin, faFacebookSquare } from "@fortawesome/free-brands-svg-icons"


export default class HomePage extends Component {
    constructor(props){
        super(props)
        this.state = {
            showNav: false,
            showButtonType: false,
        }
        this.renderButton = this.renderButton.bind(this)
    }

    componentDidMount(){
        let title = document.getElementsByClassName("jacobs-portfolio")[0];
        setTimeout(() => {title.classList.add('lightup')}, 3300);
        setTimeout(() => {this.renderButton()}, 3400);
    }

    renderButton = () => {
        this.setState({showButtonType: true})
        setTimeout(() => {
            let btntype = document.getElementsByClassName("jacobs-button-typing")[0];
            btntype.classList.add('btnlightup')
            setTimeout(() => {
                this.setState({showButtonType: false})
                let btn = document.getElementsByClassName("home-button-div")[0];
                btn.classList.add('appear')
                
            }, 600)
        }, 1600);
        setTimeout(() => {
            let btntype = document.getElementsByClassName("jacobs-button-typing btnlightup")[0];
            btntype.classList.add('vanish')}, 1600);
            
    }

    onEnter = () => {
        setTimeout(()=> {
            this.setState({showNav: true})
        }, 300)
        
    }

    render() {
        const {showNav, showButtonType} = this.state
        return (
            <div id="home-page">
                <Sky how={100} time={60} size={'50px'} background={'rgb(37, 37, 37)'} 
                    images={{ 0: circle, 1: dotcircle, 2: circle1, 3: circle3 }} />
                {showNav && <NavigationBar/>}
                
                {!showNav && 
                    <div> 
                        <div className="jacobs-portfolio" >
                            <Typical steps={[2000, "<Jacob's Portfolio />"]} wrapper="h2"/>
                        </div>

                        {showButtonType && 
                        <div className="jacobs-button-typing">
                            <Typical steps={[1000, "<button />"]} wrapper="h2"/>
                        </div>}

                        <div className="home-button-div">
                            <Button id="home-button" onClick={this.onEnter}> Enter </Button>
                        </div>
                    </div>}

                {showNav && 
                    <div>
                        <div id="home-container">
                            <div id="portrait-container">
                                <div id="home-portrait"/>
                            </div>
                            <br/><br/>
                            <h2>Welcome, I'm Jacob</h2>
                            <label id="current">Current Computer Science Undergraduate</label>
                            <label id="future">Future Full-Stack Web Developer</label>
                            <label id="marine">US Marine Corps Veteran</label>
                            <br/><br/>
                            <div id="social-container">
                                <a id="icon-link" href="https://github.com/JacobN1003">
                                    <FontAwesomeIcon id="github-icon" icon={faGithubSquare}/>
                                </a>
                                <a id="icon-link" href="https://www.linkedin.com/in/jacobnorenberg/">
                                    <FontAwesomeIcon id="linkedin-icon" icon={faLinkedin} />
                                </a>
                                <a id="icon-link" href="https://www.facebook.com/jake.norenberg">
                                    <FontAwesomeIcon id="facebook-icon" icon={faFacebookSquare} />
                                </a>
                            </div>
                        </div>
                    </div>}
            </div>
        )
    }
}
