import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Logout = (): null => {
    const { logout } = useAuth0();

    logout();
    return null;
};

export default Logout;
