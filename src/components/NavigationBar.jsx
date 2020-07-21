import React, { Component } from 'react'
import { Navbar, NavbarBrand, Button, Nav} from 'reactstrap'
import AboutMe from './AboutMe.jsx'
import MyWork from './MyWork.jsx'
//import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import '../css/navigationbar.css'

export default class NavigationBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            darkMode: false
        }
        this.toggleMode = this.toggleMode.bind(this)
    }

    toggleMode(){
        this.setState({darkMode: !this.state.darkMode})
    }


    render() {
        const dark = "Dark Mode"
        const light = "Light Mode"
        return (
            <div>
                <Navbar id="navigation-bar" expand="md">
                    <NavbarBrand id="my-portfolio" href="/"> 
                        {/* <span id="my-portolio-wrapper">&lt;</span> */}
                        &lt;Jacob's Portfolio/&gt;
                        {/* <span id="my-portolio-wrapper">/&gt;</span> */}
                    </NavbarBrand>
                    <Nav className="ml-left">
                        <MyWork/>
                        <AboutMe/>
                    </Nav>
                    <Nav className="ml-auto">
                        <Button size="sm" onClick={this.toggleMode}>
                            {this.state.darkMode === false ? light : dark}
                        </Button>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}
