import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import NavUser from './nav-user';

class Dashboard extends Component {
    render() {
        return(
            <div>
                <Navbar bg="light" expend="md">
                    <Navbar.Brand>Would You Rather?</Navbar.Brand>
                    <Nav>
                        <Nav.Item><Nav.Link>Unanswered Questions</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link>Completed Questions</Nav.Link></Nav.Item>
                    </Nav>
                    <Nav>
                        <Nav.Item>
                            <NavUser />
                        </Nav.Item>
                    </Nav>
                </Navbar>

                Let's get started
            </div>
        );
    }
}

export default Dashboard;
