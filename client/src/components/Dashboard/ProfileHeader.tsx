import React from 'react';

import { FlexContainer, ImgContainer, RoundImgContainer } from '../../ui/container.styles';
import { H2, H3, P } from '../../ui/text-tags.styles';

import { blankProfileImg, coverExaple } from '../../images';
import MailIcon from '../../images/icons/MailIcon';
import { useGetUserDetailsQuery } from '../../redux/reducers/protected-api-slice';

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
                    <H2 $marginLeft={0} $marginBottom={0}>
                        {userDetails ? userDetails?.first_name + ' ' + userDetails?.last_name : 'Unknown name'}
                    </H2>
                    <FlexContainer $flexDirection='row' $justifyContent='flex-start'>
                        <MailIcon />
                        <P fontWeight={500}>{userDetails ? userDetails?.email : 'Unknown email'}</P>
                    </FlexContainer>
                </div>
            </FlexContainer>
        </>
    );
};

export default ProfileHeader;
