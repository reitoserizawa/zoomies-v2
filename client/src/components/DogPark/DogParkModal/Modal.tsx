import React, { useCallback, useRef } from 'react';
import styled from 'styled-components';

import { BorderlineContainer, FlexContainer, FullScreenContainer, ImgContainer, ModalContainer } from '../../../ui/container.styles';
import { H2, H3, P } from '../../../ui/text-tags.styles';
import { Button } from '../../../ui/form.styles';

import { dogParkExample } from '../../../images';
import DogIcon from '../../../images/icons/DogIconx';
import HistoryIcon from '../../../images/icons/HistoryIcon';

import { useAppDispatch } from '../../../redux/hooks/hooks';
import { setDogParkModalId } from '../../../redux/reducers/appSlice';

import useClickOutside from '../../../hooks/useClickOutisde';

import DogParkModalHeader from './ModalHeader';
import DogParkModalMap from './ModalMap';
import DogParkModalCheckInList from './ModalCheckInList';

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
    const dispatch = useAppDispatch();

    const ref = useRef<HTMLDivElement>(null);

    const closeDogParkModal = useCallback(() => {
        dispatch(setDogParkModalId(undefined));
    }, [dispatch]);

    useClickOutside(closeDogParkModal, ref);

    return (
        <FullScreenContainer $backgroundColor='rgba(0, 0, 0, 0.4)'>
            <ModalContainer ref={ref}>
                {/* header */}
                <DogParkModalHeader closeDogParkModal={closeDogParkModal} />
                <ImgContainer height='500px' width='100%' $borderRadius='0px'>
                    <img src={dogParkExample.src} alt={dogParkExample.alt}></img>
                </ImgContainer>
                <FlexContainer $gap='30px' $flexDirection='row' $alignItems='flex-start' style={{ height: 'fit-content', padding: '30px' }}>
                    {/* main content */}
                    <FlexContainer $alignItems='flex-start' $gap='30px' style={{ height: 'fit-content', flexBasis: '70%' }}>
                        <FlexContainer $flexDirection='row' $justifyContent='space-between' $alignItems='flex-start'>
                            <FlexContainer $alignItems='flex-start' $gap='10px' style={{ flexBasis: '50%' }}>
                                <H2 $noMargin size='2em'>
                                    Dog park name
                                </H2>
                                <P $noMargin>Dog park address</P>
                            </FlexContainer>
                            <FlexContainer $flexDirection='row' $alignItems='flex-start' $justifyContent='flex-start' $gap='20px' style={{ flexBasis: '50%' }}>
                                <FlexContainer $gap='10px' $alignItems='flex-end' style={{ flexBasis: '50%' }}>
                                    <H2 $noMargin size='2em' style={{ display: 'flex', alignItems: 'center' }}>
                                        10<DogIcon size='32px'></DogIcon>
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
                            <DogParkModalCheckInList />
                        </FlexContainer>
                    </FlexContainer>
                    {/* sub content */}
                    <FlexContainer $gap='30px' $flexDirection='column' $justifyContent='flex-start' $alignItems='flex-start' style={{ position: 'sticky', top: '90px', height: 'fit-content', flexBasis: '30%' }}>
                        <BorderlineContainer>
                            <Button $width='200px' $margin='32px auto'>
                                Check in here
                            </Button>
                        </BorderlineContainer>
                        <BorderlineContainer>
                            <DogParkModalMap />
                        </BorderlineContainer>
                    </FlexContainer>
                </FlexContainer>
            </ModalContainer>
        </FullScreenContainer>
    );
};

export default Modal;
