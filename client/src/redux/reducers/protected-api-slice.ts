import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserLogInRequest, UserState } from '../../states/user';
import { PetState } from '../../states/pet';
import { DogParkState } from '../../states/dog-park';
import { CheckInState, CreateCheckInState } from '../../states/check-in';
import { UserFavoriteDogParkState } from '../../states/user-favorite-dog-park';

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
    tagTypes: ['User', 'Pet', 'DogPark', 'CheckIn', 'UserFavoriteDogPark'],
    endpoints: builder => ({
        logInUser: builder.mutation<UserState, UserLogInRequest>({
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
        getUserDetails: builder.query<UserState, null>({
            query: () => ({
                url: `users`
            }),
            providesTags: ['User']
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
            invalidatesTags: ['Pet', 'CheckIn']
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
            providesTags: ['DogPark']
        }),
        getActiveCheckInsFromDogPark: builder.query<CheckInState[], { id: number }>({
            query: ({ id: dogParkId }) => ({
                url: `dog-parks/${dogParkId}/active-check-ins`
            }),
            providesTags: ['CheckIn']
        }),
        createCheckIns: builder.mutation<CheckInState[], CreateCheckInState>({
            query: ({ dogParkId, petIds }) => ({
                url: `dog-parks/${dogParkId}/check-ins`,
                method: 'POST',
                body: {
                    pet_ids: petIds
                }
            }),
            invalidatesTags: ['CheckIn']
        }),
        deleteCheckIn: builder.mutation<{ success: boolean }, { checkInId: number }>({
            query: ({ checkInId }) => ({
                url: `users/check-ins`,
                method: 'DELETE',
                body: {
                    check_in_id: checkInId
                }
            }),
            invalidatesTags: ['CheckIn']
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
    useLogInUserMutation,
    useGetUserDetailsQuery,
    useCreatePetMutation,
    useUpdatePetDetailsMutation,
    useDeletePetMutation,
    useGetUncheckedInPetsQuery,
    useGetAllDogParksQuery,
    useGetDogParkDetailsQuery,
    useGetActiveCheckInsFromDogParkQuery,
    useCreateCheckInsMutation,
    useDeleteCheckInMutation,
    useGetPetsFromUserQuery,
    useGetFavoriteDogParksQuery,
    useCheckFavoriteDogParkStatusQuery,
    useAddFavoriteDogParkMutation,
    useDeleteFavoriteDogParkMutation
} = protectedApiSlice;
