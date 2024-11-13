import { createSlice } from '@reduxjs/toolkit';
import { PetState } from '../../states/pet';

const initialState: PetState = {
    name: '',
    birthday: null,
    breed: '',
    introduction: '',

    owner: undefined,
    owner_id: undefined,

    check_ins: undefined,

    error: undefined
};

const petSlice = createSlice({
    name: 'pet',
    initialState,
    reducers: {
        resetPetState: () => {
            return {
                ...initialState
            };
        },
        setPetError: (state, action) => {
            return {
                ...state,
                error: {
                    ...action.payload
                }
            };
        }
    }
});

export const { resetPetState, setPetError } = petSlice.actions;

export default petSlice.reducer;
