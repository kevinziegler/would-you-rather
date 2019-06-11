import React, { Component } from 'react';
import { Container, Image, Row, Col, Card, ListGroup } from 'react-bootstrap';

const QuestionListItem = ({question, user}) => (
    <Card>
      <Card.Header>{user.name} asked: <span className="text-muted">Would you rather?</span></Card.Header>
        <Card.Body>
            <Container>
                <Row>
                    <Col xs={ 1 } className="align-self-center">
                        <h1>OR</h1>
                    </Col>
                    <Col>
                        <ListGroup variant="flush">
                            <ListGroup.Item>{question.optionOne.text}</ListGroup.Item>
                            <ListGroup.Item>{question.optionTwo.text}</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col xs={1}>
                        <Image src={user.avatarURL} fluid rounded />
                    </Col>
                </Row>
            </Container>
        </Card.Body>
    </Card>
);

export default QuestionListItem;
