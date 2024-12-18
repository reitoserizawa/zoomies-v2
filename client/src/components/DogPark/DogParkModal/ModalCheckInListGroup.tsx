import React from 'react';

import { useAppSelector } from '../../../redux/hooks/hooks';
import { useGetActiveCheckInsFromDogParkQuery } from '../../../redux/reducers/protected-api-slice';

import DogParkCheckInList from '../DogParkCheckInList';

const ModalCheckInListGroup: React.FC = () => {
    const dogParkModalId = useAppSelector(state => state.app.dogParkModalId);

    const { data: activeCheckInsFromDogPark } = useGetActiveCheckInsFromDogParkQuery({ id: dogParkModalId as number }, { skip: !dogParkModalId });

    if (!activeCheckInsFromDogPark || activeCheckInsFromDogPark.length === 0) {
        return null;
    }

    return (
        <>
            {activeCheckInsFromDogPark.map((checkIn, idx) => (
                <DogParkCheckInList key={idx} id={checkIn.id} dog_park={checkIn.dog_park} pet={checkIn.pet} user={checkIn.user} user_owns_check_in={checkIn.user_owns_check_in} active={checkIn.active} />
            ))}
        </>
    );
};

export default ModalCheckInListGroup;
