import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AnonymousRoute = () => {
    const userRole = localStorage.getItem('userRole');
    const isAuth = localStorage.getItem('isAuth') === 'true';

    if (userRole === 'user' && isAuth) {
        return <Navigate to="/dashboard" />;
    }
    else if (userRole === 'admin' && isAuth) {
        return <Navigate to='/admin/dashboard' />;
    }

    return <Outlet />;
};

export default AnonymousRoute;
