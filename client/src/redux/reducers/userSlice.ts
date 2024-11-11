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
        logIn: (state, action) => {
            return {
                ...state,
                ...action.payload,
                signedIn: true
            };
        },
        setError: (state, action) => {
            return {
                ...state,
                error: {
                    ...action.payload
                }
            };
        }
    }
});

export const { logIn, setError } = userSlice.actions;

export default userSlice.reducer;
