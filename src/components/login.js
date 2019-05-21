import { handleLoadUsers } from '../actions/authedUser';
import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import LoginLoader from './login-loader';
import LoginForm from './login-form';

class Login extends Component {
    componentDidMount() {
        this.props.dispatch(handleLoadUsers());
    }

    render() {
        return (
            <Container className="h-100">
                <Row className="h-100">
                    <Col></Col>
                    <Col className="align-self-center">
                        { this.props.loading ? (<LoginLoader />) : (<LoginForm />) }
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = ({ authedUser }) => ({
    loading: !(authedUser.availableUsers)
});

export default connect(mapStateToProps)(Login);
