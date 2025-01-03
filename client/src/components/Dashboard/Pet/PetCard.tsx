import React, { useCallback } from 'react';
import moment from 'moment';

import { PetState } from '../../../states/pet';

import { useDeletePetMutation } from '../../../redux/reducers/protected-api-slice';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hooks';
import { togglePetUpdateFormModal } from '../../../redux/reducers/appSlice';

import { FlexContainer, RoundImgContainer } from '../../../ui/container.styles';
import { H3, H4, P } from '../../../ui/text-tags.styles';
import { Button } from '../../../ui/form.styles';

import { dogProfileImg } from '../../../images';
import BirthdayCakeIcon from '../../../images/icons/BirthdayCakeIcon';

import EditIcon from '../../../images/icons/EditIcon';
import DeleteIcon from '../../../images/icons/DeleteIcon';

import PetForm from './PetForm';

const PetCard: React.FC<PetState> = ({ id, name, breed, birthday, introduction }) => {
    const dispatch = useAppDispatch();

    const isPetUpdateFormModalOpen = useAppSelector(state => state.app.isPetUpdateFormModalOpen);

    const [deletePet] = useDeletePetMutation();

    const handleDeletePet = useCallback(() => {
        if (window.confirm(`Are you sure you want to delete ${name}?`) && id) {
            deletePet({ id })
                .then(data => {
                    console.log(data);
                })
                .catch(err => console.log({ err }));
        }
    }, [id, name, deletePet]);

    return (
        <FlexContainer style={{ marginTop: '30px', marginBottom: '30px' }}>
            <RoundImgContainer height='150px' width='150px'>
                <img src={dogProfileImg.src} alt={dogProfileImg.alt} />
            </RoundImgContainer>
            <Button $disabled $margin='10px 0px 0px 0px' $opacity={1.0} $width='auto'>
                {breed}
            </Button>
            <H3 size='1.3em'>{name}</H3>
            {birthday && (
                <FlexContainer $flexDirection='row' $gap='10px' style={{ marginBottom: '16px' }}>
                    <BirthdayCakeIcon size='1em' />
                    <H4 $noMargin>{moment(new Date(birthday)).format('LL')}</H4>
                </FlexContainer>
            )}
            <P $noMargin style={{ marginBottom: '16px' }}>
                {introduction}
            </P>
            <FlexContainer $flexDirection='row' $gap='50px'>
                <Button $width='150px' $margin='0px' $borderRadius='30px' $edit onClick={() => dispatch(togglePetUpdateFormModal(true))}>
                    <FlexContainer $flexDirection='row' $gap='5px'>
                        Edit <EditIcon size='1em' color='white' />
                    </FlexContainer>
                </Button>
                <Button $width='150px' $margin='0px' $borderRadius='30px' $delete onClick={handleDeletePet}>
                    <FlexContainer $flexDirection='row' $gap='5px'>
                        Delete <DeleteIcon size='1em' color='white' />
                    </FlexContainer>
                </Button>
            </FlexContainer>
            {isPetUpdateFormModalOpen && <PetForm id={id} name={name} breed={breed} birthday={birthday} introduction={introduction} toUpdate={true} />}
        </FlexContainer>
    );
};

export default PetCard;
