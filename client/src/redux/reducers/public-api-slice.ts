import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserCreateRequest, UserLogInPayload, UserLogInRequest } from '../../states/user';

export const publicApiSlice = createApi({
    reducerPath: 'publicApiSlice',
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.REACT_APP_API_URL}api/public`
    }),
    tagTypes: ['User'],
    endpoints: builder => ({
        logInUser: builder.mutation<UserLogInPayload, UserLogInRequest>({
            query: ({ username, password }) => ({
                url: `login`,
                method: 'POST',
                body: {
                    username,
                    password
                }
            }),
            invalidatesTags: ['User']
        }),
        createUser: builder.mutation<UserLogInPayload, UserCreateRequest>({
            query: ({ first_name, last_name, email, username, password }) => ({
                url: `create-user`,
                method: 'POST',
                body: {
                    first_name,
                    last_name,
                    email,
                    username,
                    password
                }
            }),
            invalidatesTags: ['User']
        })
    })
});

export const { useLogInUserMutation, useCreateUserMutation } = publicApiSlice;
