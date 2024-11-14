import React, { useCallback, useRef, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import DatePicker from 'react-datepicker';

import { PetState } from '../../states/pet';

import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { togglePetCreateFormModal, togglePetUpdateFormModal } from '../../redux/reducers/appSlice';
import { setPetError } from '../../redux/reducers/petSlice';
import { useCreatePetMutation, useUpdatePetDetailsMutation } from '../../redux/reducers/protected-api-slice';

import 'react-datepicker/dist/react-datepicker.css';
import { Button, Input, InputProps } from '../../ui/form.styles';
import { P } from '../../ui/heading.styles';
import { FlexContainer } from '../../ui/container.styles';

import useClickOutside from '../../hooks/useClickOutisde';

import Error from '../Error';

const ModalContentContainer = styled.div`
    width: 500px;
    min-width: 340px;

    background-color: #fefefe;

    padding: 30px;
    padding-bottom: 48px;

    border: 1px solid #888;
    border-radius: 5px;

    p {
        margin: 16px 16px 16px 8px;
    }
`;

const ModalContainer = styled.div`
    position: fixed;
    z-index: 1;
    left: 0;
    top: 60px;
    width: 100%;
    height: 100%;
    overflow: none;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);

    padding-bottom: 120px;
`;

const DatePickerStyles = createGlobalStyle<InputProps>`
    .react-datepicker-wrapper {
        width: 100%;
    }

    .react-datepicker__input-container input{
        width: 100%;
        border: none;

        padding: 8px;

        border: 1px solid #ccc;
        border-radius: 4px;
    }

    .react-datepicker__input-container &:focus {
        outline: 2px solid ${({ $outlineRed }) => ($outlineRed ? 'red' : '#999')};
    }
`;

const PetForm: React.FC<Partial<PetState> & { toUpdate?: boolean }> = ({ id, name: current_name, breed: current_breed, introduction: current_introduction, birthday: current_birthday, toUpdate }) => {
    const [name, setName] = useState<string>(current_name ? current_name : '');
    const [breed, setBreed] = useState<string>(current_breed ? current_breed : '');
    const [introduction, setIntroduction] = useState<string>(current_introduction ? current_introduction : '');
    const [birthday, setBirthday] = useState<Date | null>(current_birthday ? current_birthday : null);

    const ref = useRef<HTMLDivElement>(null);

    const error = useAppSelector(state => state?.pet?.error);

    const [createPet] = useCreatePetMutation();
    const [updatePetDetails] = useUpdatePetDetailsMutation();

    const dispatch = useAppDispatch();

    const closeModal = useCallback(() => {
        toUpdate ? dispatch(togglePetUpdateFormModal(false)) : dispatch(togglePetCreateFormModal(false));
    }, [toUpdate, dispatch]);

    useClickOutside(closeModal, ref);

    const handleCreateOrUpdatePet = (e: React.FormEvent) => {
        e.preventDefault();

        if (!name) return dispatch(setPetError({ message: 'Name is required' }));
        if (!breed) return dispatch(setPetError({ message: 'Password is required' }));
        if (!introduction) return dispatch(setPetError({ message: 'Introduction is required' }));

        toUpdate ? handleUpdatePet() : handleCreatePet();
    };

    const handleUpdatePet = useCallback(() => {
        updatePetDetails({ id, name, breed, introduction, birthday })
            .unwrap()
            .then(() => {
                closeModal();
            })
            .catch(error => {
                const statusCode = error?.status;
                const message = error?.data?.error?.message;

                dispatch(setPetError({ message, statusCode }));
            });
    }, [id, name, breed, introduction, birthday, updatePetDetails, dispatch, closeModal]);

    const handleCreatePet = useCallback(() => {
        createPet({ name, breed, introduction, birthday })
            .unwrap()
            .then(() => {
                closeModal();
            })
            .catch(error => {
                const statusCode = error?.status;
                const message = error?.data?.error?.message;

                dispatch(setPetError({ message, statusCode }));
            });
    }, [name, breed, introduction, birthday, createPet, dispatch, closeModal]);

    return (
        <ModalContainer>
            <FlexContainer>
                <ModalContentContainer ref={ref}>
                    <form onSubmit={handleCreateOrUpdatePet}>
                        <P>Name*</P>
                        <Input type='text' value={name} onChange={e => setName(e.target.value)} $outlineRed={!name} />
                        <P>Birthday</P>
                        <DatePicker selected={birthday} onChange={date => setBirthday(date)} />
                        <DatePickerStyles $outlineRed={!birthday} />
                        <P>Breed*</P>
                        <Input type='text' value={breed} onChange={e => setBreed(e.target.value)} $outlineRed={!breed} />
                        <P>Introduction*</P>
                        <Input type='text' value={introduction} onChange={e => setIntroduction(e.target.value)} $outlineRed={!introduction} />

                        <Button type='submit' $margin='18px 0px 0px 0px'>
                            {toUpdate ? 'Update Pet' : 'Add Pet'}
                        </Button>
                    </form>
                    {error && <Error message={error.message} />}
                </ModalContentContainer>
            </FlexContainer>
        </ModalContainer>
    );
};

export default PetForm;
