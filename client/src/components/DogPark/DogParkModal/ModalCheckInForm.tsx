import React, { useState } from 'react';
import Select, { MultiValue } from 'react-select';
import { createGlobalStyle } from 'styled-components';
import { useCreateCheckInsMutation, useGetUncheckedInPetsQuery } from '../../../redux/reducers/protected-api-slice';
import { Button } from '../../../ui/form.styles';
import { useAppSelector } from '../../../redux/hooks/hooks';
import Loader from '../../Loader';
import { FlexContainer } from '../../../ui/container.styles';

const ReactSelectStyles = createGlobalStyle`
    :nth-child(1 of div.css-1xc3v61-indicatorContainer) {
        display: none;
    }

    :nth-child(1 of div.css-15lsz6c-indicatorContainer) {
        display: none;
    }

    .css-1u9des2-indicatorSeparator {
        display: none;
    }
`;

const ModalCheckInForm: React.FC = () => {
    const [checkInPets, setCheckInPets] = useState<MultiValue<{ value: number; label: string }>>([]);

    const dogParkId = useAppSelector(state => state.app.dogParkModalId);

    const { data: uncheckedInPets, isFetching: fetchingUncheckedInPets } = useGetUncheckedInPetsQuery(null);
    const [createCheckIns] = useCreateCheckInsMutation();

    // TODO: handle error
    const options = (uncheckedInPets || []).map(pet => {
        if (!pet.id) throw new Error(`No pet id found from ${pet.name}`);

        return {
            value: pet.id,
            label: pet.name
        };
    });

    // TODO: handle error
    const handleCheckIn = (e: React.FormEvent) => {
        e.preventDefault();

        const petIds = checkInPets.map(pet => pet.value);

        if (!petIds || petIds.length === 0 || !dogParkId) {
            return;
        }

        createCheckIns({ dogParkId, petIds });
        setCheckInPets([]);
    };

    if (fetchingUncheckedInPets) return <Loader $small />;

    return (
        <form onSubmit={handleCheckIn} style={{ height: 'fit-content', width: '100%' }}>
            <div style={{ padding: '10px' }}>
                <Select maxMenuHeight={300} closeMenuOnSelect={true} defaultValue={checkInPets} isMulti options={options} value={checkInPets} onChange={setCheckInPets} />
                <ReactSelectStyles />
            </div>
            <Button type='submit' $width='200px' $margin='10px auto'>
                Check in here
            </Button>
        </form>
    );
};

export default ModalCheckInForm;
