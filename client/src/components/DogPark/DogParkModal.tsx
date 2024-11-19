import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { FlexContainer, ImgContainer, RoundImgContainer } from '../../ui/container.styles';
import { blankProfileImg, dogParkExample, dogProfileImg } from '../../images';
import FavoriteIcon from '../../images/icons/FavoriteIcon';
import CloseIcon from '../../images/icons/CloseIco';
import { H2, H3, P } from '../../ui/text-tags.styles';
import DogIcon from '../../images/icons/DogIconx';
import HistoryIcon from '../../images/icons/HistoryIcon';
import { Button } from '../../ui/form.styles';
import { Map, Marker } from 'react-map-gl';
import pin from '../../images/pointer.svg';

const MapStyles = createGlobalStyle`
.map-modal {
  width: 200px;
  height: 200px;
  margin: 36px;

  .marker {
    width: 50px;
    height: 50px;
  }
}


`;

const Overlay = styled.div`
    position: fixed;
    z-index: 10;
    left: 0;
    top: 60px;
    width: 100%;
    height: 100%;

    overflow: none;

    background-color: rgba(0, 0, 0, 0.4);
`;

const DogParkModalContainer = styled.div`
    position: fixed;
    top: 60px;
    bottom: 0;
    left: 0;
    right: 0;

    background-color: white;
    opacity: 1;

    overflow-y: scroll;

    height: ft-content;
    width: 1000px;

    margin: auto;
`;

const DogParkModalHeaderContainer = styled.div`
    position: fixed;
    top: 60px;
    bottom: 0;
    left: 0;
    right: 0;

    background-color: rgba(0, 0, 0, 0.7);

    overflow-y: scroll;

    height: 60px;
    width: 1000px;

    padding: 5px 30px;

    margin: 0px auto;
`;

const DogParkModalHeaderAnchor = styled.a`
    cursor: pointer;

    color: white;

    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1em;

    // active

    padding-top: -3px;
    border-bottom: 3px solid green;
    // font-weight: bold;
`;

const DogParkModalFavoriteButton = styled.button`
    all: unset;

    cursor: pointer;
    color: white;

    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1em;
`;

const BorderlineContainer = styled.div`
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

    border-radius: 5px;
`;

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

