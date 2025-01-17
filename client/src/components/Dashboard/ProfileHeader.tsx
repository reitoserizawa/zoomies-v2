import React from 'react';
import styled from 'styled-components';

import { FlexContainer, ImgContainer, RoundImgContainer } from '../../ui/container.styles';
import { H2, P } from '../../ui/text-tags.styles';

import { blankProfileImg, coverExaple } from '../../images';
import MailIcon from '../../images/icons/MailIcon';

import { useGetUserDetailsQuery } from '../../redux/reducers/protected-api-slice';

const ProfileHeaderTextContainer = styled.div`
    flex: 80%;

    @media (max-width: 600px), (max-height: 480px) and (max-width: 960px) and (orientation: landscape) {
        flex: 0 1 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;

        h2 {
            margin: auto;
            margin-top: 10px;
        }
    }
`;

const ProfileHeader: React.FC = () => {
    const { data: userDetails } = useGetUserDetailsQuery(null);

    return (
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
            <FlexContainer $flexDirection='row' $mobileFlexDirection='column' style={{ marginBottom: '30px' }}>
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
                <ProfileHeaderTextContainer>
                    <H2 $marginLeft={0} $marginBottom={0}>
                        {userDetails ? userDetails?.first_name + ' ' + userDetails?.last_name : 'Unknown name'}
                    </H2>
                    <FlexContainer $flexDirection='row' $justifyContent='flex-start'>
                        <MailIcon />
                        <P fontWeight={500}>{userDetails ? userDetails?.email : 'Unknown email'}</P>
                    </FlexContainer>
                </ProfileHeaderTextContainer>
            </FlexContainer>
        </>
    );
};

export default ProfileHeader;
