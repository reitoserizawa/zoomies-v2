import React, { useCallback, useState } from 'react';
import { FlexContainer, FullScreenContainer, ImgContainer } from '../ui/container.styles';

import { dogPawImg } from '../images';
import { H2, P } from '../ui/heading.styles';
import { Button, Input, LogInForm } from '../ui/form.styles';
import { useLogInUserMutation } from '../redux/reducers/public-api-slice';
import { useAppDispatch, useAppSelector } from '../redux/hooks/hooks';
import { logIn, setError } from '../redux/reducers/userSlice';

const LogIn = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const [logInUser] = useLogInUserMutation();

    const dispatch = useAppDispatch();
    const user = useAppSelector(state => state.user);

    const login = useCallback(
        (e: React.FormEvent) => {
            e.preventDefault();

            logInUser({ username, password })
                .unwrap()
                .then(data => {
                    const token = data?.token;
                    if (token) localStorage.setItem('token', token);

                    const user_details = data?.user;
                    if (user) {
                        dispatch(logIn(user_details));
                    }
                })
                .catch(error => {
                    const statusCode = error.status;
                    const message = error.data.error.message;

                    dispatch(setError({ message, statusCode }));
                });
        },
        [username, password, logInUser, dispatch, user]
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
            </FlexContainer>
        </FullScreenContainer>
    );
};

export default LogIn;
