import React from 'react';

import { FlexContainer } from '../../../ui/container.styles';
import { H2 } from '../../../ui/text-tags.styles';
import RecentDogParkCheckInSectionContent from './RecentCheckInContext';

const RecentDogParkCheckInSection: React.FC = () => {
    return (
        <>
            <FlexContainer $flexDirection='row' $justifyContent='space-between'>
                <H2>Recent Check-in</H2>
            </FlexContainer>
            <hr />
            <RecentDogParkCheckInSectionContent />
        </>
    );
};

export default RecentDogParkCheckInSection;
