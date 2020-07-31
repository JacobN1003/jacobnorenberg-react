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
            darkMode: false,
            showHomePage: true,
            showSkillsPage: false,
            showWorkPage: false,
            showContactPage: false
        }
        this.toggleMode = this.toggleMode.bind(this)
        this.toggleHome = this.toggleHome.bind(this)
        this.togglePage = this.togglePage.bind(this)
    }

    toggleMode(){
        this.setState({darkMode: !this.state.darkMode})
    }

    toggleHome(){
        this.setState({showHomePage: true, showSkillsPage: false, showWorkPage: false, showContactPage: false})
    }

    togglePage(page){
        if(page === "skills") this.setState({showHomePage: false, showSkillsPage: true, showWorkPage: false, showContactPage: false}) 
        if(page === "work") this.setState({showHomePage: false, showSkillsPage: false, showWorkPage: true, showContactPage: false})
        if(page === "contact") this.setState({showHomePage: false, showSkillsPage: false, showWorkPage: false, showContactPage: true})
    }

    
    
    render() {
        return (
            <div id="menu">
               <Button id="btn-wrapper">
                <div id="top"/>
                <div id="mid"/>
                <div id="bot"/>
               </Button>
                {/* {this.state.showHomePage && <HomePage/>}
                {this.state.showSkillsPage && <Skills/>}
                {this.state.showWorkPage && <WorkExperience/>}
                {this.state.showContactPage && <ContactMe/>} */}
            </div>
        )
    }
}
