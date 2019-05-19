import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import NavUser from './nav-user';

class Dashboard extends Component {
    render() {
        return(
            <div>
                <Navbar bg="light" expend="md">
                    <Navbar.Brand>Would You Rather?</Navbar.Brand>
                    <NavUser />
                </Navbar>

                Let's get started
            </div>
        );
    }
}

export default Dashboard;
