import { createSlice } from '@reduxjs/toolkit';
import { AppState } from '../../states/app';

const initialState: AppState = {
    isPetCreateFormModalOpen: false,
    isPetUpdateFormModalOpen: false,
    dogParkModalId: undefined,
    dashboardContent: 'pet',
    isChangePasswordModalOpen: false
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        switchDashboardContent: (state, action) => {
            return {
                ...state,
                dashboardContent: action.payload
            };
        },
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
        },
        toggleChangePasswordForm: (state, action) => {
            return {
                ...state,
                isChangePasswordModalOpen: action.payload
            };
        }
    }
});

export const { togglePetCreateFormModal, togglePetUpdateFormModal, setDogParkModalId, switchDashboardContent, toggleChangePasswordForm } = appSlice.actions;

export default appSlice.reducer;
