import React from 'react';

import { useGetFavoriteDogParksQuery } from '../../../redux/reducers/protected-api-slice';

import Loader from '../../Loader';
import FavoriteDogParkCard from './FavoriteDogParkCard';
import { FlexContainer } from '../../../ui/container.styles';

const FavoriteDogParkSectionContent: React.FC = () => {
    const { data: favoriteDogParks, isFetching: fetchingFavoriteDogParks } = useGetFavoriteDogParksQuery(null);

    // TODO: add not found error

    if (fetchingFavoriteDogParks && !favoriteDogParks) {
        return (
            <div style={{ height: '350px' }}>
                <Loader />
            </div>
        );
    }

    return (
        <FlexContainer $flexDirection='column' $gap={15} style={{ padding: '16px 16px 16px' }}>
            {favoriteDogParks && favoriteDogParks.length > 0 ? favoriteDogParks?.map((favoriteDogPark, idx) => <FavoriteDogParkCard key={idx} id={favoriteDogPark.id} dog_park_id={favoriteDogPark.dog_park_id} dog_park={favoriteDogPark.dog_park} />) : 'No favorite dog park found'}
        </FlexContainer>
    );
};

export default FavoriteDogParkSectionContent;
