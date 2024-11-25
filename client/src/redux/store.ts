import { configureStore } from '@reduxjs/toolkit';
import { publicApiSlice } from './reducers/public-api-slice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { protectedApiSlice } from './reducers/protected-api-slice';
import userReducer from './reducers/userSlice';
import petReducer from './reducers/petSlice';
import appReducer from './reducers/appSlice';
import dogParkReducer from './reducers/dogParkSlice';

export const store = configureStore({
    reducer: {
        app: appReducer,
        user: userReducer,
        pet: petReducer,
        dogPark: dogParkReducer,
        [publicApiSlice.reducerPath]: publicApiSlice.reducer,
        [protectedApiSlice.reducerPath]: protectedApiSlice.reducer
    },
    middleware: gDM => gDM().concat([publicApiSlice.middleware, protectedApiSlice.middleware])
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
