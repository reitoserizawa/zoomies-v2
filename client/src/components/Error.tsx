import React from 'react';

import { P } from '../ui/heading.styles';

import { ErrorState } from '../interfaces/error';

const Error: React.FC<ErrorState> = ({ message }) => {
    return (
        <P color='red' margin='0px'>
            {message}
        </P>
    );
};

export default Error;
