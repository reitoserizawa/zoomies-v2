import React from 'react';
import { Container, FlexContainer, GridContainer } from '../../ui/container.styles';
import { Input } from '../../ui/form.styles';
import SearchIcon from '../../images/icons/SearchIcon';
import DogParkCard from './DogParkCard';
import { useGetAllDogParksQuery } from '../../redux/reducers/protected-api-slice';
import Map from './Map';
import styled from 'styled-components';
import DogParkModal from './DogParkModal';

const DogParkCardListContainer = styled.div`
    min-height: 300px;

    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

    cursor: pointer;

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
`;

const DogPark: React.FC = () => {
    const { data } = useGetAllDogParksQuery(null);

    if (!data) return null;

    return (
        <Container>
            <FlexContainer $flexDirection='row' style={{ height: '60px', padding: '15px 0px' }}>
                <Input type='text' style={{ width: '500px', paddingRight: '32px' }} />
                <div style={{ height: '20px', width: '20px', marginLeft: '-28px' }}>
                    <SearchIcon size='20px' />
                </div>
            </FlexContainer>
            <FlexContainer $flexDirection='row' $gap='20px' style={{ paddingBottom: '15px' }}>
                <div style={{ alignSelf: 'flex-start', justifySelf: 'flex-start', flexBasis: '50%', overflowY: 'hidden', paddingLeft: '5px' }}>
                    <Map />
                </div>
                <div style={{ flexBasis: '50%', overflowY: 'scroll', height: 'calc(100vh - 138px)', padding: '5px', overflowX: 'hidden' }}>
                    <GridContainer>
                        {data.map(({ id, name, address, check_ins }, idx) => (
                            <DogParkCardListContainer>
                                <DogParkCard key={idx} id={id} name={name} address={address} check_ins={check_ins} />
                            </DogParkCardListContainer>
                        ))}
                    </GridContainer>
                </div>
            </FlexContainer>
            <DogParkModal />
        </Container>
    );
};

export default DogPark;
