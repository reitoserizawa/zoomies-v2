import React, { useRef } from 'react';
import styled from 'styled-components';

import { Button, Input } from '../../ui/form.styles';
import { P } from '../../ui/heading.styles';
import { FlexContainer } from '../../ui/container.styles';

import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { setIsPetFormModalOpen } from '../../redux/reducers/appSlice';

import useClickOutside from '../../hooks/useClickOutisde';

const ModalContentContainer = styled.div`
    width: 500px;
    min-width: 340px;

    background-color: #fefefe;

    padding: 30px;
    padding-bottom: 48px;

    border: 1px solid #888;
    border-radius: 5px;
`;

const ModalContainer = styled.form`
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

const PetForm: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isPetFormModalOpen = useAppSelector(state => state.app.isPetFormModalOpen);
    const dispatch = useAppDispatch();

    const closeModal = () => dispatch(setIsPetFormModalOpen(false));
    useClickOutside(closeModal, ref);

    if (!isPetFormModalOpen) return null;

    return (
        <ModalContainer>
            <FlexContainer>
                <ModalContentContainer ref={ref}>
                    <P>Name</P>
                    <Input type='text'></Input>
                    <P>Breed</P>
                    <Input type='text'></Input>
                    <P>Birthday</P>
                    <Input type='text'></Input>
                    <P>Headline</P>
                    <Input type='text'></Input>

                    <Button type='submit' $margin='18px 0px 0px 0px'>
                        Add Pet
                    </Button>
                </ModalContentContainer>
            </FlexContainer>
        </ModalContainer>
    );
};

export default PetForm;
