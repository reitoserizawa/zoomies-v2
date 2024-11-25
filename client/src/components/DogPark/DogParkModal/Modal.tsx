import React, { useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';

import { BorderlineContainer, FlexContainer, FullScreenContainer, ImgContainer, ModalContainer } from '../../../ui/container.styles';
import { H2, H3, P } from '../../../ui/text-tags.styles';

import { dogParkExample } from '../../../images';
import DogIcon from '../../../images/icons/DogIconx';
import HistoryIcon from '../../../images/icons/HistoryIcon';

import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hooks';
import { setDogParkModalId } from '../../../redux/reducers/appSlice';

import { useGetActiveCheckInsFromDogParkQuery, useGetDogParkDetailsQuery } from '../../../redux/reducers/protected-api-slice';
import { setActiveCheckIns, setDogParkDetails } from '../../../redux/reducers/dogParkSlice';

import useClickOutside from '../../../hooks/useClickOutisde';

import ModalHeader from './ModalHeader';
import ModalMap from './ModalMap';
import ModalCheckInList from './ModalCheckInList';
import ModalCheckInForm from './ModalCheckInForm';

const TagContainer = styled.ul`
    display: block;
    list-style-type: disc;

    margin: 0;
    padding: 0;
`;

const TagList = styled.li`
    display: inline-block;
    background-color: #999;
    color: white;
    border-radius: 3px;
    padding: 3px 10px;

    margin-right: 10px;
`;

const Modal: React.FC = () => {
    const dogParkModalId = useAppSelector(state => state.app.dogParkModalId);
    const dogParkDetails = useAppSelector(state => state.dogPark);

    const dispatch = useAppDispatch();

    const ref = useRef<HTMLDivElement>(null);

    // TODO: add a loader
    const { data: dogParkData } = useGetDogParkDetailsQuery({ id: dogParkModalId as number }, { skip: !dogParkModalId });
    // TODO: add a loader
    const { data: activeCheckInsFromDogPark } = useGetActiveCheckInsFromDogParkQuery({ id: dogParkModalId as number }, { skip: !dogParkModalId });

    const closeDogParkModal = useCallback(() => {
        dispatch(setDogParkModalId(undefined));
    }, [dispatch]);

    useClickOutside(closeDogParkModal, ref);

    useEffect(() => {
        dispatch(setDogParkDetails(dogParkData));
        dispatch(setActiveCheckIns(activeCheckInsFromDogPark));
    }, [dispatch, dogParkData, activeCheckInsFromDogPark]);

    if (!dogParkModalId) return null;

    return (
        <FullScreenContainer $top={60} $backgroundColor='rgba(0, 0, 0, 0.4)'>
            <ModalContainer ref={ref}>
                {/* header */}
                <ModalHeader closeDogParkModal={closeDogParkModal} />
                <ImgContainer height='500px' width='100%' $borderRadius='0px'>
                    <img src={dogParkExample.src} alt={dogParkExample.alt}></img>
                </ImgContainer>
                <FlexContainer $gap='30px' $flexDirection='row' $alignItems='flex-start' style={{ height: 'fit-content', padding: '30px' }}>
                    {/* main content */}
                    <FlexContainer $alignItems='flex-start' $gap='30px' style={{ height: 'fit-content', flexBasis: '70%' }}>
                        <FlexContainer $flexDirection='row' $justifyContent='space-between' $alignItems='flex-start'>
                            <FlexContainer $alignItems='flex-start' $gap='10px' style={{ flexBasis: '50%' }}>
                                <H2 $noMargin size='2em'>
                                    {dogParkDetails?.name}
                                </H2>
                                <P $noMargin>{dogParkDetails?.address}</P>
                            </FlexContainer>
                            <FlexContainer $flexDirection='row' $alignItems='flex-start' $justifyContent='flex-start' $gap='20px' style={{ flexBasis: '50%' }}>
                                <FlexContainer $gap='10px' $alignItems='flex-end' style={{ flexBasis: '50%' }}>
                                    <H2 $noMargin size='2em' style={{ display: 'flex', alignItems: 'center' }}>
                                        {dogParkDetails?.active_check_ins?.length}
                                        <DogIcon size='32px'></DogIcon>
                                    </H2>
                                    <P $noMargin>Now</P>
                                </FlexContainer>
                                <FlexContainer $gap='10px' $alignItems='flex-end' style={{ flexBasis: '50%' }}>
                                    <H2 $noMargin size='2em' style={{ display: 'flex', alignItems: 'center' }}>
                                        3m <HistoryIcon size='32px' />
                                    </H2>
                                    <P $noMargin>Last Check-in</P>
                                </FlexContainer>
                            </FlexContainer>
                        </FlexContainer>
                        <TagContainer>
                            <TagList>Clean</TagList>
                            <TagList>Big</TagList>
                            <TagList>Separated areas</TagList>
                            <TagList>Waste bin</TagList>
                            <TagList>Poop bags</TagList>
                        </TagContainer>
                        <FlexContainer $alignItems='flex-start' $justifyContent='flex-start' $gap='10px'>
                            <H3 $margin='16px 0px'>Description</H3>
                            <P $noMargin>This dog park is very clean and big. It has 2 separated areas for small and big puppies. Please make sure to pick up the waste!</P>
                        </FlexContainer>
                        <FlexContainer $alignItems='flex-start' $justifyContent='flex-start' $gap='15px'>
                            <H3 $margin='16px 0px'>Current checked-in puppies</H3>
                            <ModalCheckInList />
                        </FlexContainer>
                    </FlexContainer>
                    {/* sub content */}
                    <FlexContainer $gap='30px' $flexDirection='column' $justifyContent='flex-start' $alignItems='flex-start' style={{ position: 'sticky', top: '90px', height: 'fit-content', flexBasis: '30%' }}>
                        <BorderlineContainer>
                            <ModalCheckInForm />
                        </BorderlineContainer>
                        <BorderlineContainer>
                            <ModalMap />
                        </BorderlineContainer>
                    </FlexContainer>
                </FlexContainer>
            </ModalContainer>
        </FullScreenContainer>
    );
};

export default Modal;
