import React, { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { dogPawImg } from '../images';
import { H2, P } from '../ui/text-tags.styles';
import { Button, LogInForm } from '../ui/form.styles';
import { FlexContainer, FullScreenContainer, ImgContainer } from '../ui/container.styles';

import { useCreateUserMutation } from '../redux/reducers/public-api-slice';
import { useAppDispatch, useAppSelector } from '../redux/hooks/hooks';
import { setUserDetails, resetUserState, setLoading, setUserError } from '../redux/reducers/userSlice';

import Error from './Error';
import Form from './Form';
import { UserCreateRequest } from '../states/user';
import FormInput from './Form/FormInput';

const Register: React.FC = () => {
    const [createUser] = useCreateUserMutation();

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const error = useAppSelector(state => state?.user?.error);
    const signedIn = useAppSelector(state => state.user.signedIn);

    const token = localStorage.getItem('token');

    useEffect(() => {
        if (signedIn || token) {
            navigate('/');
        }
    }, [token, signedIn, navigate]);

    const handleCreateUser = useCallback(
        (data: UserCreateRequest) => {
            dispatch(resetUserState());
            dispatch(setLoading());

            createUser(data)
                .unwrap()
                .then(data => {
                    const token = data?.token;
                    if (token) localStorage.setItem('token', token);

                    const user_details = data?.user;
                    if (user_details) {
                        dispatch(setUserDetails(user_details));
                    }
                })
                .catch(error => {
                    const statusCode = error?.status;
                    const message = error?.data?.error?.message;

                    dispatch(setUserError({ message, statusCode }));
                });
        },
        [createUser, dispatch]
    );

    return (
        <FullScreenContainer>
            <FlexContainer $gap='10px'>
                <ImgContainer height={dogPawImg.size.small}>
                    <img src={dogPawImg.src} alt={dogPawImg.alt} />
                </ImgContainer>
                <H2>Register your Zoomies account</H2>
                <Form<UserCreateRequest> onSubmit={handleCreateUser}>
                    <LogInForm>
                        <FormInput<UserCreateRequest> name='email' label='Email*' />
                        <FormInput<UserCreateRequest> name='first_name' label='First name*' />
                        <FormInput<UserCreateRequest> name='last_name' label='Last name*' />
                        <FormInput<UserCreateRequest> name='username' label='Username*' />
                        <FormInput<UserCreateRequest> type='password' name='password' label='Password*' />
                        <Button type='submit'>Register</Button>
                    </LogInForm>
                </Form>
                {error && <Error message={error.message} />}
                <P>
                    Already a member? <a href='/login'>Login here</a>
                </P>
            </FlexContainer>
        </FullScreenContainer>
    );
};

export default Register;
