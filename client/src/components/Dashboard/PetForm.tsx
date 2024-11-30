import React, { useCallback, useRef } from 'react';
import styled from 'styled-components';

import { PetState } from '../../states/pet';

import { useAppDispatch } from '../../redux/hooks/hooks';
import { togglePetCreateFormModal, togglePetUpdateFormModal } from '../../redux/reducers/appSlice';
import { useCreatePetMutation, useUpdatePetDetailsMutation } from '../../redux/reducers/protected-api-slice';

import 'react-datepicker/dist/react-datepicker.css';
import { Button } from '../../ui/form.styles';
import { FlexContainer } from '../../ui/container.styles';

import useClickOutside from '../../hooks/useClickOutisde';
import Form from '../Form';
import FormInput from '../Form/FormInput';
import FormDate from '../Form/FormDate';

const requiredValidator = (val: string) => {
    if (!val) {
        return ['This field is required'];
    }

    return [];
};

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

const PetForm: React.FC<Partial<PetState> & { toUpdate?: boolean }> = ({ id, name: current_name, breed: current_breed, introduction: current_introduction, birthday: current_birthday, toUpdate }) => {
    const initialValues: Partial<PetState> = {
        name: current_name ? current_name : '',
        breed: current_breed ? current_breed : '',
        introduction: current_introduction ? current_introduction : '',
        birthday: current_birthday ? current_birthday : null
    };

    const ref = useRef<HTMLDivElement>(null);

    const [createPet] = useCreatePetMutation();
    const [updatePetDetails] = useUpdatePetDetailsMutation();

    const dispatch = useAppDispatch();

    const closeModal = useCallback(() => {
        dispatch(togglePetUpdateFormModal(false));
        dispatch(togglePetCreateFormModal(false));
    }, [dispatch]);

    useClickOutside(closeModal, ref);

    const handleCreateOrUpdatePet = (data: Partial<PetState>) => {
        toUpdate ? handleUpdatePet(data) : handleCreatePet(data);
    };

    const handleUpdatePet = useCallback(
        (data: Partial<PetState>) => {
            updatePetDetails(data)
                .unwrap()
                .then(() => {
                    closeModal();
                })
                .catch(error => {
                    // const statusCode = error?.status;
                    // const message = error?.data?.error?.message;
                    // dispatch(setPetError({ message, statusCode }));
                });
        },
        [updatePetDetails, closeModal]
    );

    const handleCreatePet = useCallback(
        (data: Partial<PetState>) => {
            createPet(data)
                .unwrap()
                .then(() => {
                    closeModal();
                })
                .catch(error => {
                    // const statusCode = error?.status;
                    // const message = error?.data?.error?.message;
                    // dispatch(setPetError({ message, statusCode }));
                });
        },
        [createPet, closeModal]
    );

    return (
        <ModalContainer>
            <FlexContainer>
                <ModalContentContainer ref={ref}>
                    <Form<Partial<PetState>> initialValues={initialValues} onSubmit={handleCreateOrUpdatePet}>
                        <FormInput<Partial<PetState>> name='name' label='Name*' validators={[requiredValidator]} />
                        <FormDate<Partial<PetState>> name='birthday' label='Birthday' />
                        <FormInput<Partial<PetState>> name='breed' label='Breed*' validators={[requiredValidator]} />
                        <FormInput<Partial<PetState>> name='introduction' label='Introduction*' validators={[requiredValidator]} />
                        <Button type='submit' $margin='18px 0px 0px 0px'>
                            {toUpdate ? 'Update Pet' : 'Add Pet'}
                        </Button>
                    </Form>
                    {/* TODO: error handlingt */}
                </ModalContentContainer>
            </FlexContainer>
        </ModalContainer>
    );
};

export default PetForm;
