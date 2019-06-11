import React, { Component } from 'react';
import { connect } from 'react-redux';

class UnansweredQuestions extends Component {
    render() {
        return (<QuestionList questions={unanswered} />);
    }
}

const mapStateToProps = ({questions, users, authedUser }) => {
    unanswered = Object
        .values(questions)
        .filter((question) => { true });

    return { unanswered };
}
