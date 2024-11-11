import React from 'react';

import { P } from '../ui/heading.styles';
import { useAppSelector } from '../redux/hooks/hooks';

const Profile: React.FC = () => {
    const user = useAppSelector(state => state.user);

    return (
        <P color='red' margin='0px'>
            {user.toString()}
        </P>
    );
};

export default Profile;
