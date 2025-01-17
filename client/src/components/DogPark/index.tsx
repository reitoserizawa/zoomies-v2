import React from 'react';
import styled from 'styled-components';

import { Container, FlexContainer, GridContainer } from '../../ui/container.styles';
import { Input } from '../../ui/form.styles';

import SearchIcon from '../../images/icons/SearchIcon';

import { useGetAllDogParksQuery } from '../../redux/reducers/protected-api-slice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { setDogParkModalId } from '../../redux/reducers/appSlice';

import DogParkCard from './DogParkCard';
import Map from './Map';
import DogParkModal from './DogParkModal';
import FullScreenLoader from '../FullScreenLoader';

const DogParkCardContainer = styled.div`
    min-height: 450px;
    height: 100%;
    width: 100%;

    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

    cursor: pointer;

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
`;

const DogParkCardListContainer = styled.div`
    flex-basis: 40%;
    overflow-y: scroll;
    max-height: calc(100vh - 138px);
    padding: 3px;
    overflow-x: hidden;

    @media (max-width: 1000px) {
        padding: 3px;
        flex-basis: 100%;
        max-height: auto;
    }
`;

const MapContainer = styled.div`
    align-self: flex-start;
    justify-self: flex-start;
    flex-basis: 60%;
    overflow-y: hidden;
    padding-left: 5px;

    @media (max-width: 1000px) {
        display: none;
    }
`;

const DogPark: React.FC = () => {
    const dispatch = useAppDispatch();
    const dogParkModalId = useAppSelector(state => state.app.dogParkModalId);
    const { data, isFetching: fetchingAllDogParks } = useGetAllDogParksQuery(null);

    if (fetchingAllDogParks) return <FullScreenLoader text='Loading Dog Parks' />;

    return (
        <Container>
            <FlexContainer $flexDirection='row' style={{ height: '60px', padding: '15px 0px' }}>
                <Input type='text' style={{ width: '500px', paddingRight: '32px' }} />
                <div style={{ height: '20px', width: '20px', marginLeft: '-28px' }}>
                    <SearchIcon size='20px' />
                </div>
            </FlexContainer>
            <FlexContainer $flexDirection='row' $gap={20} style={{ paddingBottom: '15px' }}>
                <MapContainer>
                    <Map />
                </MapContainer>
                <DogParkCardListContainer>
                    <GridContainer>
                        {data?.map(({ id, name, address, check_ins, active_check_ins_count, most_recent_check_in }, idx) => (
                            <DogParkCardContainer key={idx} onClick={() => dispatch(setDogParkModalId(id))}>
                                <FlexContainer $flexDirection='column'>
                                    <DogParkCard id={id} name={name} address={address} check_ins={check_ins} active_check_ins_count={active_check_ins_count} most_recent_check_in={most_recent_check_in} />
                                </FlexContainer>
                            </DogParkCardContainer>
                        ))}
                    </GridContainer>
                </DogParkCardListContainer>
            </FlexContainer>
            {dogParkModalId && <DogParkModal />}
        </Container>
    );
};

export default DogPark;
