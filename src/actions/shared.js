import { _getUsers, _getQuestions } from '../util/_DATA';

import { loadUsers } from './users';
import { loadQuestions } from './questions';

export const handleInitialData = () => {
    return dispatch => {
        Promise
            .all([_getUsers(), _getQuestions()])
            .then(([users, questions]) => {
                dispatch(loadUsers(users));
                dispatch(loadQuestions(questions));
            });
    };
}
