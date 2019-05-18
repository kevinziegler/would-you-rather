import { handleLoadUsers, setAuthedUser } from '../actions/authedUser';
import React, { Component } from 'react';
import { Container, Col, Form, Button } from 'react-bootstrap';
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
            return <p>Loading!</p>;
        }

        return (
            <Container style={{width: '30%', padding: '5px'}}>
                <h4>Welcome to</h4>
                <h3>Would You Rather?</h3>
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
            </Container>
        );
    }
}

const mapStateToProps = ({ authedUser }) => ({
    users: Object.values(authedUser.availableUsers || {}),
    loading: !(authedUser.availableUsers)
});

export default connect(mapStateToProps)(Login);
