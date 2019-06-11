import { LOAD_QUESTIONS } from '../actions/questions';

export default function questions (state = null, action) {
    switch(action.type) {
    case LOAD_QUESTIONS:
        return { ...action.questions };
    case VOTE_QUESTION:
        // FIXME: Look at DATA and see if this is the right approach
        const updatedQuestion = state[action.question.id];
        let newState = { ...state };

        if (updatedQuestion.optionOne.text === action.choice) {
            updatedQuestion.optionOne.votes.push(action.user.id);
        } else {
            updatedQuestion.optionTwo.votes.push(action.user.id);
        }

        newState[updatedQuestion.id] = updatedQuestion;

    default:
        return state;
    }
};
