import { LOAD_QUESTIONS } from '../actions/questions';

export default function questions (state = null, action) {
    switch(action.type) {
    case LOAD_QUESTIONS:
        return { ...action.questions };
    default:
        return state;
    }
};
