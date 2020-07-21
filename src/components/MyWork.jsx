import React, { Component } from 'react'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import '../css/navigationbar.css'

export default class MyWork extends Component {
    render() {
        return (
            <div>
                <UncontrolledDropdown nav>
                    <DropdownToggle nav id="my-work">
                        My work
                    </DropdownToggle>
                    <DropdownMenu >
                        <DropdownItem disabled>
                            Project 1
                        </DropdownItem>
                        <DropdownItem disabled>
                            Project 2
                        </DropdownItem>
                        <DropdownItem disabled>
                            Project 3
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </div>
        )
    }
}
