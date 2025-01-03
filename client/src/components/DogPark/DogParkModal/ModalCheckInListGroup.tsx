import React from 'react';

import { useAppSelector } from '../../../redux/hooks/hooks';
import { useGetActiveCheckInsFromDogParkQuery, useGetPastCheckInsFromDogParkQuery } from '../../../redux/reducers/protected-api-slice';

import { H3, P } from '../../../ui/text-tags.styles';
import { FlexContainer } from '../../../ui/container.styles';

import DogParkCheckInList from '../DogParkCheckInList';

const ModalCheckInListGroup: React.FC = () => {
    const dogParkModalId = useAppSelector(state => state.app.dogParkModalId);

    const { data: activeCheckInsFromDogPark } = useGetActiveCheckInsFromDogParkQuery({ id: dogParkModalId as number }, { skip: !dogParkModalId });
    const { data: pastCheckInsFromDogPark } = useGetPastCheckInsFromDogParkQuery({ id: dogParkModalId as number }, { skip: !dogParkModalId });

    // TODO: add loader

    return (
        <FlexContainer $alignItems='flex-start' $justifyContent='flex-start' $gap='30px'>
            <H3 $margin='16px 0px'>Current check-ins</H3>
            {!activeCheckInsFromDogPark || activeCheckInsFromDogPark.length === 0 ? (
                <P $noMargin>No checked-in puppies at the moment</P>
            ) : (
                activeCheckInsFromDogPark.map((checkIn, idx) => <DogParkCheckInList key={idx} id={checkIn.id} dog_park={checkIn.dog_park} pet={checkIn.pet} user={checkIn.user} user_owns_check_in={checkIn.user_owns_check_in} active={checkIn.active} checked_in_at={checkIn.checked_in_at} />)
            )}
            <H3 $margin='16px 0px'>Past check-ins</H3>
            {!pastCheckInsFromDogPark || pastCheckInsFromDogPark.length === 0 ? (
                <P $noMargin>No checked-in puppies in the past</P>
            ) : (
                pastCheckInsFromDogPark.map((checkIn, idx) => <DogParkCheckInList key={idx} id={checkIn.id} dog_park={checkIn.dog_park} pet={checkIn.pet} user={checkIn.user} user_owns_check_in={checkIn.user_owns_check_in} active={checkIn.active} checked_in_at={checkIn.checked_in_at} />)
            )}
        </FlexContainer>
    );
};

export default ModalCheckInListGroup;
