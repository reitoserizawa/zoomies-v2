import React from 'react';
import styled from 'styled-components';

import { FlexContainer } from '../ui/container.styles';
import { P } from '../ui/text-tags.styles';

import CheckIcon from '../images/icons/CheckIcon';

const MessageContainer = styled.div`
    background-color: #cefad0;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid green;
    margin-top: 8px;
`;

const Message: React.FC<{ message: string }> = ({ message = 'Success!' }) => (
    <MessageContainer>
        <FlexContainer $flexDirection='row' $justifyContent='flex-start' $alignItems='center' $gap='5px'>
            <CheckIcon size='16px' color='green' />
            <P color='green' style={{ margin: '0px' }}>
                {message}
            </P>
        </FlexContainer>
    </MessageContainer>
);

export default Message;
