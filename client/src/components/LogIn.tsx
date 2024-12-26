import React, { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { dogPawImg } from '../images';
import { H2, P } from '../ui/text-tags.styles';
import { Button, LogInForm } from '../ui/form.styles';
import { FlexContainer, FullScreenContainer, ImgContainer } from '../ui/container.styles';

import { useLogInUserMutation } from '../redux/reducers/public-api-slice';

import { UserLogInRequest } from '../states/user';

// import Error from './Error';
import Form from './Form';
import FormInput from './Form/FormInput';

const LogIn: React.FC = () => {
    const token = localStorage.getItem('token');

    const [logInUser] = useLogInUserMutation();
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            navigate('/');
        }
    }, [token, navigate]);

    const login = useCallback(
        async (data: UserLogInRequest) => {
            const loggedInUserData = await logInUser(data);

            const token = loggedInUserData?.data?.token;

            if (token) {
                localStorage.setItem('token', token);
                navigate('/');
            }
        },
        [logInUser, navigate]
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
                {/* TODO: add error handling */}
                {/* {error && <Error message={error.data.message as string || error.message || ''} />} */}
            </FlexContainer>
        </FullScreenContainer>
    );
};

export default LogIn;
