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



export default class HomePage extends Component {
    constructor(props){
        super(props)
        this.state = {
            showNav: false,
            showButtonType: false,
            showButton: false
        }
        this.renderButton = this.renderButton.bind(this)
    }

    componentDidMount(){
        let title = document.getElementsByClassName("jacobs-profile")[0];
        setTimeout(() => {title.classList.add('lightup')}, 3300);
        setTimeout(() => {this.renderButton()}, 3500);
    }

    renderButton = () => {
        this.setState({showButtonType: true})
        setTimeout(() => {this.setState({showButtonType: false, showButton: true})}, 2500);
        
    }

    render() {
        const {showNav, showButtonType, showButton} = this.state
        return (
            <div id="home-page">
                <Sky how={50} time={60} size={'50px'} background={'rgb(37, 37, 37)'} 
                    images={{ 0: circle, 1: dotcircle, 2: circle1, 3: circle3 }} />
                {showNav && <NavigationBar/>}
                <div className="jacobs-profile" >
                    <Typical steps={[2000, "<Jacob's Portfolio />"]} wrapper="h2"/>
                </div>
                {showButtonType && <div className="jacobs-button-typing">
                    <Typical steps={[1000, "<button />"]} wrapper="h2"/>
                </div>}
                {showButton && 
                    <div id="home-button">
                        <Button> Enter </Button>
                    </div>}


                 {/* <label id="name">Jacob Norenberg</label>
                    <br/>
                    <label id="current">Current Computer Science Undergraduate</label>
                    <br/>
                    <label id="future">Future Full-Stack Web Developer</label>
                    <br/>
                    <label id="marine">US Marine Corps Veteran</label> */}
            </div>
        )
    }
}
