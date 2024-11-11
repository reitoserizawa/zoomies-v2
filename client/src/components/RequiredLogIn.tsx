import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { ChildrenProps } from '../interfaces/react-children';

import { useAppSelector } from '../redux/hooks/hooks';

import FullScreenLoader from './FullScreenLoader';

const RequiredLogin: React.FC<ChildrenProps> = ({ children }) => {
    const loading = useAppSelector(state => state.user.loading);
    const signedIn = useAppSelector(state => state.user.signedIn);

    const navigate = useNavigate();

    useEffect(() => {
        if (!signedIn && !loading) {
            navigate('/login');
        }
    }, [signedIn, loading, navigate]);

    return <>{loading ? <FullScreenLoader /> : children}</>;
};

export default RequiredLogin;
