import { createSlice } from '@reduxjs/toolkit';
import { AppState } from '../../interfaces/app';

const initialState: AppState = {
    isPetFormModalOpen: false
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setIsPetFormModalOpen: (state, action) => {
            return {
                ...state,
                isPetFormModalOpen: action.payload
            };
        }
    }
});

export const { setIsPetFormModalOpen } = appSlice.actions;

export default appSlice.reducer;
