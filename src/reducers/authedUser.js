import { SET_AUTHED_USER, LOAD_LOGIN_USERS, LOGOUT } from '../actions/authedUser';

export default function authedUser (state = {}, action) {
    switch (action.type) {
    case SET_AUTHED_USER:
        return { ...state, userId: action.id };
    case LOAD_LOGIN_USERS:
        return { ...state, availableUsers: action.users };
    case LOGOUT:
        return { ...state, userId: null };
    default:
        return state;
    }
}
