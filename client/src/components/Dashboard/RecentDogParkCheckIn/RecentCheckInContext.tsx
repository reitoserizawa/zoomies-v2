import React from 'react';

import { useGetRecentDogParkCheckInsQuery } from '../../../redux/reducers/protected-api-slice';

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
        <>
            {recentDogParkCheckIns?.map((checkIn, idx) => (
                <DogParkCheckInList key={idx} id={checkIn.id} dog_park={checkIn?.dog_park} pet={checkIn.pet} user={checkIn.user} user_owns_check_in={checkIn.user_owns_check_in} active={checkIn.active} />
            ))}
        </>
    );
};

export default RecentDogParkCheckInSectionContent;
