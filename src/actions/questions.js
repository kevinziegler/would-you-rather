import { _getQuestions, _saveQuestion, formatQuestion } from '../util/_DATA';

export const LOAD_QUESTIONS = 'LOAD_QUESTIONS';
export const ADD_QUESTION='ADD_QUESTION';
export const VOTE_QUESTION='VOTE_QUESTION';

export const loadQuestions = (questions) => ({type: LOAD_QUESTIONS, questions});
export const addQuestion = (question) => ({type: ADD_QUESTION, question});
export const voteQuestion = (question, choice, user) => {
    type: VOTE_QUESTION,
    question,
    choice,
    user
}

export const handleLoadQuestions = () => {
    return dispatch => {
        _getQuestions().then(questions => dispatch(loadQuestions(questions)));
    };
};

export const handleAddQuestion = (questionData) => {
    const question = formateQuestion(questionData);
    addQuestion(question);

    return dispatch => _saveQuestion(question);
}

export const handleVoteQuestion = (user, question, answer) => {

}
