import React from 'react';

import { useGetRecentDogParkCheckInsQuery } from '../../../redux/reducers/protected-api-slice';

import Loader from '../../Loader';

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
            {/* {recentDogParkCheckIns?.map((check_in, idx) => (
                <PetCard key={idx} id={pet.id} name={pet.name} breed={pet.breed} birthday={pet?.birthday} introduction={pet.introduction} />
            ))} */}
        </>
    );
};

export default RecentDogParkCheckInSectionContent;
