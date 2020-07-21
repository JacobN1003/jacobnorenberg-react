import React, { Component } from 'react'
import '../css/homepage.css'

export default class HomePage extends Component {
    render() {
        return (
            <div id="home-page">
                <div id="my-info">
                    <label id="name">Jacob Norenberg</label>
                    <br/>
                    <label id="current">Current Computer Science Undergraduate</label>
                    <br/>
                    <label id="future">Future Full-Stack Web Developer</label>
                    <br/>
                    <label id="marine">US Marine Corps Veteran</label>
                </div>
                <div id="todolist">
            
                </div>
            </div>
        )
    }
}
