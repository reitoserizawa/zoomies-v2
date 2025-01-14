import React, { useCallback } from 'react';
import styled from 'styled-components';

import { FlexContainer } from '../../../ui/container.styles';
import { Button } from '../../../ui/form.styles';

import { useGetUserDetailsQuery, useUpdateUserDetailsMutation } from '../../../redux/reducers/protected-api-slice';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hooks';
import { toggleChangePasswordForm } from '../../../redux/reducers/appSlice';

import { UserState } from '../../../states/user';

import Loader from '../../Loader';
import Form from '../../Form';
import FormInput from '../../Form/FormInput';
import ChangePasswordForm from './ChangePasswordForm';
import DeleteAccount from './DeleteAccount';
import requiredValidator from '../../../utils/validators/requiredValidator';
import emailValidator from '../../../utils/validators/emailValidator';
import Error from '../../Error';
import Message from '../../Message';

export const ProfileSettingsFormContainer = styled.div`
    width: 100%;

    p {
        margin: 16px 16px 16px 8px;
    }
`;

const EditProfileForm: React.FC = () => {
    const dispatch = useAppDispatch();
    const isChangePasswordModalOpen = useAppSelector(state => state.app.isChangePasswordModalOpen);

    const { data, isFetching: fetchingUserDetails } = useGetUserDetailsQuery(null);
    const [updateUserDetails, { error, isSuccess }] = useUpdateUserDetailsMutation();

    const handleUpdateProfile = useCallback(
        async (data: UserState) => {
            await updateUserDetails(data);
        },
        [updateUserDetails]
    );

    if (fetchingUserDetails) {
        return (
            <div style={{ height: '350px' }}>
                <Loader />
            </div>
        );
    }

    if (!data) return null;

    const initialValues: UserState = {
        id: data.id,
        email: data?.email,
        first_name: data?.first_name,
        last_name: data?.last_name,
        username: data.username,
        phone: data?.phone
        // avatar_url: data?.avatar_url
    };

    return (
        <FlexContainer $alignItems='flex-start' $justifyContent='flex-start' style={{ padding: '0px 16px 48px' }}>
            <ProfileSettingsFormContainer>
                {isSuccess && <Message message='Profile updated' />}
                {error && 'data' in error && <Error message={error.data as string} />}
                <Form<UserState> initialValues={initialValues} onSubmit={handleUpdateProfile}>
                    <FormInput<UserState> name='email' label='Email*' validators={[requiredValidator, emailValidator]}></FormInput>
                    <FormInput<UserState> name='first_name' label='First name*' validators={[requiredValidator]}></FormInput>
                    <FormInput<UserState> name='last_name' label='Last name*' validators={[requiredValidator]}></FormInput>
                    <FormInput<UserState> name='username' label='Username*' validators={[requiredValidator]}></FormInput>
                    <FormInput<UserState> name='phone' label='Phone'></FormInput>
                    {/* <FormInput<UserState> name='avatar_url' label='Avatar URL'></FormInput> */}

                    <Button type='submit'>Edit profile</Button>
                </Form>
                <hr />
            </ProfileSettingsFormContainer>
            <FlexContainer $flexDirection='row' $gap={32} $justifyContent='center' $alignItems='middle' style={{ marginTop: '32px' }}>
                <div style={{ flexBasis: '50%' }}>
                    <Button type='submit' $margin='0px' $edit style={{ width: '100%' }} onClick={() => dispatch(toggleChangePasswordForm(true))}>
                        Change password
                    </Button>
                </div>
                {isChangePasswordModalOpen && <ChangePasswordForm />}
                <DeleteAccount />
            </FlexContainer>
        </FlexContainer>
    );
};

export default EditProfileForm;
