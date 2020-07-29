import React, { Component } from 'react'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
//import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import '../css/navigationbar.css'

export default class AboutMe extends Component {
    constructor(props){
        super(props)
        this.state = {

            }
            this.toggleSkillsPage = this.toggleSkillsPage.bind(this)
            this.toggleWorkPage = this.toggleWorkPage.bind(this)
            this.toggleContactPage = this.toggleContactPage.bind(this)
        }

        toggleSkillsPage(){
            this.props.togglePage("skills")
        }

        toggleWorkPage(){
            this.props.togglePage("work")
        }

        toggleContactPage(){
            this.props.togglePage("contact")
        }
    
    render() {
        return (
            <div>
                <UncontrolledDropdown nav>
                    <DropdownToggle nav id="about-me">
                        About me
                    </DropdownToggle>
                        <DropdownMenu >
                            <DropdownItem onClick={this.toggleSkillsPage}>
                                My Skills
                            </DropdownItem>
                            <DropdownItem onClick={this.toggleWorkPage}>
                                Work Experience
                            </DropdownItem>
                            <DropdownItem onClick={this.toggleContactPage}>
                                Contact Me
                            </DropdownItem>
                        </DropdownMenu>
                </UncontrolledDropdown>
            </div>
        )
    }
}
