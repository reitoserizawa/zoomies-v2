import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { ChildrenProps } from '../interfaces/react-children';

import { useAppSelector } from '../redux/hooks/hooks';

import FullScreenLoader from './FullScreenLoader';
import NavBar from './NavBar';

const RequiredLogin: React.FC<ChildrenProps> = ({ children }) => {
    const loading = useAppSelector(state => state.user.loading);
    const signedIn = useAppSelector(state => state.user.signedIn);

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token && !signedIn && !loading) {
            navigate('/login');
        }
    }, [signedIn, loading, navigate]);

    return (
        <>
            {loading ? (
                <FullScreenLoader />
            ) : (
                <>
                    <NavBar />
                    {children}
                </>
            )}
        </>
    );
};

export default RequiredLogin;
