import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { ChildrenProps } from '../states/react-children';

import { useAppDispatch } from '../redux/hooks/hooks';
import { useGetUserDetailsQuery } from '../redux/reducers/protected-api-slice';

import FullScreenLoader from './FullScreenLoader';
import NavBar from './NavBar';

const AuthRequired: React.FC<ChildrenProps> = ({ children }) => {
    const token = localStorage.getItem('token');

    const { data, isLoading, error } = useGetUserDetailsQuery(null, {
        skip: !token
    });

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (data) {
            return;
        }

        // TODO: handle error in better way
        if (error) {
            localStorage.removeItem('token');
        }

        if (!token) {
            navigate('/login');
            return;
        }
    }, [token, data, error, isLoading, navigate, dispatch]);

    return (
        <>
            {isLoading ? (
                <FullScreenLoader text='Logging in' />
            ) : (
                <>
                    <NavBar />
                    {children}
                </>
            )}
        </>
    );
};

export default AuthRequired;
