import React from 'react';
import { Container, FlexContainer, GridContainer } from '../../ui/container.styles';
import { Input } from '../../ui/form.styles';
import SearchIcon from '../../images/icons/SearchIcon';
import DogParkCard from './DogParkCard';

const DogPark: React.FC = () => {
    return (
        <Container>
            <FlexContainer $flexDirection='row' style={{ paddingTop: '15px' }}>
                <Input type='text' style={{ width: '500px', paddingRight: '32px' }} />
                <div style={{ height: '20px', width: '20px', marginLeft: '-28px' }}>
                    <SearchIcon size='20px' />
                </div>
            </FlexContainer>
            <GridContainer>
                <DogParkCard />
                <DogParkCard />
                <DogParkCard />
            </GridContainer>
        </Container>
    );
};

export default DogPark;
