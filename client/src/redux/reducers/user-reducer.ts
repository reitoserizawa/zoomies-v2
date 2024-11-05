import { UserState } from '../../interfaces/user';
import { UserActionTypes, SET_USER, UPDATE_USER, SIGN_IN, SIGN_OUT } from '../actions/user';

const initialState: UserState = {
    signedIn: false,
    email: '',
    username: '',
    pets: [],
    check_ins: [],
    loading: false,
    error: undefined
};

const userReducer = (state = initialState, action: UserActionTypes): UserState => {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                signedIn: true
            };
        case SIGN_OUT:
            return {
                ...state,
                signedIn: false,
                email: '',
                username: '',
                pets: [],
                check_ins: []
            };
        case SET_USER:
            return {
                ...state,
                ...action.payload,
                signedIn: true
            };
        case UPDATE_USER:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export default userReducer;
