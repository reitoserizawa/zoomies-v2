import { createSlice } from '@reduxjs/toolkit';
import { UserState } from '../../interfaces/user';

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
        logIn: (state, action) => {
            return {
                ...state,
                ...action.payload,
                signedIn: true
            };
        },
        setUserError: (state, action) => {
            return {
                ...state,
                error: {
                    ...action.payload
                }
            };
        }
    }
});

export const { logIn, setUserError, resetUserState } = userSlice.actions;

export default userSlice.reducer;
