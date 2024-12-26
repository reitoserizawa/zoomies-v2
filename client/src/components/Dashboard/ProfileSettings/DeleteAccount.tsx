import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../../ui/form.styles';

import { useDeleteUserMutation } from '../../../redux/reducers/protected-api-slice';

const DeleteAccount: React.FC = () => {
    const navigate = useNavigate();
    const [deleteUser] = useDeleteUserMutation();

    const handleDeleteUser = useCallback(async () => {
        if (window.confirm(`Are you sure you want to delete your accound?`)) {
            await deleteUser(null);
            localStorage.removeItem('token');
            navigate('/login');
        }
    }, [deleteUser, navigate]);

    return (
        <div style={{ flexBasis: '50%' }}>
            <Button type='submit' $margin='0px' $delete style={{ flexBasis: '50%', width: '100%' }} onClick={() => handleDeleteUser()}>
                Delete account
            </Button>
        </div>
    );
};

export default DeleteAccount;
