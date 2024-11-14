import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserLogInRequest, UserState } from '../../states/user';
import { PetCreateState, PetState } from '../../states/pet';

export const protectedApiSlice = createApi({
    reducerPath: 'protectedApiSlice',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/api/protected',
        prepareHeaders: headers => {
            const token = localStorage.getItem('token');

            if (token) {
                headers.set('authorization', `Bearer ${token}`);
            }

            return headers;
        }
    }),
    endpoints: builder => ({
        logInUser: builder.mutation<UserState, UserLogInRequest>({
            query: ({ username, password }) => ({
                url: `login`,
                method: 'POST',
                body: {
                    username,
                    password
                }
            })
        }),
        getUserDetails: builder.query<UserState, null>({
            query: () => ({
                url: `users`
            })
        }),
        createPet: builder.mutation<PetState, PetCreateState>({
            query: ({ name, breed, birthday, introduction }) => ({
                url: `pets`,
                method: 'POST',
                body: {
                    name,
                    breed,
                    birthday,
                    introduction
                }
            })
        }),
        updatePetDetails: builder.mutation<PetState, Partial<PetState>>({
            query: ({ id, name, breed, birthday, introduction }) => ({
                url: `pets/${id}`,
                method: 'POST',
                body: {
                    name,
                    breed,
                    birthday,
                    introduction
                }
            })
        }),
        deletePet: builder.mutation<{ success: boolean }, { id: number }>({
            query: ({ id }) => ({
                url: `pets/${id}`,
                method: 'DELETE'
            })
        })
    })
});

export const { useLogInUserMutation, useGetUserDetailsQuery, useCreatePetMutation, useUpdatePetDetailsMutation, useDeletePetMutation } = protectedApiSlice;
