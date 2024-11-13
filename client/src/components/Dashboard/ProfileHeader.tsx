import React from 'react';

import { FlexContainer, ImgContainer, RoundImgContainer } from '../../ui/container.styles';
import { H2, H3 } from '../../ui/heading.styles';

import { blankProfileImg, coverExaple } from '../../images';
import MailIcon from '../../images/icons/MailIcon';

const ProfileHeader: React.FC = () => (
    <>
        <div
            style={{
                width: '100%'
            }}
        >
            <ImgContainer height='300px' width='100%'>
                <img src={coverExaple.src} alt={coverExaple.alt} />
            </ImgContainer>
        </div>
        <FlexContainer $flexDirection='row' style={{ marginBottom: '30px' }}>
            <div
                style={{
                    marginTop: '-100px',
                    flex: '20%'
                }}
            >
                <RoundImgContainer height='200px' width='200px'>
                    <img
                        src={blankProfileImg.src}
                        alt={blankProfileImg.alt}
                        style={{
                            border: '5px solid white'
                        }}
                    />
                </RoundImgContainer>
            </div>
            <div
                style={{
                    flex: '80%'
                }}
            >
                <H2 $margin='16px 0px 0px 0px'>Reito Serizawa</H2>
                <FlexContainer $flexDirection='row' $justifyContent='flex-start'>
                    <MailIcon />
                    <H3 fontWeight={500}>reitoserizawa@gmail.com</H3>
                </FlexContainer>
            </div>
        </FlexContainer>
    </>
);

export default ProfileHeader;
