import React, { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { dogPawImg } from '../images';
import { H2, P } from '../ui/text-tags.styles';
import { Button, LogInForm } from '../ui/form.styles';
import { FlexContainer, FullScreenContainer, ImgContainer } from '../ui/container.styles';

import { useCreateUserMutation } from '../redux/reducers/public-api-slice';

import { UserCreateRequest } from '../states/user';

// import Error from './Error';
import Form from './Form';
import FormInput from './Form/FormInput';

const Register: React.FC = () => {
    const [createUser, { data: registeredUserData }] = useCreateUserMutation();

    const navigate = useNavigate();

    const token = localStorage.getItem('token');

    useEffect(() => {
        if (token) {
            navigate('/');
        }
    }, [token, navigate]);

    const handleCreateUser = useCallback(
        async (data: UserCreateRequest) => {
            await createUser(data);

            const token = registeredUserData?.token;

            if (token) {
                localStorage.setItem('token', token);
                navigate('/');
            }
        },
        [createUser, registeredUserData?.token, navigate]
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
                {/* TODO: add error handling */}
                {/* {error && <Error message={error.data.message as string || error.message || ''} />} */}
                <P>
                    Already a member? <a href='/login'>Login here</a>
                </P>
            </FlexContainer>
        </FullScreenContainer>
    );
};

export default Register;
