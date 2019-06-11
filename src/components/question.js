import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class Question extends Component {
    render() {
        return (
            <Card>
                <Card.Body>
                    <Card.Title>Would you rather?</Card.Title>
                    <Card.Text>
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

const mapStateToProps = (users, questions) => {
    return {
        question: questions[questionId],
        author: users[authorId]
    };
}
