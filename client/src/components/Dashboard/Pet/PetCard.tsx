import React, { useCallback } from 'react';
import moment from 'moment';

import { PetState } from '../../../states/pet';

import { useDeleteCheckInMutation, useDeletePetMutation } from '../../../redux/reducers/protected-api-slice';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hooks';
import { togglePetUpdateFormModal } from '../../../redux/reducers/appSlice';

import { BorderlineContainer, FlexContainer, RoundImgContainer } from '../../../ui/container.styles';
import { H3, H4, P } from '../../../ui/text-tags.styles';
import { Button } from '../../../ui/form.styles';

import { dogProfileImg } from '../../../images';
import BirthdayCakeIcon from '../../../images/icons/BirthdayCakeIcon';

import EditIcon from '../../../images/icons/EditIcon';
import DeleteIcon from '../../../images/icons/DeleteIcon';

import PetForm from './PetForm';

const PetCard: React.FC<PetState> = ({ id, name, breed, birthday, introduction, active_check_in }) => {
    const dispatch = useAppDispatch();

    const isPetUpdateFormModalOpen = useAppSelector(state => state.app.isPetUpdateFormModalOpen);

    const [deletePet] = useDeletePetMutation();
    const [deleteCheckIn] = useDeleteCheckInMutation();

    const handleDeletePet = useCallback(() => {
        if (window.confirm(`Are you sure you want to delete ${name}?`) && id) {
            deletePet({ id })
                .then(data => {
                    console.log(data);
                })
                .catch(err => console.log({ err }));
        }
    }, [id, name, deletePet]);

    // TODO: error handling
    const handleDeleteCheckIn = useCallback(
        (checkInId?: number) => {
            if (window.confirm(`Are you sure you want to delete the check in at ${active_check_in?.dog_park?.name}?`) && checkInId) {
                deleteCheckIn({ checkInId });
            }
        },
        [active_check_in, deleteCheckIn]
    );

    return (
        <BorderlineContainer>
            <FlexContainer $flexDirection='row' style={{ display: 'inlineBlock', padding: '30px' }}>
                <RoundImgContainer height='200px' width='200px' style={{ flexBasis: '40%' }}>
                    <img src={dogProfileImg.src} alt={dogProfileImg.alt} />
                </RoundImgContainer>
                <div style={{ flexBasis: '60%' }}>
                    <H3 $noMargin style={{ width: 'fit-content', borderBottom: '2px solid gray', paddingBottom: '5px' }}>
                        {name}
                    </H3>
                    <Button $disabled $margin='10px 0px 0px 0px' $opacity={1.0} $width='auto'>
                        {breed}
                    </Button>
                    {birthday && (
                        <FlexContainer $flexDirection='row' $justifyContent='start' $gap={10} style={{ margin: '16px 0px' }}>
                            <BirthdayCakeIcon size='1em' />
                            <H4 $noMargin>{moment(new Date(birthday)).format('LL')}</H4>
                        </FlexContainer>
                    )}
                    <P $noMargin style={{ margin: '0px 0px 20px' }}>
                        {introduction}
                    </P>
                    {active_check_in && (
                        <>
                            <H4 $noMargin style={{ margin: '0px 0px 8px' }}>
                                Current check-in
                            </H4>
                            <FlexContainer $flexDirection='row' $justifyContent='space-between'>
                                <P $noMargin>{active_check_in.dog_park?.name}</P>
                                <Button $width='fit-content' $margin='0px' $borderRadius='30px' onClick={() => handleDeleteCheckIn(active_check_in?.id)} style={{ padding: '0px 15px', background: 'white', color: 'red', border: '1px solid red' }}>
                                    <FlexContainer $flexDirection='row'>
                                        Delete check-in
                                        <DeleteIcon size='1em' color='red' />
                                    </FlexContainer>
                                </Button>
                            </FlexContainer>
                        </>
                    )}

                    <FlexContainer $flexDirection='row' $gap={50} style={{ margin: '30px 0px 0px' }}>
                        <Button $width='150px' $margin='0px' $borderRadius='30px' $edit onClick={() => dispatch(togglePetUpdateFormModal(true))}>
                            <FlexContainer $flexDirection='row' $gap={5}>
                                Edit <EditIcon size='1em' color='white' />
                            </FlexContainer>
                        </Button>
                        <Button $width='150px' $margin='0px' $borderRadius='30px' $delete onClick={handleDeletePet}>
                            <FlexContainer $flexDirection='row' $gap={5}>
                                Delete <DeleteIcon size='1em' color='white' />
                            </FlexContainer>
                        </Button>
                    </FlexContainer>
                </div>
                {isPetUpdateFormModalOpen && <PetForm id={id} name={name} breed={breed} birthday={birthday} introduction={introduction} toUpdate={true} />}
            </FlexContainer>
        </BorderlineContainer>
    );
};

export default PetCard;
