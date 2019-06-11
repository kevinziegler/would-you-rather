import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import NavUser from './nav-user';

import { handleInitialData } from '../actions/shared';

class Dashboard extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData());
    }

    render() {
        return(
            <div>
                <Navbar bg="light" expend="md">
                    <Navbar.Brand>Would You Rather?</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Item className="align-self-center">
                                <Link to="/questions/unanswered">Unanswered Questions</Link>
                        </Nav.Item>
                        <Nav.Item><Nav.Link>Completed Questions</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link>Add a Question</Nav.Link></Nav.Item>
                    </Nav>
                    <Nav>
                        <Nav.Item><NavUser /></Nav.Item>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default connect()(Dashboard);
