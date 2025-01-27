import React, { useCallback, useRef } from 'react';
import styled from 'styled-components';
import moment from 'moment';

import { BorderlineContainer, DesktopFlexBasisContainer, FlexContainer, FullScreenContainer, ImgContainer, TabletFlexBasisContainer } from '../../../ui/container.styles';
import { ScrollableModalContainer } from '../../../ui/modal.styles';
import { H2, H3, P } from '../../../ui/text-tags.styles';

import { dogParkExample } from '../../../images';
import DogIcon from '../../../images/icons/DogIconx';
import HistoryIcon from '../../../images/icons/HistoryIcon';

import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hooks';
import { setDogParkModalId } from '../../../redux/reducers/appSlice';
import { useGetActiveCheckInsFromDogParkQuery, useGetDogParkDetailsQuery } from '../../../redux/reducers/protected-api-slice';

import useClickOutside from '../../../hooks/useClickOutisde';

import ModalHeader from './ModalHeader';
import ModalMap from './ModalMap';
import ModalCheckInListGroup from './ModalCheckInListGroup';
import ModalCheckInForm from './ModalCheckInForm';
import Loader from '../../Loader';

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

    const { data: dogParkDetails, isFetching: fetchingDogParkDetails } = useGetDogParkDetailsQuery({ id: dogParkModalId as number }, { skip: !dogParkModalId });
    const { data: activeCheckInsFromDogPark, isFetching: fetchingActiveCheckIns } = useGetActiveCheckInsFromDogParkQuery({ id: dogParkModalId as number }, { skip: !dogParkModalId });

    const dispatch = useAppDispatch();

    const ref = useRef<HTMLDivElement>(null);

    const closeDogParkModal = useCallback(() => {
        dispatch(setDogParkModalId(undefined));
    }, [dispatch]);

    useClickOutside(closeDogParkModal, ref);

    if (!dogParkModalId) return null;

    if (fetchingDogParkDetails || fetchingActiveCheckIns) {
        return (
            <FullScreenContainer $top={60} $backgroundColor='rgba(0, 0, 0, 0.4)'>
                <ScrollableModalContainer ref={ref}>
                    <Loader />
                </ScrollableModalContainer>
            </FullScreenContainer>
        );
    }

    // TODO: adde not found in case if no dog park details

    return (
        <FullScreenContainer $top={60} $backgroundColor='rgba(0, 0, 0, 0.4)'>
            <ScrollableModalContainer ref={ref}>
                {/* header */}
                <ModalHeader dogParkId={dogParkDetails?.id} closeDogParkModal={closeDogParkModal} />
                <ImgContainer height='500px' $borderRadius='0px'>
                    <img src={dogParkExample.src} alt={dogParkExample.alt}></img>
                </ImgContainer>
                <FlexContainer $gap={30} $flexDirection='row' $alignItems='flex-start' style={{ height: 'fit-content', padding: '30px' }}>
                    {/* main content */}
                    <FlexContainer $alignItems='flex-start' $gap={30} style={{ height: 'fit-content', flexBasis: '70%' }}>
                        <FlexContainer $flexDirection='row' $tabletFlexDirection='column' $gap={30} $justifyContent='space-between' $alignItems='flex-start'>
                            <TabletFlexBasisContainer flexBasis={100}>
                                <DesktopFlexBasisContainer flexBasis={50}>
                                    <FlexContainer $alignItems='flex-start' $gap={10}>
                                        <H2 $noMargin size={2}>
                                            {dogParkDetails?.name}
                                        </H2>
                                        <P $noMargin>{dogParkDetails?.address?.full_address}</P>
                                    </FlexContainer>
                                </DesktopFlexBasisContainer>
                            </TabletFlexBasisContainer>

                            <DesktopFlexBasisContainer flexBasis={50}>
                                <FlexContainer $flexDirection='row' $alignItems='flex-start' $justifyContent='space-between' $gap={20}>
                                    <DesktopFlexBasisContainer flexBasis={40}>
                                        <FlexContainer $gap={10} $alignItems='flex-end'>
                                            <H2 $noMargin style={{ display: 'flex', alignItems: 'center' }}>
                                                {activeCheckInsFromDogPark?.length}
                                                <DogIcon size='32px'></DogIcon>
                                            </H2>
                                            <P $noMargin>Now</P>
                                        </FlexContainer>
                                    </DesktopFlexBasisContainer>
                                    <DesktopFlexBasisContainer flexBasis={60}>
                                        <FlexContainer $gap={10} $alignItems='flex-end'>
                                            <H2 $noMargin style={{ display: 'flex', alignItems: 'center', textWrap: 'nowrap' }}>
                                                {dogParkDetails?.most_recent_check_in ? moment(new Date(dogParkDetails?.most_recent_check_in?.checked_in_at)).fromNow() : '-'} <HistoryIcon size='32px' />
                                            </H2>
                                            <P $noMargin>Last Check-in</P>
                                        </FlexContainer>
                                    </DesktopFlexBasisContainer>
                                </FlexContainer>
                            </DesktopFlexBasisContainer>
                        </FlexContainer>
                        <TagContainer>
                            <TagList>Clean</TagList>
                            <TagList>Big</TagList>
                            <TagList>Separated areas</TagList>
                            <TagList>Waste bin</TagList>
                            <TagList>Poop bags</TagList>
                        </TagContainer>
                        <FlexContainer $alignItems='flex-start' $justifyContent='flex-start' $gap={10}>
                            <H3 $marginLeft={0}>Description</H3>
                            <P $noMargin>This dog park is very clean and big. It has 2 separated areas for small and big puppies. Please make sure to pick up the waste!</P>
                        </FlexContainer>
                        <ModalCheckInListGroup />
                    </FlexContainer>
                    {/* sub content */}
                    <FlexContainer $gap={30} $flexDirection='column' $justifyContent='flex-start' $alignItems='flex-start' style={{ position: 'sticky', top: '90px', height: 'fit-content', flexBasis: '30%' }}>
                        <BorderlineContainer style={{ height: '150px' }}>
                            <FlexContainer>
                                <ModalCheckInForm />
                            </FlexContainer>
                        </BorderlineContainer>
                        <BorderlineContainer>
                            <ModalMap />
                        </BorderlineContainer>
                    </FlexContainer>
                </FlexContainer>
            </ScrollableModalContainer>
        </FullScreenContainer>
    );
};

export default Modal;
