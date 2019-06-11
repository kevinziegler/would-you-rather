import { LOAD_USERS } from '../actions/users';

export default function users (state = null, action) {
    switch(action.type) {
    case LOAD_USERS:
        return { ...action.users };
    default:
        return state;
    }
};
