import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { ChildrenProps } from '../states/react-children';

import { useAppDispatch, useAppSelector } from '../redux/hooks/hooks';

import FullScreenLoader from './FullScreenLoader';
import NavBar from './NavBar';
import { useGetUserDetailsQuery } from '../redux/reducers/protected-api-slice';
import { setLoading, setUserDetails } from '../redux/reducers/userSlice';

const AuthRequired: React.FC<ChildrenProps> = ({ children }) => {
    const loading = useAppSelector(state => state.user.loading);
    const signedIn = useAppSelector(state => state.user.signedIn);
    const token = localStorage.getItem('token');

    const { data, isLoading, error } = useGetUserDetailsQuery(null, {
        skip: signedIn || !token
    });

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (signedIn) {
            return;
        }

        if (!token || error) {
            navigate('/login');
            return;
        }

        if (!isLoading && data && token) {
            dispatch(setLoading());
            dispatch(setUserDetails(data));
            return;
        }
    }, [token, signedIn, data, error, isLoading, navigate, dispatch]);

    return (
        <>
            {loading || isLoading ? (
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

export default AuthRequired;
