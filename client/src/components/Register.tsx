import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { dogPawImg } from '../images';
import { H2, P } from '../ui/heading.styles';
import { Button, Input, LogInForm } from '../ui/form.styles';
import { FlexContainer, FullScreenContainer, ImgContainer } from '../ui/container.styles';

import { useCreateUserMutation } from '../redux/reducers/public-api-slice';
import { useAppDispatch, useAppSelector } from '../redux/hooks/hooks';
import { logIn, resetUserState, setLoading, setUserError } from '../redux/reducers/userSlice';

import Error from './Error';

const Register: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const [createUser] = useCreateUserMutation();

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const error = useAppSelector(state => state?.user?.error);
    const signedIn = useAppSelector(state => state.user.signedIn);

    useEffect(() => {
        if (signedIn) {
            navigate('/');
        }
    }, [signedIn, navigate]);

    const register = useCallback(
        (e: React.FormEvent) => {
            e.preventDefault();

            dispatch(resetUserState());
            dispatch(setLoading());

            createUser({ email, username, password })
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
                });
        },
        [email, username, password, createUser, dispatch]
    );

    return (
        <FullScreenContainer>
            <FlexContainer gap='10px'>
                <ImgContainer size={dogPawImg.size.small}>
                    <img src={dogPawImg.src} alt={dogPawImg.alt} />
                </ImgContainer>
                <H2>Register your Zoomies account</H2>
                <LogInForm onSubmit={register}>
                    <P>Email</P>
                    <Input type='text' value={email} onChange={e => setEmail(e.target.value)}></Input>
                    <P>Username</P>
                    <Input type='text' value={username} onChange={e => setUsername(e.target.value)}></Input>
                    <P>Password</P>
                    <Input type='password' value={password} onChange={e => setPassword(e.target.value)}></Input>
                    <Button type='submit'>Register</Button>
                </LogInForm>
                {error && <Error message={error.message} />}
            </FlexContainer>
        </FullScreenContainer>
    );
};

export default Register;
