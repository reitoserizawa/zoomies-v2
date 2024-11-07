import { configureStore } from '@reduxjs/toolkit';
import { publicApiSlice } from './reducers/public-api-slice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { protectedApiSlice } from './reducers/protected-api-slice';
import userReducer from './reducers/userSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        [publicApiSlice.reducerPath]: publicApiSlice.reducer,
        [protectedApiSlice.reducerPath]: protectedApiSlice.reducer
    },
    middleware: gDM => gDM().concat([publicApiSlice.middleware, protectedApiSlice.middleware])
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
