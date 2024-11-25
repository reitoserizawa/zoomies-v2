import { createSlice } from '@reduxjs/toolkit';
import { DogParkState } from '../../states/dog-park';

const initialState: DogParkState = {
    name: '',
    address: '',

    type: null,
    geo: null,

    check_ins: undefined,
    active_check_ins: undefined
};

const dogParkSlice = createSlice({
    name: 'dogPark',
    initialState,
    reducers: {
        setDogParkDetails: (state, action) => {
            return {
                ...state,
                ...action.payload
            };
        },
        setActiveCheckIns: (state, action) => {
            return {
                ...state,
                active_check_ins: action.payload
            };
        }
    }
});

export const { setDogParkDetails, setActiveCheckIns } = dogParkSlice.actions;

export default dogParkSlice.reducer;
