import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserLogInRequest, UserState } from '../../interfaces/user';

export const protectedApiSlice = createApi({
    reducerPath: 'protectedApiSlice',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/api/public',
        prepareHeaders: (headers, { getState }) => {
            // TODO: add state for token
            const token = (getState() as any).auth.token;

            if (token) {
                headers.set('authorization', `Bearer ${token}`);
            }

            return headers;
        }
    }),
    endpoints: builder => ({
        logInUser: builder.mutation<Partial<UserState>, UserLogInRequest>({
            query: ({ username, password }) => ({
                url: `login`,
                method: 'POST',
                body: {
                    username,
                    password
                }
            })
        })
    })
});

export const { useLogInUserMutation } = protectedApiSlice;
