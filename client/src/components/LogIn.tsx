import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { dogPawImg } from '../images';
import { H2, P } from '../ui/heading.styles';
import { Button, Input, LogInForm } from '../ui/form.styles';
import { FlexContainer, FullScreenContainer, ImgContainer } from '../ui/container.styles';

import { useLogInUserMutation } from '../redux/reducers/public-api-slice';
import { useAppDispatch, useAppSelector } from '../redux/hooks/hooks';
import { logIn, resetUserState, setLoading, setUserError } from '../redux/reducers/userSlice';

import Error from './Error';

const LogIn: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const [logInUser] = useLogInUserMutation();

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const signedIn = useAppSelector(state => state?.user?.signedIn);
    const error = useAppSelector(state => state?.user?.error);

    useEffect(() => {
        if (signedIn) {
            navigate('/');
        }
    }, [signedIn, navigate]);

    const login = useCallback(
        (e: React.FormEvent) => {
            e.preventDefault();

            dispatch(resetUserState());
            dispatch(setLoading());

            logInUser({ username, password })
                .unwrap()
                .then(data => {
                    const token = data?.token;
                    if (token) localStorage.setItem('token', token);

                    const user_details = data?.user;
                    if (user_details) {
                        dispatch(logIn(user_details));
                    }
                })
                .catch(error => {
                    const statusCode = error.status;
                    const message = error.data.error.message;

                    dispatch(setUserError({ message, statusCode }));
                })
                .finally(() => {
                    navigate('/');
                });
        },
        [username, password, logInUser, dispatch, navigate]
    );

    return (
        <FullScreenContainer>
            <FlexContainer gap='10px'>
                <ImgContainer size={dogPawImg.size.small}>
                    <img src={dogPawImg.src} alt={dogPawImg.alt} />
                </ImgContainer>
                <H2>Sign in to your Zoomies account</H2>
                <LogInForm onSubmit={login}>
                    <P>Username</P>
                    <Input type='text' value={username} onChange={e => setUsername(e.target.value)}></Input>
                    <P>Password</P>
                    <Input type='password' value={password} onChange={e => setPassword(e.target.value)}></Input>
                    <Button type='submit'>Sign in</Button>
                </LogInForm>
                <P>Not a member? Register here</P>
                {error && <Error message={error.message} />}
            </FlexContainer>
        </FullScreenContainer>
    );
};

export default LogIn;
