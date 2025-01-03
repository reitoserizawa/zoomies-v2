import React, { useCallback, useState } from 'react';
import Select, { MultiValue } from 'react-select';
import { createGlobalStyle } from 'styled-components';

import { useCreateCheckInsMutation, useGetUncheckedInPetsQuery } from '../../../redux/reducers/protected-api-slice';
import { useAppSelector } from '../../../redux/hooks/hooks';

import { Button } from '../../../ui/form.styles';

import Loader from '../../Loader';
import ErrorMessage from '../../Error';

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

    // TODO: move this to somewhere else to handle error
    const { data: uncheckedInPets, isFetching: fetchingUncheckedInPets, error: errorGettingUncheckedInPets } = useGetUncheckedInPetsQuery(null);
    const [createCheckIns, { error: errorCreatingCheckIn }] = useCreateCheckInsMutation();

    const handleCheckIn = useCallback(
        async (e: React.FormEvent) => {
            e.preventDefault();

            const petIds = checkInPets.map(pet => pet.value);

            if (!petIds || petIds.length === 0 || !dogParkId) {
                return;
            }

            await createCheckIns({ dogParkId, petIds });
            setCheckInPets([]);
        },
        [createCheckIns, setCheckInPets, checkInPets, dogParkId]
    );

    if (fetchingUncheckedInPets) return <Loader $small />;
    if (errorGettingUncheckedInPets) return <ErrorMessage message={'Error: Cannot load pets'} />;

    const options = (uncheckedInPets || []).map((pet: any) => {
        if (!pet.id) throw new Error(`No pet id found from ${pet.name}`);

        return {
            value: pet.id,
            label: pet.name
        };
    });

    return (
        <form onSubmit={handleCheckIn} style={{ height: 'fit-content', width: '100%' }}>
            {errorCreatingCheckIn && 'data' in errorCreatingCheckIn && <ErrorMessage message={errorCreatingCheckIn.data as string} />}
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
