import React, { useCallback, useRef } from 'react';

import { PetState } from '../../../states/pet';

import { useAppDispatch } from '../../../redux/hooks/hooks';
import { togglePetCreateFormModal, togglePetUpdateFormModal } from '../../../redux/reducers/appSlice';
import { useCreatePetMutation, useUpdatePetDetailsMutation } from '../../../redux/reducers/protected-api-slice';

import 'react-datepicker/dist/react-datepicker.css';
import { Button } from '../../../ui/form.styles';
import { FlexContainer } from '../../../ui/container.styles';
import { ModalContentContainer, ModalContainer } from '../../../ui/modal.styles';

import useClickOutside from '../../../hooks/useClickOutisde';

import requiredValidator from '../../../utils/validators/requiredValidator';

import Form from '../../Form';
import FormInput from '../../Form/FormInput';
import FormDate from '../../Form/FormDate';

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
        if (toUpdate) {
            data.id = id;
            handleUpdatePet(data);
        } else {
            handleCreatePet(data);
        }
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
