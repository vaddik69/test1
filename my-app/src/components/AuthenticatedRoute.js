import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const user = JSON.parse(localStorage.getItem('user'));
// console.log(user.id);

const AuthenticatedRoute = ({ children }) => {
    if (user.id !== '1' || user.roles !== 'user') {
        return <Navigate to='/signin' replace />;
    }

    return children ? children : <Outlet />;
};

export default AuthenticatedRoute;