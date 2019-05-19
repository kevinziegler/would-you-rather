import { handleLoadUsers, setAuthedUser } from '../actions/authedUser';
import React, { Component } from 'react';
import { Card, Container, Col, Form, Button, Row, Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';

// const users = ['Fred', 'Bob', 'George'];
class Login extends Component {
    constructor() {
        super();
        this.state = { selectedUser: 'Select a User' };
    }
    componentDidMount() {
        this.props.dispatch(handleLoadUsers());
    }

    setAuthedUser(event) {
        event.preventDefault();
        this.props.dispatch(setAuthedUser(this.state.selectedUserData.id));
    }

    selectUser(event) {
        event.preventDefault();

        const selectedUser = event.target.value;
        const selectedUserData = this
            .props
            .users
            .filter(u => u.name === selectedUser)[0];

        this.setState({selectedUser, selectedUserData});
    }

    render() {
        if (this.props.loading) {
            // FIXME: Change to loading spinner
            return (
                <Container className="h-100">
                  <Row className="h-100">
                    <Col></Col>
                    <Col className="align-self-center">
                    <Card body>
                    <Card.Title>
                        Would you Rather? <span className="text-muted">is loading</span>
                    </Card.Title>
                    <Card.Text style={{textAlign: 'center'}}>
                      <Spinner animation="border" />
                    </Card.Text>
                    </Card>
                    </Col>
                    <Col></Col>
                    </Row>
                </Container>
            );
        }

        return (
            <Container className="h-100">
                <Row className="h-100">
                <Col></Col>
                <Col className="align-self-center">
                <Card style={{padding: '5px', textAlign:'center'}}>
                    <Card.Body>
                        <Card.Title>
                            <h4>Welcome to</h4>
                            <h3>Would You Rather?</h3>
                        </Card.Title>
                        <Card.Text>
                        <Form onSubmit={(e) => this.setAuthedUser(e)}>
                            <Form.Row>
                                <Col md="auto">
                                    <Form.Control
                                    as="select"
                                    value={this.state.selectedUser}
                                    onChange={(ev) => this.selectUser(ev)}>
                                        <option key="user-select" disabled>Select a User</option>
                                        {
                                            this
                                                .props
                                                .users
                                                .map(u => (
                                                    <option key={u.id}>{u.name}</option>
                                                ))
                                        }
                                    </Form.Control>
                                        <Form.Text className="text-muted">
                                        Please select a user from the list above to log in
                                    </Form.Text>
                                </Col>
                                <Col>
                                    <Button
                                        type="submit"
                                        disabled={!this.state.selectedUserData}>
                                    Login
                                    </Button>
                                </Col>
                            </Form.Row>
                        </Form>
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col></Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = ({ authedUser }) => ({
    users: Object.values(authedUser.availableUsers || {}),
    loading: !(authedUser.availableUsers)
});

export default connect(mapStateToProps)(Login);
