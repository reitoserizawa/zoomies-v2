import React from 'react';

import { P } from '../ui/text-tags.styles';

import { ErrorState } from '../states/error';

const Error: React.FC<ErrorState> = ({ message = 'Unknown error occured' }) => {
    return (
        <P color='red' $margin='0px'>
            {message}
        </P>
    );
};

export default Error;
