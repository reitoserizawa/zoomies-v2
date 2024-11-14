import { createSlice } from '@reduxjs/toolkit';
import { AppState } from '../../states/app';

const initialState: AppState = {
    isPetCreateFormModalOpen: false,
    isPetUpdateFormModalOpen: false
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        togglePetCreateFormModal: (state, action) => {
            return {
                ...state,
                isPetCreateFormModalOpen: action.payload
            };
        },
        togglePetUpdateFormModal: (state, action) => {
            return {
                ...state,
                isPetUpdateFormModalOpen: action.payload
            };
        }
    }
});

export const { togglePetCreateFormModal, togglePetUpdateFormModal } = appSlice.actions;

export default appSlice.reducer;
