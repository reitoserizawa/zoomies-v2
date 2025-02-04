import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import { FlexContainer } from '../../ui/container.styles';
import { H2, P } from '../../ui/text-tags.styles';

import { dogParkExample } from '../../images';
import DogIcon from '../../images/icons/DogIconx';
import HistoryIcon from '../../images/icons/HistoryIcon';

import { DogParkState } from '../../states/dog-park';

const DogParkCardImageContainer = styled.div`
    height: 100%;
    width: auto;

    img {
        object-fit: cover;

        height: 100%;
        width: 100%;
    }
`;

const DogParkCardTextContainer = styled.div`
    padding: 16px;

    @media (max-width: 600px), (max-height: 480px) and (max-width: 960px) and (orientation: landscape) {
        padding-left: 8px;
    }
`;

const DogParkCard: React.FC<Partial<DogParkState>> = ({ id, name, address, active_check_ins_count, most_recent_check_in }) => {
    const full_address = address?.full_address;

    return (
        <>
            <FlexContainer style={{ flexBasis: '50%' }}>
                <DogParkCardImageContainer>
                    <img src={dogParkExample.src} alt={dogParkExample.alt} />
                </DogParkCardImageContainer>
            </FlexContainer>
            <FlexContainer $flexDirection='column' $justifyContent='flex-start' $alignItems='flex-start' style={{ width: '100%', flexBasis: '50%' }}>
                <div>
                    <H2 size={1.2}>{name}</H2>
                    <P>{full_address}</P>
                </div>

                <FlexContainer $justifyContent='flex-end' $alignItems='flex-start'>
                    <DogParkCardTextContainer style={{ width: '100%' }}>
                        <FlexContainer $flexDirection='row' $justifyContent='flex-start' $alignItems='flex-start' $gap={10} style={{ height: 'min-content' }}>
                            <DogIcon size='16px' />
                            <P $noMargin>Current check-ins: {active_check_ins_count}</P>
                        </FlexContainer>
                        <hr />
                        <FlexContainer $flexDirection='row' $justifyContent='flex-start' $alignItems='flex-start' $gap={10} style={{ height: 'min-content' }}>
                            <HistoryIcon size='16px' />
                            <P $noMargin>Last visit: {most_recent_check_in ? moment(new Date(most_recent_check_in?.checked_in_at as Date)).fromNow() : '-'}</P>
                        </FlexContainer>
                    </DogParkCardTextContainer>
                </FlexContainer>
            </FlexContainer>
        </>
    );
};

export default DogParkCard;
