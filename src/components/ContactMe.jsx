import React, { Component } from 'react'
import {Label, Input, Button, Tooltip, Spinner} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import {faEnvelope, faPaperPlane} from "@fortawesome/free-solid-svg-icons"
import axios from 'axios';
import '../css/contactme.css'

export default class ContactMe extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: "",
            message: "",
            sentEmail: false
        }
        this.grabInput = this.grabInput.bind(this)
        this.sendEmail = this.sendEmail.bind(this)
    }

    grabInput(e){
        let value = e.target.value 
        let name = e.target.name 
        this.setState({[name]: value})
    }

    sendEmail(){
       console.log("email:", this.state.email, "\nmessage:",this.state.message)
       this.setState({email: "", message: "", sentEmail:!this.state.sentEmail})

    }

    render() {
        return (
            <div id="contact-me">
                <div id="contact-me-container">
                    <div id="social-media-container">
                        <h1>Contact Me</h1>
                        <hr/>
                        <div id="social-icons">
                            
                            <div id="linkedin">                            
                                <FontAwesomeIcon id="linkedin-icon" icon={faLinkedin} />
                                <span id="handle">
                                    <a id="li" href="https://www.linkedin.com/in/jacobnorenberg/"
                                    target="_blank" rel="noopener noreferrer">
                                    JacobNorenberg
                                    </a>
                                </span>
                            </div>
                            <div id="github">
                                <FontAwesomeIcon id="github-icon" icon={faGithub} />
                                <span id="handle">
                                    <a id="gith" href="https://github.com/JacobN1003"
                                    target="_blank" rel="noopener noreferrer">
                                    JacobN1003
                                    </a>
                                </span>
                            </div>
                            <div id="facebook">
                                <FontAwesomeIcon id="facebook-icon" icon={faFacebook} />
                                <span id="handle">
                                    <a id="fb" href="https://www.facebook.com/jake.norenberg"
                                    target="_blank" rel="noopener noreferrer">
                                    JakeNorenberg
                                    </a>
                                </span>
                            </div>
                        </div>
                       <br/><br/>
                        <div id="form">
                            {!this.state.sentEmail && <div id="form-input">
                                <Label for="contact-email">Email</Label>
                                <Input 
                                    onChange={this.grabInput}
                                    type="email" 
                                    name="email" 
                                    value={this.state.email}
                                    id="contact-email" 
                                    placeholder="" />
                                <br/>
                                <Label for="contact-email">Message</Label>
                                <Input 
                                    onChange={this.grabInput}
                                    type="textarea" 
                                    name="message" 
                                    value={this.state.message}
                                    id="contact-message" 
                                    placeholder="" />
                                <Button id="send-btn" className="float-right" onClick={this.sendEmail}> Send </Button>
                            </div>}

                            {this.state.sentEmail && <div id="form-input-sent">
                                <h1>Email Sent!</h1>
                                <FontAwesomeIcon id="mail" icon={faPaperPlane}/>
                                <br/>
                                <Button onClick={this.sendEmail}>Okay</Button>
                                </div>}

                            <div id="portrait"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
