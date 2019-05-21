import React, { Component } from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

const QuestionListItem = ({question}) => (
    <Card>
        <Card.Header>Sarah Edo asked: <span className="text-muted">Would you rather?</span></Card.Header>
        <Card.Body>
            <Card.Text>
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
                </Row>
            </Container>
            </Card.Text>
        </Card.Body>
    </Card>
);

export default QuestionListItem;
