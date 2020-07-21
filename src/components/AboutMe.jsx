import React, { Component } from 'react'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
//import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import '../css/navigationbar.css'

export default class AboutMe extends Component {
    render() {
        return (
            <div>
                <UncontrolledDropdown nav>
                    <DropdownToggle nav id="about-me">
                        About me
                    </DropdownToggle>
                        <DropdownMenu >
                            <DropdownItem href="/skills">
                                My Skills
                            </DropdownItem>
                            <DropdownItem href="/work-experience">
                                Work Experience
                            </DropdownItem>
                            <DropdownItem href="contact-me">
                                Contact Me
                            </DropdownItem>
                        </DropdownMenu>
                </UncontrolledDropdown>
            </div>
        )
    }
}
