import React from 'react';

import { useGetFavoriteDogParksQuery } from '../../../redux/reducers/protected-api-slice';

import Loader from '../../Loader';
import FavoriteDogParkCard from './FavoriteDogParkCard';

const FavoriteDogParkSectionContent: React.FC = () => {
    const { data: favoriteDogParks, isFetching: fetchingFavoriteDogParks } = useGetFavoriteDogParksQuery(null);

    if (fetchingFavoriteDogParks && !favoriteDogParks) {
        return (
            <div style={{ height: '350px' }}>
                <Loader />
            </div>
        );
    }

    return (
        <div style={{ padding: '0px 16px 16px' }}>
            {favoriteDogParks?.map((favoriteDogPark, idx) => (
                <FavoriteDogParkCard key={idx} id={favoriteDogPark.id} dog_park_id={favoriteDogPark.dog_park_id} dog_park={favoriteDogPark.dog_park} />
            ))}
        </div>
    );
};

export default FavoriteDogParkSectionContent;
