import React, { Component } from 'react';
import { Card, Col, Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';

class LoginForm extends Component {
    constructor() {
        super();
        this.state = { selectedUser: 'Select a User' };
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
        return (
            <Card style={{padding: '5px', textAlign:'center'}}>
                <Card.Body>
                    <Card.Title>
                        <h4>Welcome to</h4>
                        <h3>Would You Rather?</h3>
                    </Card.Title>
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
                </Card.Body>
            </Card>
        );
    }
}

const mapStateToProps = ({ authedUser }) => ({
    users: Object.values(authedUser.availableUsers || {}),
});

export default connect(mapStateToProps)(LoginForm);
