import { createSlice } from '@reduxjs/toolkit';
import { UserState } from '../../interfaces/user';

const initialState: UserState = {
    email: '',
    username: '',
    pets: [],
    check_ins: [],
    loading: false,
    signedIn: false
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
        }
    }
});

export const { logIn } = userSlice.actions;

export default userSlice.reducer;
