import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
// import { Link } from "react-router-dom";
// import { ButtonContainer, NavComponent } from './Navstyle';

export default class Navbar extends Component {
    render() {
        return(   
            <Nav  activeKey="/home">
                <Nav.Item>
                    <Nav.Link href="/">Users</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/photos">Photos</Nav.Link>
                </Nav.Item>
            </Nav>
        )
    }
}


