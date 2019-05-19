import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Navbar, NavDropdown } from 'react-bootstrap';
import { logout } from '../actions/authedUser';

const NavUser = ({ user, dispatch }) => (
    <Container>
      <Row>
        <Col className="align-self-center">
          <NavDropdown title={user.name}>
            <NavDropdown.Item onClick={() => dispatch(logout())}>
                Logout
            </NavDropdown.Item>
          </NavDropdown>
        </Col>
        <Col>
          <Navbar.Text>
            <img
            style={{
                verticalAlign: "middle",
                width: 64,
                height: 64,
                borderRadius: "50%"
            }}
            src={user.avatarURL}
            alt="Avatar for {user.name}"/>
          </Navbar.Text>
        </Col>
      </Row>
    </Container>
);

const mapStateToProps = ({authedUser}) => {
    return (authedUser.userId === null)
        ? { user: null }
        : { user: authedUser.availableUsers[authedUser.userId] };
};

export default connect(mapStateToProps)(NavUser);
