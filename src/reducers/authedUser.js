import { SET_AUTHED_USER, LOAD_USERS } from '../actions/authedUser';

export default function authedUser (state = {}, action) {
    switch (action.type) {
    case SET_AUTHED_USER:
        // FIXME: Should this be the full user?
        return { ...state, userId: action.id };
    case LOAD_USERS:
        return { ...state, availableUsers: action.users };
    default:
        return state;
    }
}
