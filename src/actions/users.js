import { _getUsers } from '../util/_DATA';

export const LOAD_USERS = 'LOAD_USERS';

export const loadUsers = (users) => ({ type: LOAD_USERS, users});

export const handleLoadUsers = () => {
    return dispatch => {
        _getUsers().then(users => dispatch(loadUsers(users)));
    };
}
