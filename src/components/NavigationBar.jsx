import React, { Component } from 'react'
import { Navbar, NavbarBrand, Button, Nav} from 'reactstrap'
import Typical from 'react-typical'
// import {AppBar, Toolbar, IconButton, Typography, Button, makeStyles} from '@material-ui/core'
// import  MenuIcon  from '@material-ui/icons/Menu'
import AboutMe from './AboutMe.jsx'
import MyWork from './MyWork.jsx'
import HomePage from './HomePage.jsx'
import WorkExperience from './WorkExperience.jsx'
import Skills from './Skills.jsx'
import ContactMe from './ContactMe.jsx'
import '../css/navigationbar.css'

export default class NavigationBar extends Component {
    constructor(props){
        super(props)
        this.state = {
           menuOpen: false
        }
        this.toggleMenu = this.toggleMenu.bind(this)
    }

    toggleMenu = () => {
        this.setState({menuOpen: !this.state.menuOpen})
        let topbar = document.getElementsByClassName("top")[0]
        let midbar = document.getElementsByClassName("mid")[0]
        let botbar = document.getElementsByClassName("bot")[0]
        let menu = document.getElementsByClassName("menu")[0]
        if(!this.state.menuOpen){
            topbar.classList.add("open")
            midbar.classList.add("open")
            botbar.classList.add("open")
            menu.classList.add("open")
        }
        else{
            topbar.classList.remove("open")
            midbar.classList.remove("open")
            botbar.classList.remove("open")
            menu.classList.remove("open")
        }
    }

    

    render() {
        return (
            <div>
                <Button onClick={this.toggleMenu} id="btn-wrapper">
                    <div className="top"/>
                    <div className="mid"/>
                    <div className="bot"/>
                </Button>
                <div className="menu">
                    <div id="menu-items">
                        <h5 id="each-item">About Me</h5>
                        <h5 id="each-item">My Skills</h5>
                        <h5 id="each-item">My Projects</h5>
                    </div>
                </div>
            </div>
        )
    }
}
