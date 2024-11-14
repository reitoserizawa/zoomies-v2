import { createSlice } from '@reduxjs/toolkit';
import { UserState } from '../../states/user';

const initialState: UserState = {
    email: '',
    username: '',
    pets: [],
    check_ins: [],
    loading: false,
    signedIn: false,
    error: undefined
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        resetUserState: () => {
            return {
                ...initialState
            };
        },
        setLoading: state => {
            return {
                ...state,
                loading: true
            };
        },
        setUserDetails: (state, action) => {
            return {
                ...state,
                ...action.payload,
                loading: false,
                signedIn: true
            };
        },
        setUserError: (state, action) => {
            return {
                ...state,
                loading: false,
                signedIn: false,
                error: {
                    ...action.payload
                }
            };
        }
    }
});

export const { setUserDetails, setUserError, resetUserState, setLoading } = userSlice.actions;

export default userSlice.reducer;
