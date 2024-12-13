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

const DogParkCardListContainer = styled.div`
    min-height: 300px;
    height: 100%;
    width: 100%;

    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

    cursor: pointer;

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
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
            <FlexContainer $flexDirection='row' $gap='20px' style={{ paddingBottom: '15px' }}>
                <div style={{ alignSelf: 'flex-start', justifySelf: 'flex-start', flexBasis: '60%', overflowY: 'hidden', paddingLeft: '5px' }}>
                    <Map />
                </div>
                <div style={{ flexBasis: '40%', overflowY: 'scroll', maxHeight: 'calc(100vh - 138px)', padding: '3px', overflowX: 'hidden' }}>
                    <GridContainer>
                        {data?.map(({ id, name, address, check_ins, active_check_ins_count }, idx) => (
                            <DogParkCardListContainer key={idx} onClick={() => dispatch(setDogParkModalId(id))}>
                                <FlexContainer $flexDirection='column'>
                                    <DogParkCard id={id} name={name} address={address} check_ins={check_ins} active_check_ins_count={active_check_ins_count} />
                                </FlexContainer>
                            </DogParkCardListContainer>
                        ))}
                    </GridContainer>
                </div>
            </FlexContainer>
            {dogParkModalId && <DogParkModal />}
        </Container>
    );
};

export default DogPark;
