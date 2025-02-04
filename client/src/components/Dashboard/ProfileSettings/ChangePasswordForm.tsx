import React, { useCallback, useRef } from 'react';

import { Button } from '../../../ui/form.styles';
import { ModalContainer, ModalContentContainer } from '../../../ui/modal.styles';
import { FlexContainer } from '../../../ui/container.styles';

import { useChangeUserPasswordMutation } from '../../../redux/reducers/protected-api-slice';
import { useAppDispatch } from '../../../redux/hooks/hooks';
import { toggleChangePasswordForm } from '../../../redux/reducers/appSlice';

import { UserChangePasswordRequest } from '../../../states/user';

import useClickOutside from '../../../hooks/useClickOutisde';

import Form from '../../Form';
import FormInput from '../../Form/FormInput';

const ChangePasswordForm: React.FC = () => {
    const [changePassword] = useChangeUserPasswordMutation();
    const dispatch = useAppDispatch();

    const ref = useRef<HTMLDivElement>(null);

    const closeModal = useCallback(() => {
        dispatch(toggleChangePasswordForm(false));
    }, [dispatch]);

    useClickOutside(closeModal, ref);

    const handleChangePassword = useCallback(
        async (data: UserChangePasswordRequest) => {
            await changePassword(data);
            closeModal();
        },
        [changePassword, closeModal]
    );

    return (
        <ModalContainer>
            <FlexContainer>
                <ModalContentContainer ref={ref}>
                    <Form<UserChangePasswordRequest> onSubmit={handleChangePassword}>
                        <FormInput<UserChangePasswordRequest> name='currentPassword' label='Current Password' type='password' />
                        <FormInput<UserChangePasswordRequest> name='newPassword' label='New Password' type='password' />
                        <Button type='submit' $margin='18px 0px 0px 0px'>
                            Change Password
                        </Button>
                        {/* TODO: error handlingt */}
                    </Form>
                </ModalContentContainer>
            </FlexContainer>
        </ModalContainer>
    );
};

export default ChangePasswordForm;
