import React from 'react';
import { LoaderContainer, LoaderDotsContainer } from '../ui/loader.styled';
import { LoaderDot } from '../ui/loader.styled';
import { H1 } from '../ui/text-tags.styles';

const FullScreenLoader: React.FC<{ text?: string }> = ({ text }) => {
    return (
        <LoaderContainer>
            <LoaderDotsContainer>
                <LoaderDot />
                <LoaderDot />
                <LoaderDot />
                <LoaderDot />
                <LoaderDot />
            </LoaderDotsContainer>
            <H1 style={{ fontWeight: '500', padding: '48px 0px' }}>{text ? text : 'Loading'}</H1>
        </LoaderContainer>
    );
};

export default FullScreenLoader;
