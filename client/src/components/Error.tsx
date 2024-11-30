import React from 'react';
import styled from 'styled-components';

import { FlexContainer } from '../ui/container.styles';
import { P } from '../ui/text-tags.styles';
import WarnIcon from '../images/icons/WarnIcon';

import { ErrorState } from '../states/error';

const ErrorContainer = styled.div`
    background-color: #ffc1cc;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid red;
    margin-top: 8px;
`;

const Error: React.FC<ErrorState> = ({ message = 'Unknown error occured' }) => (
    <ErrorContainer>
        <FlexContainer $flexDirection='row' $justifyContent='flex-start' $alignItems='center' $gap='5px'>
            <WarnIcon size='16px' color='red' />
            <P color='red' style={{ margin: '0px' }}>
                {message}
            </P>
        </FlexContainer>
    </ErrorContainer>
);

export default Error;
