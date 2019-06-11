import React, { Component } from 'react';
import { Card, Container, Row, Col, Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import QuestionListItem from './question-list-item';

class QuestionList extends Component {
    render() {
        const { questions, users } = this.props;

        return (
          <div>
            <h1 style={{ textAlign: 'center' }}>Questions</h1>
            <Container className="h-100">
                <Row className="h-100">
                <Col className="align-self-center">
                      {
                          (questions === null || users === null)
                              ? (
                                  <Card body style={{textAlign: 'center'}} >
                                      <Spinner animation="border" />
                                  </Card>
                              )
                              : questions.map(question => (
                                  <QuestionListItem
                                    key={question.id}
                                    question={question}
                                    user={users[question.author]}
                                  />
                              ))
                      }
                </Col>
                </Row>
            </Container>
          </div>
        );
    }
}

const mapStateToProps = ({questions, users}) => {
    return {
        users,
        questions: questions != null ? Object.values(questions) : null,
    };
};

export default connect(mapStateToProps)(QuestionList);
