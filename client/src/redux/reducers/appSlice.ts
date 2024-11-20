import { createSlice } from '@reduxjs/toolkit';
import { AppState } from '../../states/app';

const initialState: AppState = {
    isPetCreateFormModalOpen: false,
    isPetUpdateFormModalOpen: false,
    dogParkModalId: undefined
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
        },
        setDogParkModalId: (state, action) => {
            return {
                ...state,
                dogParkModalId: action.payload
            };
        }
    }
});

export const { togglePetCreateFormModal, togglePetUpdateFormModal, setDogParkModalId } = appSlice.actions;

export default appSlice.reducer;
