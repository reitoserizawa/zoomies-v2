import React from 'react';

import { LoaderDot, LoaderDotsContainer } from '../ui/loader.styled';
import { H1 } from '../ui/text-tags.styles';
import { FlexContainer } from '../ui/container.styles';

const Loader: React.FC<{ $small?: boolean; text?: string }> = ({ $small, text }) => (
    <>
        <FlexContainer $justifyContent='center' $gap={15}>
            <LoaderDotsContainer $small={$small}>
                <LoaderDot $small={$small} />
                <LoaderDot $small={$small} />
                <LoaderDot $small={$small} />
                <LoaderDot $small={$small} />
                <LoaderDot $small={$small} />
            </LoaderDotsContainer>
            <H1 style={{ fontWeight: '500', padding: $small ? '15px 0px' : '48px 0px' }} $margin={$small ? 0 : 16} size={$small ? 1.5 : 2}>
                {text ? text : 'Loading'}
            </H1>
        </FlexContainer>
    </>
);

export default Loader;