const DogParkModal: React.FC = () => {
    const [viewport, setViewport] = useState({
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 10
    });

    const token = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

    return (
        <Overlay>
            <DogParkModalContainer>
                <DogParkModalHeaderContainer>
                    <FlexContainer $flexDirection='row' $gap='30px'>
                        <div style={{ flexBasis: '33.33%' }}></div>
                        <FlexContainer $flexDirection='row' $gap='30px' style={{ flexBasis: '33.33%' }}>
                            <DogParkModalHeaderAnchor style={{ flexBasis: '50%' }}>Details</DogParkModalHeaderAnchor>
                            <DogParkModalHeaderAnchor style={{ flexBasis: '50%' }}>Check-ins</DogParkModalHeaderAnchor>
                        </FlexContainer>
                        <FlexContainer $flexDirection='row' $gap='30px' style={{ flexBasis: '33.33%' }}>
                            <DogParkModalFavoriteButton style={{ marginLeft: 'auto' }}>
                                <FavoriteIcon color='white' size='1.75em' />
                            </DogParkModalFavoriteButton>
                            <DogParkModalFavoriteButton>
                                <CloseIcon color='white' size='1.75em' />
                            </DogParkModalFavoriteButton>
                        </FlexContainer>
                    </FlexContainer>
                </DogParkModalHeaderContainer>
                <ImgContainer height='500px' width='100%' $borderRadius='0px'>
                    <img src={dogParkExample.src} alt={dogParkExample.alt}></img>
                </ImgContainer>
                <FlexContainer $gap='30px' $flexDirection='row' $alignItems='flex-start' style={{ height: 'fit-content', padding: '30px' }}>
                    <FlexContainer $alignItems='flex-start' $gap='30px' style={{ height: 'fit-content', flexBasis: '70%' }}>
                        <FlexContainer $flexDirection='row' $justifyContent='space-between' $alignItems='flex-start'>
                            <FlexContainer $alignItems='flex-start' $gap='10px' style={{ flexBasis: '50%' }}>
                                <H2 $noMargin size='2em'>
                                    Dog park name
                                </H2>
                                <P $noMargin>Dog park address</P>
                            </FlexContainer>
                            <div style={{ flexBasis: '50%' }}>
                                <FlexContainer $flexDirection='row' $alignItems='flex-start' $justifyContent='flex-start' $gap='20px'>
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
                            </div>
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

                        {/* current checked in puppies */}
                        <FlexContainer $alignItems='flex-start' $justifyContent='flex-start' $gap='15px'>
                            <H3 $margin='16px 0px'>Current checked-in puppies</H3>
                            <BorderlineContainer>
                                <FlexContainer $flexDirection='row' $justifyContent='space-between' style={{ padding: '5px 15px' }}>
                                    <FlexContainer $flexDirection='row' $justifyContent='flex-start'>
                                        <RoundImgContainer>
                                            <img src={dogProfileImg.src} />
                                        </RoundImgContainer>
                                        <P>Tsuki</P>
                                        <P>Golden Doodle Mini</P>
                                    </FlexContainer>
                                    <FlexContainer $flexDirection='row' $justifyContent='flex-end'>
                                        <P>Owned by Reito</P>
                                        <RoundImgContainer>
                                            <img src={blankProfileImg.src} />
                                        </RoundImgContainer>
                                    </FlexContainer>
                                </FlexContainer>
                            </BorderlineContainer>
                            <BorderlineContainer>
                                <FlexContainer $flexDirection='row' $justifyContent='space-between' style={{ padding: '5px 15px' }}>
                                    <FlexContainer $flexDirection='row' $justifyContent='flex-start'>
                                        <RoundImgContainer>
                                            <img src={dogProfileImg.src} />
                                        </RoundImgContainer>
                                        <P>Tsuki</P>
                                        <P>Golden Doodle Mini</P>
                                    </FlexContainer>
                                    <FlexContainer $flexDirection='row' $justifyContent='flex-end'>
                                        <P>Owned by Reito</P>
                                        <RoundImgContainer>
                                            <img src={blankProfileImg.src} />
                                        </RoundImgContainer>
                                    </FlexContainer>
                                </FlexContainer>
                            </BorderlineContainer>
                            <BorderlineContainer>
                                <FlexContainer $flexDirection='row' $justifyContent='space-between' style={{ padding: '5px 15px' }}>
                                    <FlexContainer $flexDirection='row' $justifyContent='flex-start'>
                                        <RoundImgContainer>
                                            <img src={dogProfileImg.src} />
                                        </RoundImgContainer>
                                        <P>Tsuki</P>
                                        <P>Golden Doodle Mini</P>
                                    </FlexContainer>
                                    <FlexContainer $flexDirection='row' $justifyContent='flex-end'>
                                        <P>Owned by Reito</P>
                                        <RoundImgContainer>
                                            <img src={blankProfileImg.src} />
                                        </RoundImgContainer>
                                    </FlexContainer>
                                </FlexContainer>
                            </BorderlineContainer>
                            <BorderlineContainer>
                                <FlexContainer $flexDirection='row' $justifyContent='space-between' style={{ padding: '5px 15px' }}>
                                    <FlexContainer $flexDirection='row' $justifyContent='flex-start'>
                                        <RoundImgContainer>
                                            <img src={dogProfileImg.src} />
                                        </RoundImgContainer>
                                        <P>Tsuki</P>
                                        <P>Golden Doodle Mini</P>
                                    </FlexContainer>
                                    <FlexContainer $flexDirection='row' $justifyContent='flex-end'>
                                        <P>Owned by Reito</P>
                                        <RoundImgContainer>
                                            <img src={blankProfileImg.src} />
                                        </RoundImgContainer>
                                    </FlexContainer>
                                </FlexContainer>
                            </BorderlineContainer>
                            <BorderlineContainer>
                                <FlexContainer $flexDirection='row' $justifyContent='space-between' style={{ padding: '5px 15px' }}>
                                    <FlexContainer $flexDirection='row' $justifyContent='flex-start'>
                                        <RoundImgContainer>
                                            <img src={dogProfileImg.src} />
                                        </RoundImgContainer>
                                        <P>Tsuki</P>
                                        <P>Golden Doodle Mini</P>
                                    </FlexContainer>
                                    <FlexContainer $flexDirection='row' $justifyContent='flex-end'>
                                        <P>Owned by Reito</P>
                                        <RoundImgContainer>
                                            <img src={blankProfileImg.src} />
                                        </RoundImgContainer>
                                    </FlexContainer>
                                </FlexContainer>
                            </BorderlineContainer>{' '}
                            <BorderlineContainer>
                                <FlexContainer $flexDirection='row' $justifyContent='space-between' style={{ padding: '5px 15px' }}>
                                    <FlexContainer $flexDirection='row' $justifyContent='flex-start'>
                                        <RoundImgContainer>
                                            <img src={dogProfileImg.src} />
                                        </RoundImgContainer>
                                        <P>Tsuki</P>
                                        <P>Golden Doodle Mini</P>
                                    </FlexContainer>
                                    <FlexContainer $flexDirection='row' $justifyContent='flex-end'>
                                        <P>Owned by Reito</P>
                                        <RoundImgContainer>
                                            <img src={blankProfileImg.src} />
                                        </RoundImgContainer>
                                    </FlexContainer>
                                </FlexContainer>
                            </BorderlineContainer>
                            <BorderlineContainer>
                                <FlexContainer $flexDirection='row' $justifyContent='space-between' style={{ padding: '5px 15px' }}>
                                    <FlexContainer $flexDirection='row' $justifyContent='flex-start'>
                                        <RoundImgContainer>
                                            <img src={dogProfileImg.src} />
                                        </RoundImgContainer>
                                        <P>Tsuki</P>
                                        <P>Golden Doodle Mini</P>
                                    </FlexContainer>
                                    <FlexContainer $flexDirection='row' $justifyContent='flex-end'>
                                        <P>Owned by Reito</P>
                                        <RoundImgContainer>
                                            <img src={blankProfileImg.src} />
                                        </RoundImgContainer>
                                    </FlexContainer>
                                </FlexContainer>
                            </BorderlineContainer>{' '}
                            <BorderlineContainer>
                                <FlexContainer $flexDirection='row' $justifyContent='space-between' style={{ padding: '5px 15px' }}>
                                    <FlexContainer $flexDirection='row' $justifyContent='flex-start'>
                                        <RoundImgContainer>
                                            <img src={dogProfileImg.src} />
                                        </RoundImgContainer>
                                        <P>Tsuki</P>
                                        <P>Golden Doodle Mini</P>
                                    </FlexContainer>
                                    <FlexContainer $flexDirection='row' $justifyContent='flex-end'>
                                        <P>Owned by Reito</P>
                                        <RoundImgContainer>
                                            <img src={blankProfileImg.src} />
                                        </RoundImgContainer>
                                    </FlexContainer>
                                </FlexContainer>
                            </BorderlineContainer>{' '}
                            <BorderlineContainer>
                                <FlexContainer $flexDirection='row' $justifyContent='space-between' style={{ padding: '5px 15px' }}>
                                    <FlexContainer $flexDirection='row' $justifyContent='flex-start'>
                                        <RoundImgContainer>
                                            <img src={dogProfileImg.src} />
                                        </RoundImgContainer>
                                        <P>Tsuki</P>
                                        <P>Golden Doodle Mini</P>
                                    </FlexContainer>
                                    <FlexContainer $flexDirection='row' $justifyContent='flex-end'>
                                        <P>Owned by Reito</P>
                                        <RoundImgContainer>
                                            <img src={blankProfileImg.src} />
                                        </RoundImgContainer>
                                    </FlexContainer>
                                </FlexContainer>
                            </BorderlineContainer>{' '}
                            <BorderlineContainer>
                                <FlexContainer $flexDirection='row' $justifyContent='space-between' style={{ padding: '5px 15px' }}>
                                    <FlexContainer $flexDirection='row' $justifyContent='flex-start'>
                                        <RoundImgContainer>
                                            <img src={dogProfileImg.src} />
                                        </RoundImgContainer>
                                        <P>Tsuki</P>
                                        <P>Golden Doodle Mini</P>
                                    </FlexContainer>
                                    <FlexContainer $flexDirection='row' $justifyContent='flex-end'>
                                        <P>Owned by Reito</P>
                                        <RoundImgContainer>
                                            <img src={blankProfileImg.src} />
                                        </RoundImgContainer>
                                    </FlexContainer>
                                </FlexContainer>
                            </BorderlineContainer>{' '}
                            <BorderlineContainer>
                                <FlexContainer $flexDirection='row' $justifyContent='space-between' style={{ padding: '5px 15px' }}>
                                    <FlexContainer $flexDirection='row' $justifyContent='flex-start'>
                                        <RoundImgContainer>
                                            <img src={dogProfileImg.src} />
                                        </RoundImgContainer>
                                        <P>Tsuki</P>
                                        <P>Golden Doodle Mini</P>
                                    </FlexContainer>
                                    <FlexContainer $flexDirection='row' $justifyContent='flex-end'>
                                        <P>Owned by Reito</P>
                                        <RoundImgContainer>
                                            <img src={blankProfileImg.src} />
                                        </RoundImgContainer>
                                    </FlexContainer>
                                </FlexContainer>
                            </BorderlineContainer>{' '}
                            <BorderlineContainer>
                                <FlexContainer $flexDirection='row' $justifyContent='space-between' style={{ padding: '5px 15px' }}>
                                    <FlexContainer $flexDirection='row' $justifyContent='flex-start'>
                                        <RoundImgContainer>
                                            <img src={dogProfileImg.src} />
                                        </RoundImgContainer>
                                        <P>Tsuki</P>
                                        <P>Golden Doodle Mini</P>
                                    </FlexContainer>
                                    <FlexContainer $flexDirection='row' $justifyContent='flex-end'>
                                        <P>Owned by Reito</P>
                                        <RoundImgContainer>
                                            <img src={blankProfileImg.src} />
                                        </RoundImgContainer>
                                    </FlexContainer>
                                </FlexContainer>
                            </BorderlineContainer>
                        </FlexContainer>
                    </FlexContainer>
                    <div style={{ position: 'sticky', top: '90px', height: 'fit-content' }}>
                        <FlexContainer $gap='30px' $flexDirection='column' $justifyContent='flex-start' $alignItems='flex-start' style={{ height: '100%' }}>
                            <BorderlineContainer>
                                <Button $width='200px' $margin='32px auto'>
                                    Check in here
                                </Button>
                            </BorderlineContainer>
                            <BorderlineContainer>
                                <div className='map-modal'>
                                    <Map {...viewport} mapStyle='mapbox://styles/mapbox/streets-v12' mapboxAccessToken={token}>
                                        <Marker longitude={viewport.longitude} latitude={viewport.latitude}>
                                            <img src={pin} alt='pin' />
                                        </Marker>
                                    </Map>
                                </div>
                            </BorderlineContainer>
                        </FlexContainer>
                    </div>
                </FlexContainer>
                <MapStyles />
            </DogParkModalContainer>
        </Overlay>
    );
};

export default DogParkModal;
