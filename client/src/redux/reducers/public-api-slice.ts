import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserCreateRequest, UserLogInPayload, UserLogInRequest } from '../../interfaces/user';

export const publicApiSlice = createApi({
    reducerPath: 'publicApiSlice',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/api/public'
    }),
    endpoints: builder => ({
        logInUser: builder.mutation<UserLogInPayload, UserLogInRequest>({
            query: ({ username, password }) => ({
                url: `login`,
                method: 'POST',
                body: {
                    username,
                    password
                }
            })
        }),
        createUser: builder.mutation<UserLogInPayload, UserCreateRequest>({
            query: ({ email, username, password }) => ({
                url: `create-user`,
                method: 'POST',
                body: {
                    email,
                    username,
                    password
                }
            })
        })
    })
});

export const { useLogInUserMutation, useCreateUserMutation } = publicApiSlice;
