import { _getQuestions } from '../util/_DATA';

export const LOAD_QUESTIONS = 'LOAD_QUESTIONS';

export const loadQuestions = (questions) => ({type: LOAD_QUESTIONS, questions});

export const handleLoadQuestions = () => {
    return dispatch => {
        _getQuestions().then(questions => dispatch(loadQuestions(questions)));
    };
};
