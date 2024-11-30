import React, { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { dogPawImg } from '../images';
import { H2, P } from '../ui/text-tags.styles';
import { Button, LogInForm } from '../ui/form.styles';
import { FlexContainer, FullScreenContainer, ImgContainer } from '../ui/container.styles';

import { useLogInUserMutation } from '../redux/reducers/public-api-slice';
import { useAppDispatch, useAppSelector } from '../redux/hooks/hooks';
import { setUserDetails, resetUserState, setLoading, setUserError } from '../redux/reducers/userSlice';

import Error from './Error';
import Form from './Form';
import { UserLogInRequest } from '../states/user';
import FormInput from './Form/FormInput';

const LogIn: React.FC = () => {
    const [logInUser] = useLogInUserMutation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const signedIn = useAppSelector(state => state?.user?.signedIn);
    const error = useAppSelector(state => state?.user?.error);

    const token = localStorage.getItem('token');

    useEffect(() => {
        if (signedIn || token) {
            navigate('/');
        }
    }, [token, signedIn, navigate]);

    const login = useCallback(
        (data: UserLogInRequest) => {
            dispatch(resetUserState());
            dispatch(setLoading());

            logInUser(data)
                .unwrap()
                .then(({ token, user }) => {
                    localStorage.setItem('token', token);
                    dispatch(setUserDetails(user));

                    navigate('/');
                })
                .catch(error => {
                    const statusCode = error?.status;
                    const message = error?.data?.error?.message;

                    dispatch(setUserError({ message, statusCode }));
                });
        },
        [logInUser, dispatch, navigate]
    );

    return (
        <FullScreenContainer>
            <FlexContainer $gap='10px'>
                <ImgContainer height={dogPawImg.size.small}>
                    <img src={dogPawImg.src} alt={dogPawImg.alt} />
                </ImgContainer>
                <H2>Sign in to your Zoomies account</H2>
                <LogInForm>
                    <Form<UserLogInRequest> onSubmit={login}>
                        <FormInput<UserLogInRequest> name='username' label='Username'></FormInput>
                        <FormInput<UserLogInRequest> type='password' name='password' label='Password'></FormInput>
                        <Button type='submit'>Sign in</Button>
                    </Form>
                </LogInForm>
                <P>
                    Not a member? <a href='/register'>Register here</a>
                </P>
                {error && <Error message={error.message} />}
            </FlexContainer>
        </FullScreenContainer>
    );
};

export default LogIn;
