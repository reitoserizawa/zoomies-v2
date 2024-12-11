import React from 'react';

import { FlexContainer } from '../../../ui/container.styles';
import { H2 } from '../../../ui/text-tags.styles';

import FavoriteDogParkCard from './FavoriteDogParkCard';

const FavoriteDogParkSection: React.FC = () => {
    return (
        <>
            <FlexContainer $flexDirection='row' $justifyContent='space-between'>
                <H2>Favorite Park</H2>
            </FlexContainer>
            <hr />
            <FavoriteDogParkCard />
        </>
    );
};

export default FavoriteDogParkSection;
