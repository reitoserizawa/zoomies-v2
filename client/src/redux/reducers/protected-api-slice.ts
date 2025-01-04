import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserChangePasswordRequest, UserState } from '../../states/user';
import { PetState } from '../../states/pet';
import { DogParkState } from '../../states/dog-park';
import { DogParkCheckInState, CreateDogParkCheckInState } from '../../states/dog-park-check-in';
import { UserFavoriteDogParkState } from '../../states/user-favorite-dog-park';

export const protectedApiSlice = createApi({
    reducerPath: 'protectedApiSlice',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_API_URL || 'http://localhost:3000/api/protected',
        prepareHeaders: (headers: Headers) => {
            const token = localStorage.getItem('token');

            if (token) {
                headers.set('authorization', `Bearer ${token}`);
            }

            return headers;
        }
    }),
    tagTypes: ['User', 'Pet', 'DogPark', 'CheckIn', 'UserFavoriteDogPark'],
    endpoints: builder => ({
        getUserDetails: builder.query<UserState, null>({
            query: () => ({
                url: `users`
            }),
            providesTags: ['User']
        }),
        updateUserDetails: builder.mutation<UserState, UserState>({
            query: userDetails => ({
                url: `users`,
                method: 'POST',
                body: userDetails
            }),
            invalidatesTags: ['User']
        }),
        changeUserPassword: builder.mutation<UserState, UserChangePasswordRequest>({
            query: ({ currentPassword, newPassword }) => ({
                url: `users/change-password`,
                method: 'POST',
                body: {
                    current_password: currentPassword,
                    new_password: newPassword
                }
            }),
            invalidatesTags: ['User']
        }),
        deleteUser: builder.mutation<{ success: boolean }, null>({
            query: () => ({
                url: `users`,
                method: 'DELETE'
            }),
            invalidatesTags: ['User']
        }),
        getPetsFromUser: builder.query<PetState[], null>({
            query: () => ({
                url: `users/pets`
            }),
            providesTags: ['Pet']
        }),
        createPet: builder.mutation<PetState, Partial<PetState>>({
            query: ({ name, breed, birthday, introduction }) => ({
                url: `pets`,
                method: 'POST',
                body: {
                    name,
                    breed,
                    birthday,
                    introduction
                }
            }),
            invalidatesTags: ['Pet', 'CheckIn']
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
            }),
            invalidatesTags: ['Pet']
        }),
        deletePet: builder.mutation<{ success: boolean }, { id: number }>({
            query: ({ id }) => ({
                url: `pets/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Pet', 'CheckIn']
        }),
        getUncheckedInPets: builder.query<PetState[], null>({
            query: () => ({
                url: `pets/unchecked-in`
            }),
            providesTags: ['CheckIn']
        }),
        getAllDogParks: builder.query<DogParkState[], null>({
            query: () => ({
                url: `dog-parks`
            }),
            providesTags: ['DogPark', 'CheckIn']
        }),
        getDogParkDetails: builder.query<DogParkState, { id: number }>({
            query: ({ id: dogParkId }) => ({
                url: `dog-parks/${dogParkId}`
            }),
            providesTags: (result, error, { id }) => [{ type: 'DogPark', id }]
        }),
        getActiveCheckInsFromDogPark: builder.query<DogParkCheckInState[], { id: number }>({
            query: ({ id: dogParkId }) => ({
                url: `dog-parks/${dogParkId}/active-check-ins`
            }),
            providesTags: ['CheckIn']
        }),
        getPastCheckInsFromDogPark: builder.query<DogParkCheckInState[], { id: number }>({
            query: ({ id: dogParkId }) => ({
                url: `dog-parks/${dogParkId}/past-check-ins`
            }),
            providesTags: ['CheckIn']
        }),
        getRecentDogParkCheckIns: builder.query<DogParkCheckInState[], null>({
            query: () => ({
                url: `users/recent-dog-park-check-ins`
            }),
            providesTags: ['CheckIn']
        }),
        createCheckIns: builder.mutation<DogParkCheckInState[], CreateDogParkCheckInState>({
            query: ({ dogParkId, petIds }) => ({
                url: `dog-parks/${dogParkId}/check-ins`,
                method: 'POST',
                body: {
                    pet_ids: petIds
                }
            }),
            invalidatesTags: ['Pet', 'CheckIn']
        }),
        deleteCheckIn: builder.mutation<{ success: boolean }, { checkInId: number }>({
            query: ({ checkInId }) => ({
                url: `users/dog-park-check-ins`,
                method: 'DELETE',
                body: {
                    check_in_id: checkInId
                }
            }),
            invalidatesTags: ['Pet', 'CheckIn']
        }),
        getFavoriteDogParks: builder.query<UserFavoriteDogParkState[], null>({
            query: () => ({
                url: `users/favorite-dog-parks`
            }),
            providesTags: ['UserFavoriteDogPark']
        }),
        checkFavoriteDogParkStatus: builder.query<{ favoritedDogPark: UserFavoriteDogParkState | null }, { dogParkId?: number }>({
            query: ({ dogParkId }) => ({
                url: `users/favorite-dog-parks/dog-parks/${dogParkId}`
            }),
            providesTags: ['UserFavoriteDogPark']
        }),
        addFavoriteDogPark: builder.mutation<{ success: boolean }, { dogParkId: number }>({
            query: ({ dogParkId }) => ({
                url: `users/favorite-dog-parks`,
                method: 'POST',
                body: {
                    dog_park_id: dogParkId
                }
            }),
            invalidatesTags: ['UserFavoriteDogPark']
        }),
        deleteFavoriteDogPark: builder.mutation<{ success: boolean }, { userFavoriteDogParkId: number }>({
            query: ({ userFavoriteDogParkId }) => ({
                url: `users/favorite-dog-parks/${userFavoriteDogParkId}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['UserFavoriteDogPark']
        })
    })
});

export const {
    useGetUserDetailsQuery,
    useUpdateUserDetailsMutation,
    useChangeUserPasswordMutation,
    useDeleteUserMutation,
    useCreatePetMutation,
    useUpdatePetDetailsMutation,
    useDeletePetMutation,
    useGetUncheckedInPetsQuery,
    useGetAllDogParksQuery,
    useGetDogParkDetailsQuery,
    useGetActiveCheckInsFromDogParkQuery,
    useGetPastCheckInsFromDogParkQuery,
    useCreateCheckInsMutation,
    useDeleteCheckInMutation,
    useGetPetsFromUserQuery,
    useGetFavoriteDogParksQuery,
    useCheckFavoriteDogParkStatusQuery,
    useAddFavoriteDogParkMutation,
    useDeleteFavoriteDogParkMutation,
    useGetRecentDogParkCheckInsQuery
} = protectedApiSlice;
