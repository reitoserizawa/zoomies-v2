import React from 'react';

import { FullScreenContainer } from '../ui/container.styles';

import Loader from './Loader';

const FullScreenLoader: React.FC<{ text?: string }> = ({ text }) => (
    <FullScreenContainer $backgroundColor='none'>
        <Loader text={text} />
    </FullScreenContainer>
);

export default FullScreenLoader;
