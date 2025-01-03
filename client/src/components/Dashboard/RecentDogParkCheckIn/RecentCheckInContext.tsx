import React from 'react';

import { useGetRecentDogParkCheckInsQuery } from '../../../redux/reducers/protected-api-slice';

import { FlexContainer } from '../../../ui/container.styles';

import Loader from '../../Loader';
import DogParkCheckInList from '../../DogPark/DogParkCheckInList';

const RecentDogParkCheckInSectionContent: React.FC = () => {
    const { data: recentDogParkCheckIns, isFetching: fetchingRecentDogParkCheckIns } = useGetRecentDogParkCheckInsQuery(null);

    if (fetchingRecentDogParkCheckIns) {
        return (
            <div style={{ height: '350px' }}>
                <Loader />
            </div>
        );
    }

    return (
        <FlexContainer $alignItems='flex-start' $justifyContent='flex-start' $gap='15px' style={{ padding: '16px 16px 16px' }}>
            {recentDogParkCheckIns && recentDogParkCheckIns.length > 0
                ? recentDogParkCheckIns?.map((checkIn, idx) => <DogParkCheckInList key={idx} id={checkIn.id} dog_park={checkIn?.dog_park} pet={checkIn.pet} user={checkIn.user} user_owns_check_in={checkIn.user_owns_check_in} active={checkIn.active} checked_in_at={checkIn.checked_in_at} />)
                : 'No recent check-ins found'}
        </FlexContainer>
    );
};

export default RecentDogParkCheckInSectionContent;
