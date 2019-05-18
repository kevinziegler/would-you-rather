import { _getUsers } from '../util/_DATA';
export const SET_AUTHED_USER = 'SET_AUTHED_USER';
export const LOAD_USERS = 'LOAD_USERS';
export const LOGOUT = 'LOGOUT';

export const setAuthedUser = (id) => ({type: SET_AUTHED_USER, id});
export const loadUsers = (users) => ({type: LOAD_USERS, users});
export const logout = () => ({ type: LOGOUT });

export const handleLoadUsers = () => {
    return dispatch => {
        _getUsers().then(users => dispatch(loadUsers(users)));
    };
};
