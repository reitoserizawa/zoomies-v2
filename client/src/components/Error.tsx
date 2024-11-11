import React from 'react';

import { P } from '../ui/heading.styles';

import { ErrorState } from '../interfaces/error';

const Error = ({ message }: ErrorState) => {
    return (
        <P color='red' margin='0px'>
            {message}
        </P>
    );
};

export default Error;
