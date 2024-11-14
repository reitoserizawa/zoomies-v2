import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { ChildrenProps } from '../states/react-children';

import { useAppDispatch, useAppSelector } from '../redux/hooks/hooks';

import FullScreenLoader from './FullScreenLoader';
import NavBar from './NavBar';
import { useGetUserDetailsQuery } from '../redux/reducers/protected-api-slice';
import { setLoading, setUserDetails } from '../redux/reducers/userSlice';

const PreLogin: React.FC<ChildrenProps> = ({ children }) => {
    const loading = useAppSelector(state => state.user.loading);
    const signedIn = useAppSelector(state => state.user.signedIn);

    const { data, isLoading } = useGetUserDetailsQuery(null);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!isLoading && data && !signedIn && token) {
            dispatch(setLoading());
            dispatch(setUserDetails(data));
        }

        if (!isLoading && (!data || !signedIn || !token)) {
            navigate('/login');
        }
    }, [signedIn, data, isLoading, navigate, dispatch]);

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

export default PreLogin;
